import { OpenAPIObject } from "openapi3-ts/oas31";
import process from "process";
import { join } from "path";
import {  readFileSync } from "fs";
/**
 * 根据规则合并文件内容行
 * @param fileRows 文件内容行数组
 * @param newRows 新内容行数组
 * @returns 合并后的文件内容行数组
 */
export const mergeFileRows = (fileRows: string[], newRows: string[]) => {
  if (!newRows?.length) return fileRows;
  const fileLastImportIndex = fileRows.findLastIndex((v) => v.startsWith("import "));
  if (fileLastImportIndex != -1) {
    fileRows.splice(fileLastImportIndex + 1, 0, ...newRows);
    return fileRows;
  }
  fileRows.push(...newRows);
  return fileRows;
};
/**
 * 下载 openapi 文档
 * @param url openapi 文档地址
 * @returns 文档内容
 */
export const fetchApiDoc = async (url: string): Promise<any> => {
  try {
    // 是网络路径就下载文档
    if (url.startsWith("http")) {
      const res = await fetch(url);
      const resJson = (await res.json()) as OpenAPIObject;
      if (!res.ok) {
        throw new Error(`load api doc error:  ${res.status} ${res.statusText} ${url}`);
      }
      return resJson;
    }
    // 是json文件就直接读取
    if (url.endsWith(".json")) {
      return JSON.parse(readFileSync(getFullPath(url), { encoding: "utf-8" }));
    }
    // 是本地路径就读取文件
    const localDoc = readFileSync(getFullPath(url), { encoding: "utf-8" });
    return localDoc;
  } catch (error) {
    throw new Error(`load api doc error: ${url} ${error}`);
  }
};
/**
 * 获取完整路径
 * @param args 路径参数
 * @returns 完整路径
 */
export const getFullPath = (...args: string[]) => join(process.cwd(), ...args.filter(Boolean));
