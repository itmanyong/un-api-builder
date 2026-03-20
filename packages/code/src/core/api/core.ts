import type { DocResultApi, ApiDocConfig, RecordType, ApiParamsCtx } from "@/types";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { getFullPath, LIB_NAME, toValue, toVariableNameCamelCase } from "@/shared";
import { outputFileSync, removeSync } from "fs-extra/esm";
import { isEmptyObject, omitBy } from "es-toolkit";
import { API_DEFINE_DIR_NAME, flattenApiMap } from "./shared";
import { getDocNote, getApiNote, getModuleNote } from "../note";
import { DEFAULT_FILE_HEADER } from "../config";

/**
 * 生成单个模块的接口定义文件内容
 */
const generateModuleFileContent = (
  moduleName: string,
  apiModuleList: Required<ApiParamsCtx>[],
  docConfig: ApiDocConfig,
): string[] => {
  const filename = `${moduleName}.${docConfig.outputType}`;
  const outputPath = getFullPath(docConfig.output, API_DEFINE_DIR_NAME, filename);
  const fileContentJson = apiModuleList.reduce((acc, cur) => {
    acc[cur.config.name] = omitBy(cur.config, (val, key) => !val || ["module", "name"].includes(key) || isEmptyObject(val));
    return acc;
  }, {} as RecordType);

  return [
    ...DEFAULT_FILE_HEADER,
    ...toValue(docConfig.fileHeader, outputPath, "module", moduleName, apiModuleList),
    `export default ${JSON.stringify(fileContentJson, null, 2)};`,
    ...toValue(docConfig.fileFooter, outputPath, "module", moduleName, apiModuleList),
  ];
};

/**
 * 生成模块桶文件内容
 */
const generateApiBucketContent = (
  apiModuleMap: Map<string, Required<ApiParamsCtx>[]>,
  docConfig: ApiDocConfig,
): string[] => {
  const content: string[] = [];
  for (const [moduleName] of apiModuleMap) {
    content.push(`export { default as ${moduleName} } from './${moduleName}.${docConfig.outputType}';`);
  }

  const apiBucketFilename = getFullPath(docConfig.output, API_DEFINE_DIR_NAME, `index.${docConfig.outputType}`);
  content.unshift(...toValue(docConfig.fileHeader, apiBucketFilename, "bucket"));
  content.unshift(...DEFAULT_FILE_HEADER);
  content.push(...toValue(docConfig.fileFooter, apiBucketFilename, "bucket"));
  return content;
};

/**
 * 生成 API 创建函数调用代码
 */
const buildApiCreationCode = (docConfig: ApiDocConfig, target: string): string => {
  const wrapApiName = toVariableNameCamelCase("create", docConfig.codeMode, docConfig.exportMode);
  return `${wrapApiName}(${target},${docConfig.requestor})`;
};

/**
 * 生成导出声明行
 */
const buildExportLine = (
  docConfig: ApiDocConfig,
  exportName: string,
  apiCreationCode: string,
  comment?: string,
): string[] => {
  const lines: string[] = [];
  if (comment) lines.push(comment);
  lines.push(`export const ${exportName} = ${apiCreationCode};`);
  return lines;
};

/**
 * 生成模块级别导出（module 导出模式）
 */
const generateModuleExports = (docConfig: ApiDocConfig, apiModuleMap: Map<string, Required<ApiParamsCtx>[]>): string[] => {
  const lines: string[] = [];

  for (const [moduleName, apiModuleList] of apiModuleMap) {
    const exportName = toVariableNameCamelCase(docConfig.prefix, moduleName);
    lines.push(getModuleNote(moduleName, apiModuleList));
    const apiCreationCode = buildApiCreationCode(docConfig, `${API_DEFINE_DIR_NAME}.${moduleName}`);
    lines.push(...buildExportLine(docConfig, exportName, apiCreationCode));
  }

  return lines;
};

/**
 * 生成 API 级别导出（api 导出模式）
 */
const generateApiExports = (docConfig: ApiDocConfig, apiModuleMap: Map<string, Required<ApiParamsCtx>[]>): string[] => {
  const lines: string[] = [];

  for (const [, apiModuleList] of apiModuleMap) {
    for (const apiConfig of apiModuleList) {
      const exportName = toVariableNameCamelCase(docConfig.prefix, apiConfig.config.module, apiConfig.config.name);
      lines.push(getApiNote(apiConfig));
      const apiCreationCode = buildApiCreationCode(docConfig, `${API_DEFINE_DIR_NAME}.${apiConfig.config.module}.${apiConfig.config.name}`);
      lines.push(...buildExportLine(docConfig, exportName, apiCreationCode));
    }
  }

  return lines;
};

/**
 * 生成文档桶文件内容
 */
const generateDocBucketContent = (
  docConfig: ApiDocConfig,
  apiModuleMap: Map<string, Required<ApiParamsCtx>[]>,
): string[] => {
  const content: string[] = [];
  const docBucketFilename = getFullPath(docConfig.output, `index.${docConfig.outputType}`);

  content.push(`import * as ${API_DEFINE_DIR_NAME} from './${API_DEFINE_DIR_NAME}/index.${docConfig.outputType}';`);
  const wrapApiName = toVariableNameCamelCase("create", docConfig.codeMode, docConfig.exportMode);
  content.push(`import { ${wrapApiName} } from '${LIB_NAME}/browser';`);

  if (docConfig.exportMode === "module") {
    content.push(...generateModuleExports(docConfig, apiModuleMap));
  }

  if (docConfig.exportMode === "api") {
    content.push(...generateApiExports(docConfig, apiModuleMap));
  }

  if (docConfig.exportMode === "doc") {
    const exportName = toVariableNameCamelCase(docConfig.prefix, docConfig.name);
    content.push(getDocNote(apiModuleMap));
    const apiCreationCode = buildApiCreationCode(docConfig, API_DEFINE_DIR_NAME);
    content.push(...buildExportLine(docConfig, exportName, apiCreationCode));
  }

  if (docConfig.exportMode === "default") {
    content.push(getDocNote(apiModuleMap));
    content.push(`export default ${buildApiCreationCode(docConfig, API_DEFINE_DIR_NAME)};`);
  }

  content.unshift(...toValue(docConfig.fileHeader, docBucketFilename, "bucket"));
  content.unshift(...DEFAULT_FILE_HEADER);
  content.push(...toValue(docConfig.fileFooter, docBucketFilename, "bucket"));

  return content;
};

/**
 * 生成 API
 */
export const generateApi = (
  apiDoc: OpenAPIObject,
  apiModuleMap: Map<string, Required<ApiParamsCtx>[]>,
  docConfig: ApiDocConfig,
): DocResultApi => {
  let moduleTotal = 0;
  let apiTotal = 0;
  let fileTotal = 0;

  for (const [moduleName, apiModuleList] of apiModuleMap) {
    const outputPath = getFullPath(docConfig.output, API_DEFINE_DIR_NAME, `${moduleName}.${docConfig.outputType}`);
    const fileContent = generateModuleFileContent(moduleName, apiModuleList, docConfig);
    outputFileSync(outputPath, fileContent.join("\n") + "\n");
    moduleTotal++;
    apiTotal += apiModuleList.length;
    fileTotal++;
  }

  const apiBucketFilename = getFullPath(docConfig.output, API_DEFINE_DIR_NAME, `index.${docConfig.outputType}`);
  const apiBucketContent = generateApiBucketContent(apiModuleMap, docConfig);
  outputFileSync(apiBucketFilename, apiBucketContent.join("\n"));
  fileTotal++;

  const docBucketFilename = getFullPath(docConfig.output, `index.${docConfig.outputType}`);
  const docBucketContent = generateDocBucketContent(docConfig, apiModuleMap);
  outputFileSync(docBucketFilename, docBucketContent.join("\n"));
  fileTotal++;

  removeSync(getFullPath(docConfig.output, docConfig.name));

  return { moduleTotal, apiTotal, outputPath: docConfig.output, fileTotal };
};