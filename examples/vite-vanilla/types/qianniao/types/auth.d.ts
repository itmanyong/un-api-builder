import { QianniaoModels } from './models';
export namespace AuthModels {
/**
* @url /auth/validate 
* @summary 验证Token 
* @description 验证Token有效性，供业务系统调用 
 */
export type AuthPostValidateQuery = Record<string, any>
export type AuthPostValidateParams = Record<string, any>
export type AuthPostValidateBody = any
export type AuthPostValidateResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.UserInfo (可选) */
  data?: QianniaoModels.UserInfo;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AuthPostValidateGeneric = {
          query: AuthPostValidateQuery;
          params: AuthPostValidateParams;
          data: AuthPostValidateBody;
          result: AuthPostValidateResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auth/refresh 
* @summary 刷新Token 
* @description 使用RefreshToken获取新的AccessToken 
 */
export type AuthPostRefreshQuery = Record<string, any>
export type AuthPostRefreshParams = Record<string, any>
export type AuthPostRefreshBody = {
  /** string - 刷新令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." | 最小长度: 1字符 */
  refreshToken: string;
}
export type AuthPostRefreshResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.TokenInfo (可选) */
  data?: QianniaoModels.TokenInfo;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AuthPostRefreshGeneric = {
          query: AuthPostRefreshQuery;
          params: AuthPostRefreshParams;
          data: AuthPostRefreshBody;
          result: AuthPostRefreshResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /auth/logout 
* @summary 用户登出 
* @description 登出当前用户，Token加入黑名单 
 */
export type AuthPostLogoutQuery = Record<string, any>
export type AuthPostLogoutParams = Record<string, any>
export type AuthPostLogoutBody = any
export type AuthPostLogoutResponse = {
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
export type AuthPostLogoutGeneric = {
          query: AuthPostLogoutQuery;
          params: AuthPostLogoutParams;
          data: AuthPostLogoutBody;
          result: AuthPostLogoutResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auth/login 
* @summary 用户登录 
* @description 使用用户名密码登录，返回AccessToken和RefreshToken 
 */
export type AuthPostLoginQuery = Record<string, any>
export type AuthPostLoginParams = Record<string, any>
export type AuthPostLoginBody = {
  /** string - 用户名 | 示例: "admin" | 最小长度: 1字符 */
  username: string;

  /** string - 密码 | 示例: "MD5(admin123)" | 最小长度: 1字符 */
  password: string;
}
export type AuthPostLoginResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.LoginResponse (可选) */
  data?: QianniaoModels.LoginResponse;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AuthPostLoginGeneric = {
          query: AuthPostLoginQuery;
          params: AuthPostLoginParams;
          data: AuthPostLoginBody;
          result: AuthPostLoginResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /auth/info 
* @summary 获取当前用户信息 
* @description 获取当前登录用户的详细信息 
 */
export type AuthGetInfoQuery = Record<string, any>
export type AuthGetInfoParams = Record<string, any>
export type AuthGetInfoBody = any
export type AuthGetInfoResponse = {
  /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
  code?: number;

  /** string (可选) - 消息 | 示例: "操作成功" */
  message?: string;

  /** QianniaoModels.UserInfo (可选) */
  data?: QianniaoModels.UserInfo;

  /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
  timestamp?: number;

  /** boolean (可选) */
  success?: boolean;
}
export type AuthGetInfoGeneric = {
          query: AuthGetInfoQuery;
          params: AuthGetInfoParams;
          data: AuthGetInfoBody;
          result: AuthGetInfoResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
