import { YusuanModels } from "./models";
export namespace DictTypeModels {
  /**
   * @url /dictType/{id}
   * @summary 修改字典类型
   * @description
   */
  export type DictTypePutByIdQuery = Record<string, any>;
  export type DictTypePutByIdParams = {
    /** string */
    id: string;
  };
  export type DictTypePutByIdBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 字典名称 */
    dictName: string;

    /** string - 字典类型 */
    dictType: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };
  export type DictTypePutByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type DictTypePutByIdGeneric = {
    query: DictTypePutByIdQuery;
    params: DictTypePutByIdParams;
    data: DictTypePutByIdBody;
    result: DictTypePutByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: true;
  };

  /**
   * @url /dictType/{id}
   * @summary 删除字典类型
   * @description
   */
  export type DictTypeDeleteByIdQuery = Record<string, any>;
  export type DictTypeDeleteByIdParams = {
    /** string */
    id: string;
  };
  export type DictTypeDeleteByIdBody = any;
  export type DictTypeDeleteByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type DictTypeDeleteByIdGeneric = {
    query: DictTypeDeleteByIdQuery;
    params: DictTypeDeleteByIdParams;
    data: DictTypeDeleteByIdBody;
    result: DictTypeDeleteByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /dictType/status/{id}
   * @summary 修改状态
   * @description
   */
  export type DictTypePutStatusByIdQuery = Record<string, any>;
  export type DictTypePutStatusByIdParams = {
    /** string */
    id: string;
  };
  export type DictTypePutStatusByIdBody = any;
  export type DictTypePutStatusByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type DictTypePutStatusByIdGeneric = {
    query: DictTypePutStatusByIdQuery;
    params: DictTypePutStatusByIdParams;
    data: DictTypePutStatusByIdBody;
    result: DictTypePutStatusByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /dictType
   * @summary 新增字典类型
   * @description
   */
  export type DictTypePostQuery = Record<string, any>;
  export type DictTypePostParams = Record<string, any>;
  export type DictTypePostBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 字典名称 */
    dictName: string;

    /** string - 字典类型 */
    dictType: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };
  export type DictTypePostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.DictTypeDTO (可选) */
    data?: YusuanModels.DictTypeDTO;
  };
  export type DictTypePostGeneric = {
    query: DictTypePostQuery;
    params: DictTypePostParams;
    data: DictTypePostBody;
    result: DictTypePostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /dictType/page
   * @summary 分页查询
   * @description
   */
  export type DictTypeGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };
  export type DictTypeGetPageParams = Record<string, any>;
  export type DictTypeGetPageBody = any;
  export type DictTypeGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageDictTypeDTO (可选) */
    data?: YusuanModels.BasePageDictTypeDTO;
  };
  export type DictTypeGetPageGeneric = {
    query: DictTypeGetPageQuery;
    params: DictTypeGetPageParams;
    data: DictTypeGetPageBody;
    result: DictTypeGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /dictType/list
   * @summary 批量删除字典类型
   * @description
   */
  export type DictTypeDeleteListQuery = Record<string, any>;
  export type DictTypeDeleteListParams = Record<string, any>;
  export type DictTypeDeleteListBody = string[];
  export type DictTypeDeleteListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type DictTypeDeleteListGeneric = {
    query: DictTypeDeleteListQuery;
    params: DictTypeDeleteListParams;
    data: DictTypeDeleteListBody;
    result: DictTypeDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };
}
