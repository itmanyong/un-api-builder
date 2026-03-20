import { XinliModels } from "./models";
export namespace ImModels {
  /**
   * @url /im/login
   * @summary 医生登录
   * @description
   */
  export type ImPostLoginQuery = Record<string, any>;
  export type ImPostLoginParams = Record<string, any>;
  export type ImPostLoginBody = {
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
  };
  export type ImPostLoginResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type ImPostLoginGeneric = {
    query: ImPostLoginQuery;
    params: ImPostLoginParams;
    data: ImPostLoginBody;
    result: ImPostLoginResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /im/link
   * @summary im连接
   * @description
   */
  export type ImGetLinkQuery = Record<string, any>;
  export type ImGetLinkParams = Record<string, any>;
  export type ImGetLinkBody = any;
  export type ImGetLinkResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.IMLinkDTO (可选) */
    data?: XinliModels.IMLinkDTO;
  };
  export type ImGetLinkGeneric = {
    query: ImGetLinkQuery;
    params: ImGetLinkParams;
    data: ImGetLinkBody;
    result: ImGetLinkResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /im/info
   * @summary 当前登录信息
   * @description
   */
  export type ImGetInfoQuery = Record<string, any>;
  export type ImGetInfoParams = Record<string, any>;
  export type ImGetInfoBody = any;
  export type ImGetInfoResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };
  export type ImGetInfoGeneric = {
    query: ImGetInfoQuery;
    params: ImGetInfoParams;
    data: ImGetInfoBody;
    result: ImGetInfoResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };
}
