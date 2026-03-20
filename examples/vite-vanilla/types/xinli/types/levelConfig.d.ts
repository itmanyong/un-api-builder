import { XinliModels } from './models';
export namespace LevelConfigModels {
/**
* @url /levelConfig/list 
* @summary 批量修改 
* @description  
 */
export type LevelConfigPutListQuery = Record<string, any>
export type LevelConfigPutListParams = Record<string, any>
export type LevelConfigPutListBody = XinliModels.UpdateLevelConfig[]
export type LevelConfigPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type LevelConfigPutListGeneric = {
          query: LevelConfigPutListQuery;
          params: LevelConfigPutListParams;
          data: LevelConfigPutListBody;
          result: LevelConfigPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/list 
* @summary 批量新增 
* @description  
 */
export type LevelConfigPostListQuery = Record<string, any>
export type LevelConfigPostListParams = Record<string, any>
export type LevelConfigPostListBody = XinliModels.LevelConfigDTO[]
export type LevelConfigPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.LevelConfigDTO[];
}
export type LevelConfigPostListGeneric = {
          query: LevelConfigPostListQuery;
          params: LevelConfigPostListParams;
          data: LevelConfigPostListBody;
          result: LevelConfigPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/list 
* @summary 批量删除 
* @description  
 */
export type LevelConfigDeleteListQuery = Record<string, any>
export type LevelConfigDeleteListParams = Record<string, any>
export type LevelConfigDeleteListBody = string[]
export type LevelConfigDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type LevelConfigDeleteListGeneric = {
          query: LevelConfigDeleteListQuery;
          params: LevelConfigDeleteListParams;
          data: LevelConfigDeleteListBody;
          result: LevelConfigDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/item 
* @summary 修改 
* @description  
 */
export type LevelConfigPutItemQuery = Record<string, any>
export type LevelConfigPutItemParams = Record<string, any>
export type LevelConfigPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 医师等级 */
  level?: string;

  /** number (可选) - 服务时长 | 格式: int32 */
  serviceHours?: number;

  /** number (可选) - 服务次数 | 格式: int32 */
  serviceCount?: number;

  /** number (可选) - 从业年限 | 格式: int32 */
  workingYears?: number;

  /** number (可选) - 在线时长 | 格式: int32 */
  onlineHours?: number;
}
export type LevelConfigPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type LevelConfigPutItemGeneric = {
          query: LevelConfigPutItemQuery;
          params: LevelConfigPutItemParams;
          data: LevelConfigPutItemBody;
          result: LevelConfigPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/item 
* @summary 新增 
* @description  
 */
export type LevelConfigPostItemQuery = Record<string, any>
export type LevelConfigPostItemParams = Record<string, any>
export type LevelConfigPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 医师等级 */
  level?: string;

  /** number (可选) - 服务时长 | 格式: int32 */
  serviceHours?: number;

  /** number (可选) - 服务次数 | 格式: int32 */
  serviceCount?: number;

  /** number (可选) - 从业年限 | 格式: int32 */
  workingYears?: number;

  /** number (可选) - 在线时长 | 格式: int32 */
  onlineHours?: number;
}
export type LevelConfigPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.LevelConfigDTO (可选) */
  data?: XinliModels.LevelConfigDTO;
}
export type LevelConfigPostItemGeneric = {
          query: LevelConfigPostItemQuery;
          params: LevelConfigPostItemParams;
          data: LevelConfigPostItemBody;
          result: LevelConfigPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/list/query 
* @summary 批量查询 
* @description  
 */
export type LevelConfigPostListQueryQuery = Record<string, any>
export type LevelConfigPostListQueryParams = Record<string, any>
export type LevelConfigPostListQueryBody = string[]
export type LevelConfigPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.LevelConfigDTO[];
}
export type LevelConfigPostListQueryGeneric = {
          query: LevelConfigPostListQueryQuery;
          params: LevelConfigPostListQueryParams;
          data: LevelConfigPostListQueryBody;
          result: LevelConfigPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type LevelConfigGetPageQuery = {
  /** XinliModels.LevelConfigPageQuery */
  params: XinliModels.LevelConfigPageQuery;
}
export type LevelConfigGetPageParams = Record<string, any>
export type LevelConfigGetPageBody = any
export type LevelConfigGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageLevelConfigDTO (可选) */
  data?: XinliModels.BasePageLevelConfigDTO;
}
export type LevelConfigGetPageGeneric = {
          query: LevelConfigGetPageQuery;
          params: LevelConfigGetPageParams;
          data: LevelConfigGetPageBody;
          result: LevelConfigGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /levelConfig/item/{id} 
* @summary 查询 
* @description  
 */
export type LevelConfigGetItemByIdQuery = Record<string, any>
export type LevelConfigGetItemByIdParams = {
  /** string */
  id: string;
}
export type LevelConfigGetItemByIdBody = any
export type LevelConfigGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.LevelConfigDTO (可选) */
  data?: XinliModels.LevelConfigDTO;
}
export type LevelConfigGetItemByIdGeneric = {
          query: LevelConfigGetItemByIdQuery;
          params: LevelConfigGetItemByIdParams;
          data: LevelConfigGetItemByIdBody;
          result: LevelConfigGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /levelConfig/item/{id} 
* @summary 删除 
* @description  
 */
export type LevelConfigDeleteItemByIdQuery = Record<string, any>
export type LevelConfigDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type LevelConfigDeleteItemByIdBody = any
export type LevelConfigDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type LevelConfigDeleteItemByIdGeneric = {
          query: LevelConfigDeleteItemByIdQuery;
          params: LevelConfigDeleteItemByIdParams;
          data: LevelConfigDeleteItemByIdBody;
          result: LevelConfigDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
