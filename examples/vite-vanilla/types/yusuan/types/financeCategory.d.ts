import { YusuanModels } from './models';
export namespace FinanceCategoryModels {
/**
* @url /financeCategory/{id} 
* @summary 修改类目数据 
* @description  
 */
export type FinanceCategoryPutByIdQuery = Record<string, any>
export type FinanceCategoryPutByIdParams = {
  /** string */
  id: string;
}
export type FinanceCategoryPutByIdBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string (可选) - 父级ID */
  parentId?: string;

  /** string (可选) - 编码 */
  code?: string;

  /** string (可选) - 名称 */
  name?: string;

  /** number (可选) - 排序号 | 格式: int32 */
  sort?: number;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type FinanceCategoryPutByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type FinanceCategoryPutByIdGeneric = {
          query: FinanceCategoryPutByIdQuery;
          params: FinanceCategoryPutByIdParams;
          data: FinanceCategoryPutByIdBody;
          result: FinanceCategoryPutByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /financeCategory/status 
* @summary 批量修改状态 
* @description  
 */
export type FinanceCategoryPutStatusQuery = Record<string, any>
export type FinanceCategoryPutStatusParams = Record<string, any>
export type FinanceCategoryPutStatusBody = {
  /** array - 主键ID列表 */
  ids: string[];

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status: "ENABLE" | "DISABLE";
}
export type FinanceCategoryPutStatusResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type FinanceCategoryPutStatusGeneric = {
          query: FinanceCategoryPutStatusQuery;
          params: FinanceCategoryPutStatusParams;
          data: FinanceCategoryPutStatusBody;
          result: FinanceCategoryPutStatusResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /financeCategory 
* @summary 新增类目数据 
* @description  
 */
export type FinanceCategoryPostQuery = Record<string, any>
export type FinanceCategoryPostParams = Record<string, any>
export type FinanceCategoryPostBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string (可选) - 父级ID */
  parentId?: string;

  /** string (可选) - 编码 */
  code?: string;

  /** string (可选) - 名称 */
  name?: string;

  /** number (可选) - 排序号 | 格式: int32 */
  sort?: number;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type FinanceCategoryPostResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.FinanceCategoryDTO (可选) */
  data?: YusuanModels.FinanceCategoryDTO;
}
export type FinanceCategoryPostGeneric = {
          query: FinanceCategoryPostQuery;
          params: FinanceCategoryPostParams;
          data: FinanceCategoryPostBody;
          result: FinanceCategoryPostResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /financeCategory/list 
* @summary 根据id集合获取列表 
* @description  
 */
export type FinanceCategoryPostListQuery = Record<string, any>
export type FinanceCategoryPostListParams = Record<string, any>
export type FinanceCategoryPostListBody = string[]
export type FinanceCategoryPostListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** array (可选) - 返回数据 */
  data?: YusuanModels.FinanceCategoryDTO[];
}
export type FinanceCategoryPostListGeneric = {
          query: FinanceCategoryPostListQuery;
          params: FinanceCategoryPostListParams;
          data: FinanceCategoryPostListBody;
          result: FinanceCategoryPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /financeCategory/page 
* @summary 分页查询 
* @description  
 */
export type FinanceCategoryGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** string (可选) - 上级部门ID */
  parentId?: string;
}
export type FinanceCategoryGetPageParams = Record<string, any>
export type FinanceCategoryGetPageBody = any
export type FinanceCategoryGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageFinanceCategoryDTO (可选) */
  data?: YusuanModels.BasePageFinanceCategoryDTO;
}
export type FinanceCategoryGetPageGeneric = {
          query: FinanceCategoryGetPageQuery;
          params: FinanceCategoryGetPageParams;
          data: FinanceCategoryGetPageBody;
          result: FinanceCategoryGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
