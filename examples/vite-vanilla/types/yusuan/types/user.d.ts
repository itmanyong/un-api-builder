import { YusuanModels } from "./models";
export namespace UserModels {
  /**
   * @url /user/{id}
   * @summary 修改用户信息
   * @description
   */
  export type UserPutByIdQuery = Record<string, any>;
  export type UserPutByIdParams = {
    /** string */
    id: string;
  };
  export type UserPutByIdBody = {
    /** string (可选) - 用户姓名 */
    realName?: string;

    /** string (可选) - 身份证号 */
    cardNumber?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 手机号 */
    phone?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 备注 */
    remark?: string;

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 角色id集合（多个英文逗号隔开） */
    roleIds?: string;
  };
  export type UserPutByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type UserPutByIdGeneric = {
    query: UserPutByIdQuery;
    params: UserPutByIdParams;
    data: UserPutByIdBody;
    result: UserPutByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /user
   * @summary 新增用户信息
   * @description
   */
  export type UserPostQuery = Record<string, any>;
  export type UserPostParams = Record<string, any>;
  export type UserPostBody = {
    /** string (可选) - 用户姓名 */
    realName?: string;

    /** string (可选) - 身份证号 */
    cardNumber?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 手机号 */
    phone?: string;

    /** string - 部门id */
    departmentId: string;

    /** string (可选) - 备注 */
    remark?: string;

    /** string - 用户名 */
    userName: string;

    /** string - 密码 */
    userPassword: string;

    /** "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}" */
    userType: "SUPPER" | "NOMAL";

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 角色id集合（多个英文逗号隔开） */
    roleIds?: string;
  };
  export type UserPostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.UserInfoDTO (可选) */
    data?: YusuanModels.UserInfoDTO;
  };
  export type UserPostGeneric = {
    query: UserPostQuery;
    params: UserPostParams;
    data: UserPostBody;
    result: UserPostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /user/list
   * @summary 根据userId集合获取用户列表
   * @description
   */
  export type UserPostListQuery = Record<string, any>;
  export type UserPostListParams = Record<string, any>;
  export type UserPostListBody = string[];
  export type UserPostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.UserInfoDTO[];
  };
  export type UserPostListGeneric = {
    query: UserPostListQuery;
    params: UserPostListParams;
    data: UserPostListBody;
    result: UserPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /user/listByAccount
   * @summary 根据accountId集合获取用户列表
   * @description
   */
  export type UserPostListByAccountQuery = Record<string, any>;
  export type UserPostListByAccountParams = Record<string, any>;
  export type UserPostListByAccountBody = string[];
  export type UserPostListByAccountResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.UserInfoDTO[];
  };
  export type UserPostListByAccountGeneric = {
    query: UserPostListByAccountQuery;
    params: UserPostListByAccountParams;
    data: UserPostListByAccountBody;
    result: UserPostListByAccountResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /user/page
   * @summary 分页查询
   * @description
   */
  export type UserGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" (可选) - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}" */
    userType?: "SUPPER" | "NOMAL";

    /** boolean (可选) - 是否锁定 */
    isLock?: boolean;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 最后登录开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 最后登录结束时间 | 格式: date-time */
    endTime?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 部门id */
    departmentId?: string;
  };
  export type UserGetPageParams = Record<string, any>;
  export type UserGetPageBody = any;
  export type UserGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageUserInfoDTO (可选) */
    data?: YusuanModels.BasePageUserInfoDTO;
  };
  export type UserGetPageGeneric = {
    query: UserGetPageQuery;
    params: UserGetPageParams;
    data: UserGetPageBody;
    result: UserGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /user/getIMLink
   * @summary 获取IM连接加密信息
   * @description
   */
  export type UserGetGetIMLinkQuery = Record<string, any>;
  export type UserGetGetIMLinkParams = Record<string, any>;
  export type UserGetGetIMLinkBody = any;
  export type UserGetGetIMLinkResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.IMLinkDTO (可选) */
    data?: YusuanModels.IMLinkDTO;
  };
  export type UserGetGetIMLinkGeneric = {
    query: UserGetGetIMLinkQuery;
    params: UserGetGetIMLinkParams;
    data: UserGetGetIMLinkBody;
    result: UserGetGetIMLinkResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /user/getAccountInfo
   * @summary 获取当前登录用户的信息
   * @description
   */
  export type UserGetGetAccountInfoQuery = Record<string, any>;
  export type UserGetGetAccountInfoParams = Record<string, any>;
  export type UserGetGetAccountInfoBody = any;
  export type UserGetGetAccountInfoResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.UserInfoDTO (可选) */
    data?: YusuanModels.UserInfoDTO;
  };
  export type UserGetGetAccountInfoGeneric = {
    query: UserGetGetAccountInfoQuery;
    params: UserGetGetAccountInfoParams;
    data: UserGetGetAccountInfoBody;
    result: UserGetGetAccountInfoResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };
}
