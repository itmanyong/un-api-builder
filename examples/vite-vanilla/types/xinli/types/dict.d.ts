import { XinliModels } from './models';
export namespace DictModels {
/**
* @url /dict/status/{id} 
* @summary 修改状态 
* @description  
 */
export type DictPutStatusByIdQuery = Record<string, any>
export type DictPutStatusByIdParams = {
  /** string */
  id: string;
}
export type DictPutStatusByIdBody = any
export type DictPutStatusByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictPutStatusByIdGeneric = {
          query: DictPutStatusByIdQuery;
          params: DictPutStatusByIdParams;
          data: DictPutStatusByIdBody;
          result: DictPutStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /dict/item 
* @summary 修改字典类型 
* @description  
 */
export type DictPutItemQuery = Record<string, any>
export type DictPutItemParams = Record<string, any>
export type DictPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** string (可选) - 字典名称 */
  name?: string;

  /** string (可选) - 字典类型 */
  code?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictPutItemGeneric = {
          query: DictPutItemQuery;
          params: DictPutItemParams;
          data: DictPutItemBody;
          result: DictPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/item 
* @summary 新增字典类型 
* @description  
 */
export type DictPostItemQuery = Record<string, any>
export type DictPostItemParams = Record<string, any>
export type DictPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** string - 字典名称 */
  name: string;

  /** string - 字典类型 */
  code: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.SysDictTypeDTO (可选) */
  data?: XinliModels.SysDictTypeDTO;
}
export type DictPostItemGeneric = {
          query: DictPostItemQuery;
          params: DictPostItemParams;
          data: DictPostItemBody;
          result: DictPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /dict/data/status/{id} 
* @summary 修改状态 
* @description  
 */
export type DictPutDataStatusByIdQuery = Record<string, any>
export type DictPutDataStatusByIdParams = {
  /** string */
  id: string;
}
export type DictPutDataStatusByIdBody = any
export type DictPutDataStatusByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictPutDataStatusByIdGeneric = {
          query: DictPutDataStatusByIdQuery;
          params: DictPutDataStatusByIdParams;
          data: DictPutDataStatusByIdBody;
          result: DictPutDataStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /dict/data/item 
* @summary 修改字典数据 
* @description  
 */
export type DictPutDataItemQuery = Record<string, any>
export type DictPutDataItemParams = Record<string, any>
export type DictPutDataItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** string (可选) - 父id */
  parentId?: string;

  /** string (可选) - 字典名称 */
  name?: string;

  /** number (可选) - 字典排序 | 格式: int32 */
  dictSort?: number;

  /** string (可选) - 字典键值 */
  code?: string;

  /** string (可选) - 颜色 */
  color?: string;

  /** string (可选) - 标识 */
  logo?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictPutDataItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictPutDataItemGeneric = {
          query: DictPutDataItemQuery;
          params: DictPutDataItemParams;
          data: DictPutDataItemBody;
          result: DictPutDataItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/data/item 
* @summary 新增字典数据 
* @description  
 */
export type DictPostDataItemQuery = Record<string, any>
export type DictPostDataItemParams = Record<string, any>
export type DictPostDataItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** string (可选) - 父id */
  parentId?: string;

  /** string (可选) - 字典名称 */
  name?: string;

  /** number (可选) - 字典排序 | 格式: int32 */
  dictSort?: number;

  /** string (可选) - 字典键值 */
  code?: string;

  /** string (可选) - 颜色 */
  color?: string;

  /** string (可选) - 标识 */
  logo?: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DictPostDataItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.SysDictDataDTO (可选) */
  data?: XinliModels.SysDictDataDTO;
}
export type DictPostDataItemGeneric = {
          query: DictPostDataItemQuery;
          params: DictPostDataItemParams;
          data: DictPostDataItemBody;
          result: DictPostDataItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/page 
* @summary 分页查询 
* @description 字典类型分页查询 
 */
export type DictGetPageQuery = {
  /** XinliModels.SysDictTypePageQuery */
  params: XinliModels.SysDictTypePageQuery;
}
export type DictGetPageParams = Record<string, any>
export type DictGetPageBody = any
export type DictGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageSysDictTypeDTO (可选) */
  data?: XinliModels.BasePageSysDictTypeDTO;
}
export type DictGetPageGeneric = {
          query: DictGetPageQuery;
          params: DictGetPageParams;
          data: DictGetPageBody;
          result: DictGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/data/page 
* @summary 分页查询 
* @description 字典类型分页查询 
 */
export type DictGetDataPageQuery = {
  /** XinliModels.SysDictDataPageQuery */
  params: XinliModels.SysDictDataPageQuery;
}
export type DictGetDataPageParams = Record<string, any>
export type DictGetDataPageBody = any
export type DictGetDataPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageSysDictDataDTO (可选) */
  data?: XinliModels.BasePageSysDictDataDTO;
}
export type DictGetDataPageGeneric = {
          query: DictGetDataPageQuery;
          params: DictGetDataPageParams;
          data: DictGetDataPageBody;
          result: DictGetDataPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/list 
* @summary 删除字典类型 
* @description  
 */
export type DictDeleteListQuery = Record<string, any>
export type DictDeleteListParams = Record<string, any>
export type DictDeleteListBody = string[]
export type DictDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictDeleteListGeneric = {
          query: DictDeleteListQuery;
          params: DictDeleteListParams;
          data: DictDeleteListBody;
          result: DictDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/item/{id} 
* @summary 删除 
* @description  
 */
export type DictDeleteItemByIdQuery = Record<string, any>
export type DictDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type DictDeleteItemByIdBody = any
export type DictDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictDeleteItemByIdGeneric = {
          query: DictDeleteItemByIdQuery;
          params: DictDeleteItemByIdParams;
          data: DictDeleteItemByIdBody;
          result: DictDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /dict/data/list 
* @summary 删除字典数据 
* @description  
 */
export type DictDeleteDataListQuery = Record<string, any>
export type DictDeleteDataListParams = Record<string, any>
export type DictDeleteDataListBody = string[]
export type DictDeleteDataListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictDeleteDataListGeneric = {
          query: DictDeleteDataListQuery;
          params: DictDeleteDataListParams;
          data: DictDeleteDataListBody;
          result: DictDeleteDataListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /dict/data/item/{id} 
* @summary 删除字典数据 
* @description  
 */
export type DictDeleteDataItemByIdQuery = Record<string, any>
export type DictDeleteDataItemByIdParams = {
  /** string */
  id: string;
}
export type DictDeleteDataItemByIdBody = any
export type DictDeleteDataItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DictDeleteDataItemByIdGeneric = {
          query: DictDeleteDataItemByIdQuery;
          params: DictDeleteDataItemByIdParams;
          data: DictDeleteDataItemByIdBody;
          result: DictDeleteDataItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
