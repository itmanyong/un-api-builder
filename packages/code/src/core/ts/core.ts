import type { SchemaObject, ReferenceObject, OpenAPIObject, ParameterObject } from "openapi3-ts/oas31";
import type { ApiDocConfig, ApiParamsCtx } from "@/types";
import { capitalizeUpper, getFullPath, LIB_NAME, mergeFileRows, toValue, toVariableNameCamelCase } from "@/shared";
import { createSchemaToTs } from "./shared";
import { outputFileSync, removeSync } from "fs-extra/esm";
import { getApiNote, getDocNote, getModuleNote, getTypedParams, getTypedObjectWithNested } from "../note";
import { API_TYPE_GENERATE_NAME } from "../config";

/**
 * 判断指定类型的参数项是否必填
 * @param apiConfig 参数项配置对象
 * @param type 参数项类型
 * @returns 是否必填
 */
export const isRequired = (apiConfig: ApiParamsCtx, type: keyof ApiParamsCtx) => {
  const params = apiConfig[type];
  if (typeof params === "object" && params !== null && "required" in params && params?.required) return true;
  if (Array.isArray(params) && params.some((v) => v.required)) return true;
  return false;
};

/**
 * 构建 API 类型参数字符串
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiConfig API 配置
 * @returns API 类型参数字符串
 */
const buildApiTypeParams = (docConfig: ApiDocConfig, capitalizedModuleName: string, apiConfig: Required<ApiParamsCtx>): string => {
  return `${docConfig.dts.apiOptions},${docConfig.dts.apiResult},tsTypes.${capitalizedModuleName}.${apiConfig.apiParamsGenericName}`;
};

/**
 * 生成 API 导出声明行
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiConfig API 配置
 * @param exportName 导出名称
 * @returns 导出声明行
 */
const buildApiExportLine = (
  docConfig: ApiDocConfig,
  capitalizedModuleName: string,
  apiConfig: Required<ApiParamsCtx>,
  exportName: string,
): string => {
  const apiParams = buildApiTypeParams(docConfig, capitalizedModuleName, apiConfig);
  return `  export const ${exportName}: ${API_TYPE_GENERATE_NAME}<${apiParams}>;`;
};

/**
 * 生成模块级接口方法的类型定义行
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiModuleList API 列表
 * @param indent 缩进字符
 * @returns 接口方法类型定义行数组
 */
const buildApiMethods = (
  docConfig: ApiDocConfig,
  capitalizedModuleName: string,
  apiModuleList: Required<ApiParamsCtx>[],
  indent: string = "    ",
): string[] => {
  return apiModuleList.map((apiConfig) => {
    const apiParams = buildApiTypeParams(docConfig, capitalizedModuleName, apiConfig);
    return `${indent}${apiConfig.config.name}: ${API_TYPE_GENERATE_NAME}<${apiParams}>;`;
  });
};

/**
 * 生成模块级导出内容（用于 doc/default 导出模式）
 * @param apiModuleMap API 模块映射
 * @param docConfig 文档配置
 * @param indent 缩进字符
 * @returns 模块级导出内容字符串
 */
const buildModulesContent = (apiModuleMap: Map<string, Required<ApiParamsCtx>[]>, docConfig: ApiDocConfig, indent: string = "    "): string => {
  const modules = Array.from(apiModuleMap.entries()).map(([moduleName, apiModuleList]) => {
    const capitalizedModuleName = `${capitalizeUpper(moduleName)}Models`;
    const methods = buildApiMethods(docConfig, capitalizedModuleName, apiModuleList, indent);
    return `${indent}${moduleName}: {\n${methods.join("\n")}\n${indent}};`;
  });
  return modules.join("\n");
};

/**
 * 解析openapi doc 所有的 schema 到 typescript 类型
 * @param apiDoc openapi doc 对象
 * @param apiModuleMap api 映射表
 * @param docConfig 文档配置对象
 * @param log 日志对象
 * @returns typescript 类型字符串
 */
export const generateTsType = (apiDoc: OpenAPIObject, apiModuleMap: Map<string, Required<ApiParamsCtx>[]>, docConfig: ApiDocConfig) => {
  const result = { outputPath: docConfig.dts.path, tsTotal: 0, fileTotal: 0 };

  if (!docConfig.dts.enable) return result;

  const schemaToTs = createSchemaToTs(docConfig.dts.typeConvert);
  const docNamespace = capitalizeUpper(docConfig.name);

  const paramsToTs = (params: ParameterObject[] | undefined, globalPrefix: string): string => {
    if (!params || params.length === 0) return "Record<string, any>";
    return getTypedParams(params, schemaToTs, globalPrefix);
  };

  const bodyToTs = (body: SchemaObject | ReferenceObject | null | undefined, globalPrefix: string): string => {
    if (!body) return "any";
    const bodySchema = body as SchemaObject;
    if (bodySchema.properties) {
      return getTypedObjectWithNested("", bodySchema.properties, bodySchema.required, schemaToTs, globalPrefix);
    }
    return schemaToTs(body, globalPrefix);
  };

  const responseToTs = (response: SchemaObject | ReferenceObject | null | undefined, globalPrefix: string): string => {
    if (!response) return "any";
    const responseSchema = response as SchemaObject;
    if (responseSchema.properties) {
      return getTypedObjectWithNested("", responseSchema.properties, responseSchema.required, schemaToTs, globalPrefix);
    }
    return schemaToTs(response, globalPrefix);
  };

  const buildApiTypeDefinitions = (apiConfig: Required<ApiParamsCtx>, capitalizedModuleName: string): string[] => {
    const apiName = apiConfig.config.name;
    const apiNameCapitalized = `${capitalizedModuleName}${capitalizeUpper(apiName)}`;
    const lines: string[] = [];

    lines.push(`/**\n* @url ${apiConfig.config.url} \n* @summary ${apiConfig.config.summary} \n* @description ${apiConfig.config.description} \n */`);
    lines.push(`export type ${apiNameCapitalized}Query = ${paramsToTs(apiConfig.query, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Params = ${paramsToTs(apiConfig.params, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Body = ${bodyToTs(apiConfig.body, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Response = ${responseToTs(apiConfig.response, `${docNamespace}Models`)}`);

    apiConfig.apiParamsGenericName = `${apiNameCapitalized}Generic`;
    lines.push(`export type ${apiConfig.apiParamsGenericName} = {
          query: ${apiNameCapitalized}Query;
          params: ${apiNameCapitalized}Params;
          data: ${apiNameCapitalized}Body;
          result: ${apiNameCapitalized}Response;
          queryRequired: ${isRequired(apiConfig, "query")};
          paramsRequired: ${isRequired(apiConfig, "params")};
          dataRequired: ${isRequired(apiConfig, "body")};\n};
     `);

    return lines;
  };

  const buildModuleFileContent = (
    moduleName: string,
    capitalizedModuleName: string,
    docNamespace: string,
    apiModuleList: Required<ApiParamsCtx>[],
  ): string[] => {
    const fileRows = [`import { ${docNamespace}Models } from './models';`];
    const fileApiRows: string[] = [];

    for (const apiConfig of apiModuleList) {
      fileApiRows.push(...buildApiTypeDefinitions(apiConfig, capitalizedModuleName));
    }

    fileRows.push(`export namespace ${capitalizedModuleName}Models {`);
    fileRows.push(...fileApiRows);
    fileRows.push(`}`);

    return fileRows;
  };

  const fileMap = new Map<string, string[]>([
    ["index.d.ts", [`import * as tsTypes from './types';`, `import type { ${API_TYPE_GENERATE_NAME} } from '${LIB_NAME}';`]],
    ["types/index.d.ts", [`export { ${docNamespace}Models } from './models';`]],
    ["types/models.d.ts", []],
  ]);

  const componentsNamespace = `${docNamespace}Models`;
  const componentsTsTypeModule = Object.entries(apiDoc.components?.schemas || {}).map(([key, schema]) => [key, schemaToTs(schema)]);
  const componentsTsFileContent = componentsTsTypeModule.map(([tsName, tsType]) => `export type ${tsName} = ${tsType}`).join("\n");
  fileMap.set(`types/models.d.ts`, [`export namespace ${componentsNamespace} {\n${componentsTsFileContent}\n}`]);
  result.tsTotal += componentsTsTypeModule.length;

  for (const [moduleName, apiModuleList] of apiModuleMap) {
    const capitalizedModuleName = capitalizeUpper(moduleName);
    const apiBucketContent = fileMap.get("types/index.d.ts")!;
    apiBucketContent.push(`export { ${capitalizedModuleName}Models } from './${moduleName}';`);

    const filename = `types/${moduleName}.d.ts`;
    const moduleFileContent = buildModuleFileContent(moduleName, capitalizedModuleName, docNamespace, apiModuleList);
    fileMap.set(filename, moduleFileContent);
    result.tsTotal += apiModuleList.length * 5; // 5 types per API: Query, Params, Body, Response, Generic
  }

  const rootFileRows = fileMap.get("index.d.ts")!;
  rootFileRows.push(`export {};\ndeclare module "${docConfig.dts.pathAlias}" {`);

  if (docConfig.exportMode === "api") {
    for (const [, apiModuleList] of apiModuleMap) {
      for (const apiConfig of apiModuleList) {
        const exportName = toVariableNameCamelCase(docConfig.prefix, apiConfig.config.module, apiConfig.config.name);
        rootFileRows.push(getApiNote(apiConfig));
        const capitalizedModuleName = `${capitalizeUpper(apiConfig.config.module)}Models`;
        rootFileRows.push(buildApiExportLine(docConfig, capitalizedModuleName, apiConfig, exportName));
      }
    }
  }

  if (docConfig.exportMode === "module") {
    for (const [moduleName, apiModuleList] of apiModuleMap) {
      const exportName = toVariableNameCamelCase(docConfig.prefix, moduleName);
      rootFileRows.push(getModuleNote(moduleName, apiModuleList));
      rootFileRows.push(`  export const ${exportName}: {`);
      const capitalizedModuleName = `${capitalizeUpper(moduleName)}Models`;
      rootFileRows.push(...buildApiMethods(docConfig, capitalizedModuleName, apiModuleList));
      rootFileRows.push(`  };`);
    }
  }

  if (docConfig.exportMode === "doc") {
    const exportName = toVariableNameCamelCase(docConfig.prefix, docConfig.name);
    rootFileRows.push(getDocNote(apiModuleMap));
    rootFileRows.push(`  export const ${exportName}: {`);
    rootFileRows.push(buildModulesContent(apiModuleMap, docConfig));
    rootFileRows.push(`  }`);
  }

  if (docConfig.exportMode === "default") {
    const exportName = toVariableNameCamelCase(docConfig.prefix, docConfig.name);
    rootFileRows.push(getDocNote(apiModuleMap));
    rootFileRows.push(`const ${exportName}: {`);
    rootFileRows.push(buildModulesContent(apiModuleMap, docConfig));
    rootFileRows.push(`  }`);
    rootFileRows.push(`export default ${exportName};`);
  }

  rootFileRows.push(`}`);

  removeSync(getFullPath(docConfig.dts.path, docConfig.name));

  for (const [filename, fileRows] of fileMap) {
    const filePath = getFullPath(docConfig.dts.path, docConfig.name, filename);
    mergeFileRows(fileRows, toValue(docConfig.dts.fileHeader, filePath, docConfig));
    const fileAllRows = [...fileRows, ...toValue(docConfig.dts.fileFooter, filePath, docConfig)];
    outputFileSync(filePath, fileAllRows.join("\n") + "\n");
    result.fileTotal++;
  }

  return result;
};
