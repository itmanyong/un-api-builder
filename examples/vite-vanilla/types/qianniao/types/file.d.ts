import { QianniaoModels } from './models';
export namespace FileModels {
/**
* @url /file/upload 
* @summary 上传文件（FormData） 
* @description  
 */
export type FilePostUploadQuery = {
  /** string - 格式: binary */
  file: string;

  /** string (可选) */
  parentPath?: string;

  /** string (可选) */
  fileName?: string;
}
export type FilePostUploadParams = Record<string, any>
export type FilePostUploadBody = any
export type FilePostUploadResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.UploadResultDTO (可选) */
  data?: QianniaoModels.UploadResultDTO;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type FilePostUploadGeneric = {
          query: FilePostUploadQuery;
          params: FilePostUploadParams;
          data: FilePostUploadBody;
          result: FilePostUploadResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /file/upload/batch 
* @summary 批量上传文件（FormData） 
* @description  
 */
export type FilePostUploadBatchQuery = {
  /** array */
  file: string[];

  /** string (可选) */
  parentPath?: string;
}
export type FilePostUploadBatchParams = Record<string, any>
export type FilePostUploadBatchBody = any
export type FilePostUploadBatchResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** array (可选) - 数据 */
  data?: QianniaoModels.UploadResultDTO[];

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type FilePostUploadBatchGeneric = {
          query: FilePostUploadBatchQuery;
          params: FilePostUploadBatchParams;
          data: FilePostUploadBatchBody;
          result: FilePostUploadBatchResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /file/download 
* @summary 下载文件 
* @description  
 */
export type FileGetDownloadQuery = {
  /** string */
  path: string;
}
export type FileGetDownloadParams = Record<string, any>
export type FileGetDownloadBody = any
export type FileGetDownloadResponse = any
export type FileGetDownloadGeneric = {
          query: FileGetDownloadQuery;
          params: FileGetDownloadParams;
          data: FileGetDownloadBody;
          result: FileGetDownloadResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
