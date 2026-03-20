import { YusuanModels } from './models';
export namespace FileModels {
/**
* @url /file/upload 
* @summary 上传文件（FormData） 
* @description  
 */
export type FilePostUploadQuery = {
  /** string */
  parentPath: string;

  /** string */
  fileName: string;
}
export type FilePostUploadParams = Record<string, any>
export type FilePostUploadBody = {
  /** string - 格式: binary */
  file: string;
}
export type FilePostUploadResponse = Record<string, any>
export type FilePostUploadGeneric = {
          query: FilePostUploadQuery;
          params: FilePostUploadParams;
          data: FilePostUploadBody;
          result: FilePostUploadResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /file/upload/list 
* @summary 批量上传文件（FormData） 
* @description  
 */
export type FilePostUploadListQuery = {
  /** array */
  file: string[];

  /** string */
  parentPath: string;
}
export type FilePostUploadListParams = Record<string, any>
export type FilePostUploadListBody = any
export type FilePostUploadListResponse = Record<string, any>
export type FilePostUploadListGeneric = {
          query: FilePostUploadListQuery;
          params: FilePostUploadListParams;
          data: FilePostUploadListBody;
          result: FilePostUploadListResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /file/upload/list/base64 
* @summary 批量上传文件（Base64） 
* @description  
 */
export type FilePostUploadListBase64Query = Record<string, any>
export type FilePostUploadListBase64Params = Record<string, any>
export type FilePostUploadListBase64Body = Record<string, any>[]
export type FilePostUploadListBase64Response = Record<string, any>
export type FilePostUploadListBase64Generic = {
          query: FilePostUploadListBase64Query;
          params: FilePostUploadListBase64Params;
          data: FilePostUploadListBase64Body;
          result: FilePostUploadListBase64Response;
          queryRequired: false;
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

  /** "{"desc":"WEB","name":"WEB"}" - 可选值: "{\"desc\":\"WEB\",\"name\":\"WEB\"}" */
  type: "WEB";
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
