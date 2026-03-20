import { cloneDeep, merge } from "es-toolkit";
import { loadConfigSync } from "unconfig";
import { LIB_NAME } from "@/shared";
import type { ApiDocConfig, Config, RecordType } from "@/types";

export const DEFAULT_CONFIG_PATH = "un-api-builder.config";
export const API_TYPE_GENERATE_NAME = "ApiFunctionGenerate";
export const DEFAULT_FILE_HEADER = [`// 当前文件由 ${LIB_NAME} 自动生成-非必要请勿手动修改此文件`];
export const DEFAULT_DOC_CONFIG: ApiDocConfig = {
  prefix: "api",
  name: "",
  url: "",
  enable: true,
  output: "src/apis/${name}",
  outputType: "ts",
  codeMode: "proxy",
  exportMode: "module",
  requestor: "({url,...ops})=>globalThis.fetch(url, ops)",
  fileHeader: [],
  fileFooter: [],
  docParser: null,
  apiParser: null,
  apiResponseCode: 200,
  apiResponseType: "*/*",
  apiRequestType: "*/*",
  enableMultiContentType: false,
  dts: {
    enable: true,
    path: "types",
    apiOptions: "RequestInit",
    apiResult: "Response",
    fileHeader: [],
    fileFooter: [],
    typeConvert: {},
    pathAlias: "@${name}",
  },
  cache: {
    enable: true,
    path: `.${LIB_NAME}`,
    expireTime: 600000,
  },
};

/**
 * 编译配置
 * @param config 配置对象
 * @param baseConfig 基础配置
 * @returns 编译后的配置
 */
const compileConfig = (config: RecordType, baseConfig?: RecordType): ApiDocConfig => {
  const isString = (v: unknown): v is string => typeof v === "string";
  const isPlainObject = (v: unknown): v is Record<string, unknown> => v !== null && typeof v === "object" && !Array.isArray(v);

  const entries = Object.entries(config).map(([key, value]) => {
    if (isPlainObject(value)) {
      return [key, compileConfig(value as RecordType, baseConfig ?? config)];
    }
    if (!isString(value)) return [key, value];
    const newValue = value.replace(/\${(.*?)}/g, (_match, p) => ((baseConfig ?? config) as RecordType)[p] as string);
    return [key, newValue];
  });
  return Object.fromEntries(entries) as ApiDocConfig;
};

/**
 * 合并配置
 * @param target 目标配置对象
 * @param source 源配置对象
 * @returns 合并后的配置对象
 */
const mergeConfig = (target: RecordType, source: RecordType): RecordType => merge(cloneDeep(target), source);

/**
 * 定义配置
 * @param config 配置对象
 * @returns 合并后的文档配置数组
 */
export const defineConfig = (config: Config): ApiDocConfig[] => {
  const { docs = [], ...rest } = config ?? {};
  const baseConfig = mergeConfig(DEFAULT_DOC_CONFIG as RecordType, rest);
  return docs?.map<ApiDocConfig>((doc) => compileConfig(mergeConfig(baseConfig, doc) as RecordType)) ?? [];
};

/**
 * 加载配置
 * @param configPath 配置路径
 * @returns 合并后的文档配置数组
 */
export const loadConfig = (configPath?: string): ApiDocConfig[] => {
  const extensions = ["ts", "mts", "cts", "js", "mjs", "cjs", "json"];
  const files = configPath
    ?.split("/")
    .at(-1)
    ?.replace(new RegExp(`\\.(${extensions.join("|")})$`), "") ?? DEFAULT_CONFIG_PATH;

  const { config } = loadConfigSync<ApiDocConfig[]>({
    sources: [
      {
        files,
        extensions,
      },
      {
        files: "package.json",
        extensions: [],
        rewrite(config) {
          return (config as RecordType)?.[LIB_NAME];
        },
      },
    ],
    merge: false,
  });
  return config;
};