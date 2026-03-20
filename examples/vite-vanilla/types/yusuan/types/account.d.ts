import { YusuanModels } from './models';
export namespace AccountModels {
/**
* @url /account/updatePassword/current 
* @summary 当前登录用户修改密码 
* @description  
 */
export type AccountPutUpdatePasswordCurrentQuery = Record<string, any>
export type AccountPutUpdatePasswordCurrentParams = Record<string, any>
export type AccountPutUpdatePasswordCurrentBody = {
  /** string - 旧密码 */
  oldPassword: string;

  /** string - 新密码 */
  newPassword: string;
}
export type AccountPutUpdatePasswordCurrentResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type AccountPutUpdatePasswordCurrentGeneric = {
          query: AccountPutUpdatePasswordCurrentQuery;
          params: AccountPutUpdatePasswordCurrentParams;
          data: AccountPutUpdatePasswordCurrentBody;
          result: AccountPutUpdatePasswordCurrentResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /account/updatePassword/admin 
* @summary 超管修改指定用户密码 
* @description  
 */
export type AccountPutUpdatePasswordAdminQuery = Record<string, any>
export type AccountPutUpdatePasswordAdminParams = Record<string, any>
export type AccountPutUpdatePasswordAdminBody = {
  /** string - 账号id */
  accountId: string;

  /** string - 用户密码 */
  password: string;
}
export type AccountPutUpdatePasswordAdminResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type AccountPutUpdatePasswordAdminGeneric = {
          query: AccountPutUpdatePasswordAdminQuery;
          params: AccountPutUpdatePasswordAdminParams;
          data: AccountPutUpdatePasswordAdminBody;
          result: AccountPutUpdatePasswordAdminResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /account/status 
* @summary 批量修改状态 
* @description  
 */
export type AccountPutStatusQuery = Record<string, any>
export type AccountPutStatusParams = Record<string, any>
export type AccountPutStatusBody = {
  /** array - 主键ID列表 */
  ids: string[];

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status: "ENABLE" | "DISABLE";
}
export type AccountPutStatusResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type AccountPutStatusGeneric = {
          query: AccountPutStatusQuery;
          params: AccountPutStatusParams;
          data: AccountPutStatusBody;
          result: AccountPutStatusResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /account/login 
* @summary 用户登录 
* @description  
 */
export type AccountPostLoginQuery = Record<string, any>
export type AccountPostLoginParams = Record<string, any>
export type AccountPostLoginBody = {
  /** string - 用户名 */
  userName: string;

  /** string - 用户密码 */
  password: string;
}
export type AccountPostLoginResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** string (可选) - 返回数据 */
  data?: string;
}
export type AccountPostLoginGeneric = {
          query: AccountPostLoginQuery;
          params: AccountPostLoginParams;
          data: AccountPostLoginBody;
          result: AccountPostLoginResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
}
