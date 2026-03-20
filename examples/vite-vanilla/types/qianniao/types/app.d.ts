import { QianniaoModels } from './models';
export namespace AppModels {
/**
* @url /app/{id} 
* @summary 获取应用详情 
* @description 根据ID获取应用信息 
 */
export type AppGetByIdQuery = Record<string, any>
export type AppGetByIdParams = {
  /** number - 格式: int64 */
  id: number;
}
export type AppGetByIdBody = any
export type AppGetByIdResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.SysApp (可选) */
  data?: QianniaoModels.SysApp;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppGetByIdGeneric = {
          query: AppGetByIdQuery;
          params: AppGetByIdParams;
          data: AppGetByIdBody;
          result: AppGetByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /app/{id} 
* @summary 更新应用 
* @description 修改应用基本信息 
 */
export type AppPutByIdQuery = Record<string, any>
export type AppPutByIdParams = {
  /** number - 格式: int64 */
  id: number;
}
export type AppPutByIdBody = {
  /** string - 应用编码 | 示例: "portal" | 最小长度: 1字符 */
  appCode: string;

  /** string - 应用名称 | 示例: "统一门户" | 最小长度: 1字符 */
  appName: string;

  /** string (可选) - 应用地址 | 示例: "http://localhost:8082" */
  appUrl?: string;

  /** string (可选) - 应用图标URL */
  appIcon?: string;

  /** string (可选) - 应用描述 | 示例: "统一门户应用" */
  appDesc?: string;

  /** "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 应用类型(1Web 2小程序 3移动端) | 示例: 1 | 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
  appType?: "WEB" | "MINIAPP";

  /** string (可选) - 登出地址 | 示例: "http://localhost:8082/logout" */
  logoutUrl?: string;

  /** number (可选) - 排序 | 示例: 0 | 格式: int32 */
  sortOrder?: number;

  /** string (可选) - 备注 */
  remark?: string;
}
export type AppPutByIdResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** () (可选) - 数据 */
  data?: any;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppPutByIdGeneric = {
          query: AppPutByIdQuery;
          params: AppPutByIdParams;
          data: AppPutByIdBody;
          result: AppPutByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: true;
};
     
/**
* @url /app/{id} 
* @summary 删除应用 
* @description 逻辑删除应用 
 */
export type AppDeleteByIdQuery = Record<string, any>
export type AppDeleteByIdParams = {
  /** number - 格式: int64 */
  id: number;
}
export type AppDeleteByIdBody = any
export type AppDeleteByIdResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** () (可选) - 数据 */
  data?: any;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppDeleteByIdGeneric = {
          query: AppDeleteByIdQuery;
          params: AppDeleteByIdParams;
          data: AppDeleteByIdBody;
          result: AppDeleteByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /app 
* @summary 创建应用 
* @description 新增应用，自动生成AppKey和AppSecret 
 */
export type AppPostQuery = Record<string, any>
export type AppPostParams = Record<string, any>
export type AppPostBody = {
  /** string - 应用编码 | 示例: "portal" | 最小长度: 1字符 */
  appCode: string;

  /** string - 应用名称 | 示例: "统一门户" | 最小长度: 1字符 */
  appName: string;

  /** string (可选) - 应用地址 | 示例: "http://localhost:8082" */
  appUrl?: string;

  /** string (可选) - 应用图标URL */
  appIcon?: string;

  /** string (可选) - 应用描述 | 示例: "统一门户应用" */
  appDesc?: string;

  /** "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 应用类型(1Web 2小程序 3移动端) | 示例: 1 | 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
  appType?: "WEB" | "MINIAPP";

  /** string (可选) - 登出地址 | 示例: "http://localhost:8082/logout" */
  logoutUrl?: string;

  /** number (可选) - 排序 | 示例: 0 | 格式: int32 */
  sortOrder?: number;

  /** string (可选) - 备注 */
  remark?: string;
}
export type AppPostResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** object (可选) - 数据 */
  data?: Record<string, any>;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppPostGeneric = {
          query: AppPostQuery;
          params: AppPostParams;
          data: AppPostBody;
          result: AppPostResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /app/{id}/status 
* @summary 修改状态 
* @description 启用或停用应用（body:{"status":"ENABLE"}） 
 */
export type AppPostByIdStatusQuery = Record<string, any>
export type AppPostByIdStatusParams = {
  /** number - 格式: int64 */
  id: number;
}
export type AppPostByIdStatusBody = Record<string, "ENABLE" | "DISABLE">
export type AppPostByIdStatusResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** () (可选) - 数据 */
  data?: any;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppPostByIdStatusGeneric = {
          query: AppPostByIdStatusQuery;
          params: AppPostByIdStatusParams;
          data: AppPostByIdStatusBody;
          result: AppPostByIdStatusResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /app/{id}/regenerate-secret 
* @summary 重新生成密钥 
* @description 重新生成应用的AppSecret 
 */
export type AppPostByIdRegenerateSecretQuery = Record<string, any>
export type AppPostByIdRegenerateSecretParams = {
  /** number - 格式: int64 */
  id: number;
}
export type AppPostByIdRegenerateSecretBody = any
export type AppPostByIdRegenerateSecretResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** object (可选) - 数据 */
  data?: Record<string, string>;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppPostByIdRegenerateSecretGeneric = {
          query: AppPostByIdRegenerateSecretQuery;
          params: AppPostByIdRegenerateSecretParams;
          data: AppPostByIdRegenerateSecretBody;
          result: AppPostByIdRegenerateSecretResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /app/page 
* @summary 分页查询应用 
* @description 支持按应用名称、类型、状态筛选 
 */
export type AppGetPageQuery = {
  /** number (可选) - 默认值: 1 | 格式: int32 */
  pageNum?: number;

  /** number (可选) - 默认值: 10 | 格式: int32 */
  pageSize?: number;

  /** string (可选) */
  appName?: string;

  /** "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
  appType?: "WEB" | "MINIAPP";

  /** "{"name":"ENABLE","desc":"启用"}" | "{"name":"DISABLE","desc":"禁用"}" (可选) - 可选值: "{\"name\":\"ENABLE\",\"desc\":\"启用\"}", "{\"name\":\"DISABLE\",\"desc\":\"禁用\"}" */
  status?: "ENABLE" | "DISABLE";
}
export type AppGetPageParams = Record<string, any>
export type AppGetPageBody = any
export type AppGetPageResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.PageResultSysApp (可选) */
  data?: QianniaoModels.PageResultSysApp;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AppGetPageGeneric = {
          query: AppGetPageQuery;
          params: AppGetPageParams;
          data: AppGetPageBody;
          result: AppGetPageResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
