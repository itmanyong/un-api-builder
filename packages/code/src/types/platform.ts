import { Config } from "./config";

export interface PluginOptions {
    /**
     * 配置文件路径
     * @default "./un-api-builder.config.ts"
     * @description 默认项目根路径下的 un-api.config.(ts|js|mts|mjs) 配置文件
     */
    configPath?: string;
    /**
     * API配置
     * @default undefined
     * @description 配置内容等同 un-api.config.(ts|js|mts|mjs) 配置文件
     */
    apiConfig?: Config;
}
