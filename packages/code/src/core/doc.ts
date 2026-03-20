import type { ApiDocConfig, DocResult } from "@/types";
import { fetchApiDoc, getFullPath } from "@/shared";
import { flattenApiMap, generateApi } from "./api";
import { generateTsType } from "./ts";
import { DEFAULT_DOC_CONFIG } from "./config";
import { outputJSON } from "fs-extra/esm";
import { exec } from "child_process";


const formatWithOxfmt = (dirPath: string): void => {
  try {
    exec(`oxfmt "${dirPath}"`, (error) => {
      // ignore error
    });
  } catch {
    // oxfmt not found or formatting failed, skip
  }
};

/**
 * 定义文档
 * @param docConfig 文档配置
 * @returns 文档结果
 */
export const defineDoc = async (docConfig: ApiDocConfig): Promise<DocResult> => {
  const startTime = Date.now();
  console.info(`execute doc start: ${docConfig.name} => ${docConfig.url} => ${docConfig.output}`);

  try {
    let apiDoc = await fetchApiDoc(docConfig.url);

    if (docConfig.docParser) {
      apiDoc = docConfig.docParser(apiDoc);
    }

    if (!apiDoc.openapi && !docConfig.docParser) {
      throw new Error(`api doc ${docConfig.name} is not openapi doc, please check docParser config`);
    }

    outputJSON(getFullPath(DEFAULT_DOC_CONFIG.cache.path, `api-docs/${docConfig.name}.json`), apiDoc, {
      encoding: "utf-8",
      flag: "w",
      flush: true,
      spaces: 2,
    });

    const apiModuleMap = flattenApiMap(apiDoc, docConfig);

    const [apiResult, tsResult] = await Promise.all([
      generateApi(apiDoc, apiModuleMap, docConfig),
      generateTsType(apiDoc, apiModuleMap, docConfig),
    ]);

    const apiOutputDir = getFullPath(apiResult.outputPath, docConfig.name);
    const tsOutputDir = getFullPath(tsResult.outputPath, docConfig.name);

    formatWithOxfmt(apiOutputDir);
    formatWithOxfmt(tsOutputDir);

    const durationMs = Date.now() - startTime;
    console.info(`execute doc success: ${docConfig.name} => ${docConfig.output} (${durationMs}ms)`);

    return { api: apiResult, ts: tsResult, docConfig, durationMs };
  } catch (error) {
    console.error(error);
    throw error;
  }
};