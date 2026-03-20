import { ApiDocConfig } from "./config";

export interface DocResultApi {
  /** 模块总数 */
  moduleTotal: number;
  /** 接口总数 */
  apiTotal: number;
  /** 接口文件输出路径 */
  outputPath: string;
  /** 接口文件总数 */
  fileTotal: number;
}
export interface DocResultTs {
  /** TS类型文件输出路径 */
  outputPath: string;
  /** TS类型总数 */
  tsTotal: number;
  /** TS类型文件总数 */
  fileTotal: number;
}
export interface DocResult {
  /** 接口文档结果 */
  api: DocResultApi;
  /** TS类型文档结果 */
  ts: DocResultTs;
  /** 文档配置 */
  docConfig: ApiDocConfig;
  /** 生成耗时 */
  durationMs: number;
}