import { XinliModels } from './models';
export namespace FileModels {
/**
* @url /file/list 
* @summary 批量上传文件（FormData） 
* @description  
 */
export type FilePostListQuery = {
  /** array */
  files: string[];

  /** string */
  parentPath: string;
}
export type FilePostListParams = Record<string, any>
export type FilePostListBody = any
export type FilePostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.UploadResultDTO[];
}
export type FilePostListGeneric = {
          query: FilePostListQuery;
          params: FilePostListParams;
          data: FilePostListBody;
          result: FilePostListResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /file/list/base64 
* @summary 批量上传文件（Base64） 
* @description  
 */
export type FilePostListBase64Query = Record<string, any>
export type FilePostListBase64Params = Record<string, any>
export type FilePostListBase64Body = XinliModels.UploadBase64DTO[]
export type FilePostListBase64Response = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.UploadResultDTO[];
}
export type FilePostListBase64Generic = {
          query: FilePostListBase64Query;
          params: FilePostListBase64Params;
          data: FilePostListBase64Body;
          result: FilePostListBase64Response;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /file/item 
* @summary 上传文件（FormData） 
* @description  
 */
export type FilePostItemQuery = {
  /** string */
  parentPath: string;

  /** string */
  fileName: string;
}
export type FilePostItemParams = Record<string, any>
export type FilePostItemBody = {
  /** string - 格式: binary */
  file: string;
}
export type FilePostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UploadResultDTO (可选) */
  data?: XinliModels.UploadResultDTO;
}
export type FilePostItemGeneric = {
          query: FilePostItemQuery;
          params: FilePostItemParams;
          data: FilePostItemBody;
          result: FilePostItemResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /file/chunk 
* @summary 分片上传 
* @description  
 */
export type FilePostChunkQuery = {
  /** number - 格式: int32 */
  chunkNumber: number;

  /** number - 格式: int32 */
  totalChunks: number;

  /** string */
  fileName: string;

  /** string */
  clientMd5: string;
}
export type FilePostChunkParams = Record<string, any>
export type FilePostChunkBody = {
  /** string - 格式: binary */
  file: string;
}
export type FilePostChunkResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UploadResultDTO (可选) */
  data?: XinliModels.UploadResultDTO;
}
export type FilePostChunkGeneric = {
          query: FilePostChunkQuery;
          params: FilePostChunkParams;
          data: FilePostChunkBody;
          result: FilePostChunkResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: true;
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
