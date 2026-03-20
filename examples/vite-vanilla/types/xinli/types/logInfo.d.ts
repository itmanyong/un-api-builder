import { XinliModels } from './models';
export namespace LogInfoModels {
/**
* @url /logInfo/list/query 
* @summary 批量查询日志 
* @description  
 */
export type LogInfoPostListQueryQuery = Record<string, any>
export type LogInfoPostListQueryParams = Record<string, any>
export type LogInfoPostListQueryBody = string[]
export type LogInfoPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.LogInfoDTO[];
}
export type LogInfoPostListQueryGeneric = {
          query: LogInfoPostListQueryQuery;
          params: LogInfoPostListQueryParams;
          data: LogInfoPostListQueryBody;
          result: LogInfoPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /logInfo/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type LogInfoGetPageQuery = {
  /** XinliModels.LogInfoPageQuery */
  params: XinliModels.LogInfoPageQuery;
}
export type LogInfoGetPageParams = Record<string, any>
export type LogInfoGetPageBody = any
export type LogInfoGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageLogInfoDTO (可选) */
  data?: XinliModels.BasePageLogInfoDTO;
}
export type LogInfoGetPageGeneric = {
          query: LogInfoGetPageQuery;
          params: LogInfoGetPageParams;
          data: LogInfoGetPageBody;
          result: LogInfoGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /logInfo/item/{id} 
* @summary 查询日志 
* @description  
 */
export type LogInfoGetItemByIdQuery = Record<string, any>
export type LogInfoGetItemByIdParams = {
  /** string */
  id: string;
}
export type LogInfoGetItemByIdBody = any
export type LogInfoGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.LogInfoDTO (可选) */
  data?: XinliModels.LogInfoDTO;
}
export type LogInfoGetItemByIdGeneric = {
          query: LogInfoGetItemByIdQuery;
          params: LogInfoGetItemByIdParams;
          data: LogInfoGetItemByIdBody;
          result: LogInfoGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
