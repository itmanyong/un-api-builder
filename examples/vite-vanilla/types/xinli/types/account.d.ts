import { XinliModels } from './models';
export namespace AccountModels {
/**
* @url /account/status/{id} 
* @summary 修改状态 
* @description  
 */
export type AccountPutStatusByIdQuery = Record<string, any>
export type AccountPutStatusByIdParams = {
  /** string */
  id: string;
}
export type AccountPutStatusByIdBody = any
export type AccountPutStatusByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AccountPutStatusByIdGeneric = {
          query: AccountPutStatusByIdQuery;
          params: AccountPutStatusByIdParams;
          data: AccountPutStatusByIdBody;
          result: AccountPutStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /account/password 
* @summary 修改密码 
* @description  
 */
export type AccountPutPasswordQuery = Record<string, any>
export type AccountPutPasswordParams = Record<string, any>
export type AccountPutPasswordBody = {
  /** string - 用户名 */
  username: string;

  /** string - 用户密码 */
  password: string;

  /** string (可选) - ras密码 */
  rsaPassword?: string;

  /** string (可选) */
  code?: string;

  /** string (可选) - 商家id */
  storeId?: string;

  /** string (可选) */
  openId?: string;

  /** number (可选) - 格式: int32 */
  remainCount?: number;
}
export type AccountPutPasswordResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AccountPutPasswordGeneric = {
          query: AccountPutPasswordQuery;
          params: AccountPutPasswordParams;
          data: AccountPutPasswordBody;
          result: AccountPutPasswordResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /account/item 
* @summary 修改账号信息 
* @description  
 */
export type AccountPutItemQuery = Record<string, any>
export type AccountPutItemParams = Record<string, any>
export type AccountPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 角色ids */
  roleIds?: string;

  /** string (可选) - 用户名 */
  userName?: string;

  /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
  type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

  /** string (可选) - 昵称 */
  nickName?: string;

  /** string (可选) - 电话 */
  phone?: string;

  /** string (可选) - 身份证号 */
  idNumber?: string;

  /** string (可选) - 头像路径 */
  avatarPicPath?: string;

  /** string (可选) - 菜单ids */
  menuIds?: string;

  /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
  sex?: "MAN" | "WOMAN" | "UNKNOWN";

  /** number (可选) - 年龄 | 格式: int32 */
  age?: number;

  /** string (可选) - 描述 */
  desc?: string;
}
export type AccountPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AccountPutItemGeneric = {
          query: AccountPutItemQuery;
          params: AccountPutItemParams;
          data: AccountPutItemBody;
          result: AccountPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /account/item 
* @summary 新增账号信息 
* @description  
 */
export type AccountPostItemQuery = Record<string, any>
export type AccountPostItemParams = Record<string, any>
export type AccountPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string - 角色ids */
  roleIds: string;

  /** string - 用户名 */
  userName: string;

  /** string - 用户密码 */
  userPassword: string;

  /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
  type: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

  /** string - 昵称 */
  nickName: string;

  /** string (可选) - 电话 */
  phone?: string;

  /** string (可选) - 身份证号 */
  idNumber?: string;

  /** string (可选) - 最后登录时间 | 格式: date-time */
  lastLoginTime?: string;

  /** string (可选) - 最后登录ip */
  lastLoginIp?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** number (可选) - 登录错误次数 | 格式: int32 */
  loginErrorCount?: number;

  /** string (可选) - 登录错误时间 | 格式: date-time */
  loginErrorTime?: string;

  /** string (可选) - 头像路径 */
  avatarPicPath?: string;

  /** string (可选) - 菜单ids */
  menuIds?: string;

  /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
  sex?: "MAN" | "WOMAN" | "UNKNOWN";

  /** number (可选) - 年龄 | 格式: int32 */
  age?: number;

  /** string (可选) - 描述 */
  desc?: string;

  /** array (可选) - 角色名称 */
  roleName?: string[];

  /** boolean (可选) */
  lock?: boolean;
}
export type AccountPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.AccountInfoDTO (可选) */
  data?: XinliModels.AccountInfoDTO;
}
export type AccountPostItemGeneric = {
          query: AccountPostItemQuery;
          params: AccountPostItemParams;
          data: AccountPostItemBody;
          result: AccountPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /account/login 
* @summary 登录 
* @description  
 */
export type AccountPostLoginQuery = Record<string, any>
export type AccountPostLoginParams = Record<string, any>
export type AccountPostLoginBody = {
  /** string - 用户名 */
  username: string;

  /** string - 用户密码 */
  password: string;

  /** string (可选) - ras密码 */
  rsaPassword?: string;

  /** string (可选) */
  code?: string;

  /** string (可选) - 商家id */
  storeId?: string;

  /** string (可选) */
  openId?: string;

  /** number (可选) - 格式: int32 */
  remainCount?: number;
}
export type AccountPostLoginResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** string (可选) */
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
     
/**
* @url /account/getUserNameById 
* @summary 根据账号id查询userName 
* @description  
 */
export type AccountPostGetUserNameByIdQuery = Record<string, any>
export type AccountPostGetUserNameByIdParams = Record<string, any>
export type AccountPostGetUserNameByIdBody = string[]
export type AccountPostGetUserNameByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** object (可选) */
  data?: Record<string, string>;
}
export type AccountPostGetUserNameByIdGeneric = {
          query: AccountPostGetUserNameByIdQuery;
          params: AccountPostGetUserNameByIdParams;
          data: AccountPostGetUserNameByIdBody;
          result: AccountPostGetUserNameByIdResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /account/page 
* @summary 分页查询 
* @description 账号分页查询 
 */
export type AccountGetPageQuery = {
  /** XinliModels.AccountInfoPageQuery */
  params: XinliModels.AccountInfoPageQuery;
}
export type AccountGetPageParams = Record<string, any>
export type AccountGetPageBody = any
export type AccountGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageAccountInfoDTO (可选) */
  data?: XinliModels.BasePageAccountInfoDTO;
}
export type AccountGetPageGeneric = {
          query: AccountGetPageQuery;
          params: AccountGetPageParams;
          data: AccountGetPageBody;
          result: AccountGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /account/item/{id} 
* @summary 根据id获取账号信息 
* @description  
 */
export type AccountGetItemByIdQuery = Record<string, any>
export type AccountGetItemByIdParams = {
  /** string */
  id: string;
}
export type AccountGetItemByIdBody = any
export type AccountGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.AccountInfoDTO (可选) */
  data?: XinliModels.AccountInfoDTO;
}
export type AccountGetItemByIdGeneric = {
          query: AccountGetItemByIdQuery;
          params: AccountGetItemByIdParams;
          data: AccountGetItemByIdBody;
          result: AccountGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /account/item/{id} 
* @summary 删除账号 
* @description  
 */
export type AccountDeleteItemByIdQuery = Record<string, any>
export type AccountDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type AccountDeleteItemByIdBody = any
export type AccountDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AccountDeleteItemByIdGeneric = {
          query: AccountDeleteItemByIdQuery;
          params: AccountDeleteItemByIdParams;
          data: AccountDeleteItemByIdBody;
          result: AccountDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /account/getAccountInfo 
* @summary 获取登录账号信息 
* @description  
 */
export type AccountGetGetAccountInfoQuery = Record<string, any>
export type AccountGetGetAccountInfoParams = Record<string, any>
export type AccountGetGetAccountInfoBody = any
export type AccountGetGetAccountInfoResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.AccountInfoDTO (可选) */
  data?: XinliModels.AccountInfoDTO;
}
export type AccountGetGetAccountInfoGeneric = {
          query: AccountGetGetAccountInfoQuery;
          params: AccountGetGetAccountInfoParams;
          data: AccountGetGetAccountInfoBody;
          result: AccountGetGetAccountInfoResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /account/list 
* @summary 删除账号信息 
* @description  
 */
export type AccountDeleteListQuery = Record<string, any>
export type AccountDeleteListParams = Record<string, any>
export type AccountDeleteListBody = string[]
export type AccountDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AccountDeleteListGeneric = {
          query: AccountDeleteListQuery;
          params: AccountDeleteListParams;
          data: AccountDeleteListBody;
          result: AccountDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
