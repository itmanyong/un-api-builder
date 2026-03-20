import { XinliModels } from './models';
export namespace CategoryModels {
/**
* @url /category/list 
* @summary 批量修改 
* @description  
 */
export type CategoryPutListQuery = Record<string, any>
export type CategoryPutListParams = Record<string, any>
export type CategoryPutListBody = XinliModels.UpdateCategory[]
export type CategoryPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type CategoryPutListGeneric = {
          query: CategoryPutListQuery;
          params: CategoryPutListParams;
          data: CategoryPutListBody;
          result: CategoryPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/list 
* @summary 批量新增 
* @description  
 */
export type CategoryPostListQuery = Record<string, any>
export type CategoryPostListParams = Record<string, any>
export type CategoryPostListBody = XinliModels.CategoryDTO[]
export type CategoryPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.CategoryDTO[];
}
export type CategoryPostListGeneric = {
          query: CategoryPostListQuery;
          params: CategoryPostListParams;
          data: CategoryPostListBody;
          result: CategoryPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/list 
* @summary 批量删除 
* @description  
 */
export type CategoryDeleteListQuery = Record<string, any>
export type CategoryDeleteListParams = Record<string, any>
export type CategoryDeleteListBody = string[]
export type CategoryDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type CategoryDeleteListGeneric = {
          query: CategoryDeleteListQuery;
          params: CategoryDeleteListParams;
          data: CategoryDeleteListBody;
          result: CategoryDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/item 
* @summary 修改 
* @description  
 */
export type CategoryPutItemQuery = Record<string, any>
export type CategoryPutItemParams = Record<string, any>
export type CategoryPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 名称 */
  name?: string;

  /** string (可选) - 描述 */
  description?: string;

  /** string (可选) - 父id */
  parentId?: string;

  /** string (可选) - 所属机构ID */
  institutionId?: string;
}
export type CategoryPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type CategoryPutItemGeneric = {
          query: CategoryPutItemQuery;
          params: CategoryPutItemParams;
          data: CategoryPutItemBody;
          result: CategoryPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/item 
* @summary 新增 
* @description  
 */
export type CategoryPostItemQuery = Record<string, any>
export type CategoryPostItemParams = Record<string, any>
export type CategoryPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 名称 */
  name?: string;

  /** string (可选) - 描述 */
  description?: string;

  /** string (可选) - 父id */
  parentId?: string;

  /** string (可选) - 所属机构ID */
  institutionId?: string;

  /** string (可选) - 机构名称 */
  insName?: string;
}
export type CategoryPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.CategoryDTO (可选) */
  data?: XinliModels.CategoryDTO;
}
export type CategoryPostItemGeneric = {
          query: CategoryPostItemQuery;
          params: CategoryPostItemParams;
          data: CategoryPostItemBody;
          result: CategoryPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/list/query 
* @summary 批量查询 
* @description  
 */
export type CategoryPostListQueryQuery = Record<string, any>
export type CategoryPostListQueryParams = Record<string, any>
export type CategoryPostListQueryBody = string[]
export type CategoryPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.CategoryDTO[];
}
export type CategoryPostListQueryGeneric = {
          query: CategoryPostListQueryQuery;
          params: CategoryPostListQueryParams;
          data: CategoryPostListQueryBody;
          result: CategoryPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type CategoryGetPageQuery = {
  /** XinliModels.CategoryPageQuery */
  params: XinliModels.CategoryPageQuery;
}
export type CategoryGetPageParams = Record<string, any>
export type CategoryGetPageBody = any
export type CategoryGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageCategoryDTO (可选) */
  data?: XinliModels.BasePageCategoryDTO;
}
export type CategoryGetPageGeneric = {
          query: CategoryGetPageQuery;
          params: CategoryGetPageParams;
          data: CategoryGetPageBody;
          result: CategoryGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /category/item/{id} 
* @summary 查询 
* @description  
 */
export type CategoryGetItemByIdQuery = Record<string, any>
export type CategoryGetItemByIdParams = {
  /** string */
  id: string;
}
export type CategoryGetItemByIdBody = any
export type CategoryGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.CategoryDTO (可选) */
  data?: XinliModels.CategoryDTO;
}
export type CategoryGetItemByIdGeneric = {
          query: CategoryGetItemByIdQuery;
          params: CategoryGetItemByIdParams;
          data: CategoryGetItemByIdBody;
          result: CategoryGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /category/item/{id} 
* @summary 删除 
* @description  
 */
export type CategoryDeleteItemByIdQuery = Record<string, any>
export type CategoryDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type CategoryDeleteItemByIdBody = any
export type CategoryDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type CategoryDeleteItemByIdGeneric = {
          query: CategoryDeleteItemByIdQuery;
          params: CategoryDeleteItemByIdParams;
          data: CategoryDeleteItemByIdBody;
          result: CategoryDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
