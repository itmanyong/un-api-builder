import { XinliModels } from './models';
export namespace InformationCollectionModels {
/**
* @url /informationCollection/list 
* @summary 批量修改 
* @description  
 */
export type InformationCollectionPutListQuery = Record<string, any>
export type InformationCollectionPutListParams = Record<string, any>
export type InformationCollectionPutListBody = XinliModels.UpdateInformationCollection[]
export type InformationCollectionPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type InformationCollectionPutListGeneric = {
          query: InformationCollectionPutListQuery;
          params: InformationCollectionPutListParams;
          data: InformationCollectionPutListBody;
          result: InformationCollectionPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/list 
* @summary 批量新增 
* @description  
 */
export type InformationCollectionPostListQuery = Record<string, any>
export type InformationCollectionPostListParams = Record<string, any>
export type InformationCollectionPostListBody = XinliModels.InformationCollectionDTO[]
export type InformationCollectionPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.InformationCollectionDTO[];
}
export type InformationCollectionPostListGeneric = {
          query: InformationCollectionPostListQuery;
          params: InformationCollectionPostListParams;
          data: InformationCollectionPostListBody;
          result: InformationCollectionPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/list 
* @summary 批量删除 
* @description  
 */
export type InformationCollectionDeleteListQuery = Record<string, any>
export type InformationCollectionDeleteListParams = Record<string, any>
export type InformationCollectionDeleteListBody = string[]
export type InformationCollectionDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type InformationCollectionDeleteListGeneric = {
          query: InformationCollectionDeleteListQuery;
          params: InformationCollectionDeleteListParams;
          data: InformationCollectionDeleteListBody;
          result: InformationCollectionDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/item 
* @summary 修改 
* @description  
 */
export type InformationCollectionPutItemQuery = Record<string, any>
export type InformationCollectionPutItemParams = Record<string, any>
export type InformationCollectionPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 用户ID */
  userId?: string;

  /** string (可选) - 量表ID */
  surveysId?: string;

  /** string (可选) - 填写的内容 */
  responseContent?: string;
}
export type InformationCollectionPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type InformationCollectionPutItemGeneric = {
          query: InformationCollectionPutItemQuery;
          params: InformationCollectionPutItemParams;
          data: InformationCollectionPutItemBody;
          result: InformationCollectionPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/item 
* @summary 新增 
* @description  
 */
export type InformationCollectionPostItemQuery = Record<string, any>
export type InformationCollectionPostItemParams = Record<string, any>
export type InformationCollectionPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 用户ID */
  userId?: string;

  /** string (可选) - 量表ID */
  surveysId?: string;

  /** string (可选) - 填写的内容 */
  responseContent?: string;

  /** string (可选) - 量表标题 */
  title?: string;

  /** string (可选) - 用户名 */
  userName?: string;

  /** array (可选) - 传入对象 */
  contentList?: XinliModels.Content[];
}
export type InformationCollectionPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.InformationCollectionDTO (可选) */
  data?: XinliModels.InformationCollectionDTO;
}
export type InformationCollectionPostItemGeneric = {
          query: InformationCollectionPostItemQuery;
          params: InformationCollectionPostItemParams;
          data: InformationCollectionPostItemBody;
          result: InformationCollectionPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/list/query 
* @summary 批量查询 
* @description  
 */
export type InformationCollectionPostListQueryQuery = Record<string, any>
export type InformationCollectionPostListQueryParams = Record<string, any>
export type InformationCollectionPostListQueryBody = string[]
export type InformationCollectionPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.InformationCollectionDTO[];
}
export type InformationCollectionPostListQueryGeneric = {
          query: InformationCollectionPostListQueryQuery;
          params: InformationCollectionPostListQueryParams;
          data: InformationCollectionPostListQueryBody;
          result: InformationCollectionPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type InformationCollectionGetPageQuery = {
  /** XinliModels.InformationCollectionPageQuery */
  params: XinliModels.InformationCollectionPageQuery;
}
export type InformationCollectionGetPageParams = Record<string, any>
export type InformationCollectionGetPageBody = any
export type InformationCollectionGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageInformationCollectionDTO (可选) */
  data?: XinliModels.BasePageInformationCollectionDTO;
}
export type InformationCollectionGetPageGeneric = {
          query: InformationCollectionGetPageQuery;
          params: InformationCollectionGetPageParams;
          data: InformationCollectionGetPageBody;
          result: InformationCollectionGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /informationCollection/item/{id} 
* @summary 查询 
* @description  
 */
export type InformationCollectionGetItemByIdQuery = Record<string, any>
export type InformationCollectionGetItemByIdParams = {
  /** string */
  id: string;
}
export type InformationCollectionGetItemByIdBody = any
export type InformationCollectionGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.InformationCollectionDTO (可选) */
  data?: XinliModels.InformationCollectionDTO;
}
export type InformationCollectionGetItemByIdGeneric = {
          query: InformationCollectionGetItemByIdQuery;
          params: InformationCollectionGetItemByIdParams;
          data: InformationCollectionGetItemByIdBody;
          result: InformationCollectionGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /informationCollection/item/{id} 
* @summary 删除 
* @description  
 */
export type InformationCollectionDeleteItemByIdQuery = Record<string, any>
export type InformationCollectionDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type InformationCollectionDeleteItemByIdBody = any
export type InformationCollectionDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type InformationCollectionDeleteItemByIdGeneric = {
          query: InformationCollectionDeleteItemByIdQuery;
          params: InformationCollectionDeleteItemByIdParams;
          data: InformationCollectionDeleteItemByIdBody;
          result: InformationCollectionDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
