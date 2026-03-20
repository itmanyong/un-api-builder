import { XinliModels } from './models';
export namespace UserInfoModels {
/**
* @url /userInfo/item 
* @summary 修改用户 
* @description  
 */
export type UserInfoPutItemQuery = Record<string, any>
export type UserInfoPutItemParams = Record<string, any>
export type UserInfoPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 账号ids */
  accountIds?: string;

  /** string (可选) - 微信id */
  openId?: string;

  /** string (可选) - 名称 */
  name?: string;

  /** string (可选) - 昵称 */
  nickName?: string;

  /** number (可选) - 年龄 | 格式: int32 */
  age?: number;

  /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
  sex?: "MAN" | "WOMAN" | "UNKNOWN";

  /** string (可选) - 电话 */
  phone?: string;

  /** string (可选) - 密码 */
  password?: string;

  /** string (可选) - 头像 */
  avatarPicPath?: string;

  /** string (可选) - 身份证 */
  idNumber?: string;
}
export type UserInfoPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type UserInfoPutItemGeneric = {
          query: UserInfoPutItemQuery;
          params: UserInfoPutItemParams;
          data: UserInfoPutItemBody;
          result: UserInfoPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /userInfo/item 
* @summary 新增用户 
* @description  
 */
export type UserInfoPostItemQuery = Record<string, any>
export type UserInfoPostItemParams = Record<string, any>
export type UserInfoPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 账号id */
  accountIds?: string;

  /** string (可选) - 微信id */
  openId?: string;

  /** string - 姓名 */
  name: string;

  /** string (可选) - 昵称 */
  nickName?: string;

  /** number (可选) - 年龄 | 格式: int32 */
  age?: number;

  /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
  sex?: "MAN" | "WOMAN" | "UNKNOWN";

  /** string - 电话 */
  phone: string;

  /** boolean (可选) - 是否为会员 */
  isVip?: boolean;

  /** string (可选) - 密码 */
  password?: string;

  /** string (可选) - 头像 */
  avatarPicPath?: string;

  /** string (可选) - 身份证 */
  idNumber?: string;
}
export type UserInfoPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UserInfoDTO (可选) */
  data?: XinliModels.UserInfoDTO;
}
export type UserInfoPostItemGeneric = {
          query: UserInfoPostItemQuery;
          params: UserInfoPostItemParams;
          data: UserInfoPostItemBody;
          result: UserInfoPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /userInfo/item 
* @summary 批量删除 
* @description  
 */
export type UserInfoDeleteItemQuery = Record<string, any>
export type UserInfoDeleteItemParams = Record<string, any>
export type UserInfoDeleteItemBody = string[]
export type UserInfoDeleteItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type UserInfoDeleteItemGeneric = {
          query: UserInfoDeleteItemQuery;
          params: UserInfoDeleteItemParams;
          data: UserInfoDeleteItemBody;
          result: UserInfoDeleteItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /userInfo/getUserNameById 
* @summary 根据用户id查询用户名 
* @description  
 */
export type UserInfoPostGetUserNameByIdQuery = Record<string, any>
export type UserInfoPostGetUserNameByIdParams = Record<string, any>
export type UserInfoPostGetUserNameByIdBody = string[]
export type UserInfoPostGetUserNameByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** object (可选) */
  data?: Record<string, string>;
}
export type UserInfoPostGetUserNameByIdGeneric = {
          query: UserInfoPostGetUserNameByIdQuery;
          params: UserInfoPostGetUserNameByIdParams;
          data: UserInfoPostGetUserNameByIdBody;
          result: UserInfoPostGetUserNameByIdResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /userInfo/page 
* @summary 分页查询 
* @description 用户分页查询 
 */
export type UserInfoGetPageQuery = {
  /** XinliModels.UserInfoPageQuery */
  params: XinliModels.UserInfoPageQuery;
}
export type UserInfoGetPageParams = Record<string, any>
export type UserInfoGetPageBody = any
export type UserInfoGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageUserInfoDTO (可选) */
  data?: XinliModels.BasePageUserInfoDTO;
}
export type UserInfoGetPageGeneric = {
          query: UserInfoGetPageQuery;
          params: UserInfoGetPageParams;
          data: UserInfoGetPageBody;
          result: UserInfoGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /userInfo/item/{id} 
* @summary 查询指定用户 
* @description  
 */
export type UserInfoGetItemByIdQuery = Record<string, any>
export type UserInfoGetItemByIdParams = {
  /** string */
  id: string;
}
export type UserInfoGetItemByIdBody = any
export type UserInfoGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UserInfoDTO (可选) */
  data?: XinliModels.UserInfoDTO;
}
export type UserInfoGetItemByIdGeneric = {
          query: UserInfoGetItemByIdQuery;
          params: UserInfoGetItemByIdParams;
          data: UserInfoGetItemByIdBody;
          result: UserInfoGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /userInfo/item/{id} 
* @summary 删除 
* @description  
 */
export type UserInfoDeleteItemByIdQuery = Record<string, any>
export type UserInfoDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type UserInfoDeleteItemByIdBody = any
export type UserInfoDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type UserInfoDeleteItemByIdGeneric = {
          query: UserInfoDeleteItemByIdQuery;
          params: UserInfoDeleteItemByIdParams;
          data: UserInfoDeleteItemByIdBody;
          result: UserInfoDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /userInfo/getUserInfo 
* @summary 小程序获取登录用户信息 
* @description  
 */
export type UserInfoGetGetUserInfoQuery = Record<string, any>
export type UserInfoGetGetUserInfoParams = Record<string, any>
export type UserInfoGetGetUserInfoBody = any
export type UserInfoGetGetUserInfoResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UserInfoDTO (可选) */
  data?: XinliModels.UserInfoDTO;
}
export type UserInfoGetGetUserInfoGeneric = {
          query: UserInfoGetGetUserInfoQuery;
          params: UserInfoGetGetUserInfoParams;
          data: UserInfoGetGetUserInfoBody;
          result: UserInfoGetGetUserInfoResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /userInfo/getAvaById/{id} 
* @summary 查询指定用户头像 
* @description  
 */
export type UserInfoGetGetAvaByIdByIdQuery = Record<string, any>
export type UserInfoGetGetAvaByIdByIdParams = {
  /** string */
  id: string;
}
export type UserInfoGetGetAvaByIdByIdBody = any
export type UserInfoGetGetAvaByIdByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** string (可选) */
  data?: string;
}
export type UserInfoGetGetAvaByIdByIdGeneric = {
          query: UserInfoGetGetAvaByIdByIdQuery;
          params: UserInfoGetGetAvaByIdByIdParams;
          data: UserInfoGetGetAvaByIdByIdBody;
          result: UserInfoGetGetAvaByIdByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
