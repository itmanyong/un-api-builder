import { QianniaoModels } from "./models";
export namespace UserModels {
  /**
   * @url /user/allEnums
   * @summary 获取所有枚举信息
   * @description
   */
  export type UserGetAllEnumsQuery = Record<string, any>;
  export type UserGetAllEnumsParams = Record<string, any>;
  export type UserGetAllEnumsBody = any;
  export type UserGetAllEnumsResponse = {
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
  };
  export type UserGetAllEnumsGeneric = {
    query: UserGetAllEnumsQuery;
    params: UserGetAllEnumsParams;
    data: UserGetAllEnumsBody;
    result: UserGetAllEnumsResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };
}
