import { YusuanModels } from './models';
export namespace DictDataModels {
/**
* @url /dictData/{id} 
* @summary 修改字典数据 
* @description  
 */
export type DictDataPutByIdQuery = Record<string, any>
export type DictDataPutByIdParams = {
  /** string */
  id: string;
}
export type DictDataPutByIdBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 字典类型 */
  dictType: string;

  /** string (可选) - 字典标签 */
  dictLabel?: string;

  /** number (可选) - 字典排序 | 格式: int32 */
  dictSort?: number;

  /** string (可选) - 字典键值 */
  dictValue?: string;

  /** string (可选) - 颜色 */
  color?: string;

  /** string (可选) - 标识 */
  logo?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictDataPutByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DictDataPutByIdGeneric = {
          query: DictDataPutByIdQuery;
          params: DictDataPutByIdParams;
          data: DictDataPutByIdBody;
          result: DictDataPutByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: true;
};
     
/**
* @url /dictData/{id} 
* @summary 删除字典数据 
* @description  
 */
export type DictDataDeleteByIdQuery = Record<string, any>
export type DictDataDeleteByIdParams = {
  /** string */
  id: string;
}
export type DictDataDeleteByIdBody = any
export type DictDataDeleteByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DictDataDeleteByIdGeneric = {
          query: DictDataDeleteByIdQuery;
          params: DictDataDeleteByIdParams;
          data: DictDataDeleteByIdBody;
          result: DictDataDeleteByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /dictData/status/{id} 
* @summary 修改状态 
* @description  
 */
export type DictDataPutStatusByIdQuery = Record<string, any>
export type DictDataPutStatusByIdParams = {
  /** string */
  id: string;
}
export type DictDataPutStatusByIdBody = any
export type DictDataPutStatusByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DictDataPutStatusByIdGeneric = {
          query: DictDataPutStatusByIdQuery;
          params: DictDataPutStatusByIdParams;
          data: DictDataPutStatusByIdBody;
          result: DictDataPutStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /dictData 
* @summary 新增字典数据 
* @description  
 */
export type DictDataPostQuery = Record<string, any>
export type DictDataPostParams = Record<string, any>
export type DictDataPostBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 字典类型 */
  dictType: string;

  /** string (可选) - 字典标签 */
  dictLabel?: string;

  /** number (可选) - 字典排序 | 格式: int32 */
  dictSort?: number;

  /** string (可选) - 字典键值 */
  dictValue?: string;

  /** string (可选) - 颜色 */
  color?: string;

  /** string (可选) - 标识 */
  logo?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictDataPostResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.DictDataDTO (可选) */
  data?: YusuanModels.DictDataDTO;
}
export type DictDataPostGeneric = {
          query: DictDataPostQuery;
          params: DictDataPostParams;
          data: DictDataPostBody;
          result: DictDataPostResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /dictData/page 
* @summary 分页查询 
* @description  
 */
export type DictDataGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";
}
export type DictDataGetPageParams = Record<string, any>
export type DictDataGetPageBody = any
export type DictDataGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageDictDataDTO (可选) */
  data?: YusuanModels.BasePageDictDataDTO;
}
export type DictDataGetPageGeneric = {
          query: DictDataGetPageQuery;
          params: DictDataGetPageParams;
          data: DictDataGetPageBody;
          result: DictDataGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dictData/list 
* @summary 批量删除字典数据 
* @description  
 */
export type DictDataDeleteListQuery = Record<string, any>
export type DictDataDeleteListParams = Record<string, any>
export type DictDataDeleteListBody = string[]
export type DictDataDeleteListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DictDataDeleteListGeneric = {
          query: DictDataDeleteListQuery;
          params: DictDataDeleteListParams;
          data: DictDataDeleteListBody;
          result: DictDataDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
