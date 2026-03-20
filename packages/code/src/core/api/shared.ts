import type { ApiDocConfig, ApiParamsCtx, DocApiConfig, RecordType } from "@/types";
import type { OpenAPIObject, ParameterLocation, ParameterObject as OasParameterObject, ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { getFullPath, toValue } from "@/shared";
import { outputFileSync, removeSync } from "fs-extra/esm";
import { merge } from "es-toolkit";

/** 内容类型映射-多类型生成时使用 */
export const CONTENT_TYPE_MAP = {
  "text/html": "html",
  "text/plain": "text",
  "multipart/form-data": "form",
  "application/json": "json",
  "application/x-www-form-urlencoded": "url",
  "application/octet-stream": "stream",
};

/** API定义目录名 */
export const API_DEFINE_DIR_NAME = "apis";

/** API定义核心文件名 */
export const API_DEFINE_CORE_NAME = "core";

/**
 * 解析参数名称，提取 contentType 后缀
 */
const resolveContentTypeName = (contentType: string): string => {
  return CONTENT_TYPE_MAP[contentType as keyof typeof CONTENT_TYPE_MAP]
    ?? contentType.split(/[^a-zA-Z0-9]/).at(-1)
    ?? "";
};

/**
 * 转换路径参数名为 "by" + 大驼峰格式
 */
const transformPathParam = (match: string, p1: string | undefined, p2: string | undefined): string => {
  const word = p1 || p2 || "";
  const transformed = "by" + word[0].toUpperCase() + word.slice(1);
  return match[0] === ":" ? ":" + transformed : match[0] + transformed + match.slice(-1);
};

/**
 * 驼峰化单词边界
 */
const camelCaseWord = (_match: string, word: string): string => {
  return word[0].toUpperCase() + word.slice(1);
};

/**
 * 生成 API 名称
 */
const generateApiName = (method: string, rest: string[], contentType?: string): string => {
  const names = [method.toLowerCase(), ...rest];
  if (contentType) {
    names.push(resolveContentTypeName(contentType));
  }
  return names
    .join("/")
    .replace(/(?:[{[](\w+)[\]}]|:(\w+))/gi, transformPathParam)
    .replace(/[.\-_~](\w+)/gi, camelCaseWord)
    .replace(/[^a-zA-Z0-9\/]/g, "")
    .replace(/\/+(\w+)/g, (_m, p1) => p1[0].toUpperCase() + p1.slice(1));
};

/**
 * 获取参数定义-支持引用
 */
export const resolveParameter = (param?: SchemaObject | OasParameterObject | ReferenceObject, apiDoc?: OpenAPIObject): any => {
  if (!param) return null;
  if (param && "$ref" in param) {
    let components = apiDoc?.components ?? {};
    const segments = param.$ref?.replace("#/components/", "").split("/") ?? [];
    for (const segment of segments) {
      if (segment in components) {
        components = (components as any)[segment];
      }
    }
    return resolveParameter(components as OasParameterObject | ReferenceObject, apiDoc);
  }
  return param;
};

/**
 * 根据类型值获取接口params参数
 */
export const getApiParamList = (paramIn: ParameterLocation, apiConfig: ApiParamsCtx, apiDoc: OpenAPIObject): OasParameterObject[] => {
  const params = apiConfig.operation.parameters ?? [];
  return params.reduce<OasParameterObject[]>((acc, cur) => {
    if ("in" in cur) {
      return cur.in === paramIn ? [...acc, cur] : acc;
    }
    const resolved = resolveParameter(cur, apiDoc);
    if (resolved && "in" in resolved && resolved.in === paramIn) {
      return [...acc, resolved as OasParameterObject];
    }
    return acc;
  }, []);
};

/**
 * 获取接口的body参数
 */
export const getApiBodyJson = (contentType: string, apiConfig: ApiParamsCtx, apiDoc: OpenAPIObject): SchemaObject | null => {
  const requestBody = apiConfig.operation.requestBody;
  if (requestBody && "content" in requestBody) {
    const schema = requestBody.content[contentType]?.schema ?? null;
    return schema ? (resolveParameter(schema, apiDoc) as SchemaObject) : null;
  }
  return (resolveParameter(requestBody, apiDoc) as SchemaObject | null) ?? null;
};

/**
 * 获取接口的response参数
 */
export const getApiResponseJson = (
  responseCode: number | string,
  responseType: string,
  apiConfig: ApiParamsCtx,
  apiDoc: OpenAPIObject,
): SchemaObject | null => {
  const responses = apiConfig.operation.responses?.[responseCode]?.content?.[responseType]?.schema ?? null;
  if (responses) {
    return resolveParameter(responses, apiDoc) as SchemaObject;
  }
  return null;
};

/**
 * 生成 API 配置
 */
export const generateApiConfig = (ctx: ApiParamsCtx): Required<DocApiConfig> => {
  const { summary = "", description = "" } = ctx.operation ?? {};
  const url = ctx.path.replace(/^\/api(\/v\d+)?/gi, "");
  const [module, ...rest] = url.split("/").filter(Boolean);
  const options = {} as RecordType;

  if (ctx.contentType) {
    (options.headers ??= {})["Content-Type"] = ctx.contentType;
  }

  const name = generateApiName(ctx.method, rest, ctx.contentType);
  return { url, method: ctx.method.toUpperCase(), name, module, options, summary, description };
};

/**
 * 处理单个接口配置
 */
const processApiConfig = (
  contentType: string,
  apiConfig: ApiParamsCtx,
  apiDoc: OpenAPIObject,
  docConfig: ApiDocConfig,
  moduleMap: Map<string, Required<ApiParamsCtx>[]>,
): void => {
  apiConfig.body = getApiBodyJson(contentType, apiConfig, apiDoc);
  const responseCode = toValue(docConfig.apiResponseCode, apiConfig);
  const responseType = toValue(docConfig.apiResponseType, apiConfig);
  apiConfig.response = getApiResponseJson(responseCode, responseType, apiConfig, apiDoc);
  apiConfig.config = generateApiConfig(apiConfig);

  if (docConfig.apiParser) {
    apiConfig.config = merge(apiConfig.config, docConfig.apiParser(apiConfig));
  }

  let module = apiConfig.config?.module || "all";
  if (module === "index") module = "all";
  if (!moduleMap.has(module)) moduleMap.set(module, []);
  moduleMap.get(module)?.push(apiConfig as Required<ApiParamsCtx>);
};

/**
 * 将文档接口扁平化转化为模块-接口列表的映射
 */
export const flattenApiMap = (apiDoc: OpenAPIObject, docConfig: ApiDocConfig): Map<string, Required<ApiParamsCtx>[]> => {
  const moduleMap = new Map<string, Required<ApiParamsCtx>[]>();

  for (const [path, pathItem] of Object.entries(apiDoc.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      const apiConfig = {
        path,
        method,
        pathItem,
        operation,
        contentType: "",
        config: {},
      } as ApiParamsCtx;

      apiConfig.query = getApiParamList("query", apiConfig, apiDoc);
      apiConfig.params = getApiParamList("path", apiConfig, apiDoc);
      apiConfig.header = getApiParamList("header", apiConfig, apiDoc);
      apiConfig.cookie = getApiParamList("cookie", apiConfig, apiDoc);

      if (docConfig.enableMultiContentType) {
        for (const requestType of Object.keys(operation.requestBody?.content ?? {})) {
          const apiConfigByType = { ...apiConfig, contentType: requestType };
          processApiConfig(requestType, apiConfigByType, apiDoc, docConfig, moduleMap);
        }
      } else {
        processApiConfig(toValue(docConfig.apiRequestType, apiConfig), apiConfig, apiDoc, docConfig, moduleMap);
      }
    }
  }

  return moduleMap;
};