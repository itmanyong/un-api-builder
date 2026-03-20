import { XinliModels } from './models';
export namespace OptionsModels {
/**
* @url /options/list 
* @summary 批量修改 
* @description  
 */
export type OptionsPutListQuery = Record<string, any>
export type OptionsPutListParams = Record<string, any>
export type OptionsPutListBody = XinliModels.UpdateOptions[]
export type OptionsPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type OptionsPutListGeneric = {
          query: OptionsPutListQuery;
          params: OptionsPutListParams;
          data: OptionsPutListBody;
          result: OptionsPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/list 
* @summary 批量新增 
* @description  
 */
export type OptionsPostListQuery = Record<string, any>
export type OptionsPostListParams = Record<string, any>
export type OptionsPostListBody = XinliModels.OptionsDTO[]
export type OptionsPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.OptionsDTO[];
}
export type OptionsPostListGeneric = {
          query: OptionsPostListQuery;
          params: OptionsPostListParams;
          data: OptionsPostListBody;
          result: OptionsPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/list 
* @summary 批量删除 
* @description  
 */
export type OptionsDeleteListQuery = Record<string, any>
export type OptionsDeleteListParams = Record<string, any>
export type OptionsDeleteListBody = string[]
export type OptionsDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type OptionsDeleteListGeneric = {
          query: OptionsDeleteListQuery;
          params: OptionsDeleteListParams;
          data: OptionsDeleteListBody;
          result: OptionsDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/item 
* @summary 修改 
* @description  
 */
export type OptionsPutItemQuery = Record<string, any>
export type OptionsPutItemParams = Record<string, any>
export type OptionsPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}" */
  type?: "QUESTION" | "INFORMATION";

  /** string (可选) - 选项文本（如 A、B、C） */
  label?: string;

  /** string (可选) - 选项对应的值 */
  value?: string;

  /** number (可选) - 选项分数 | 格式: int32 */
  score?: number;

  /** string (可选) - 问题code */
  questionCode?: string;

  /** string (可选) - code */
  code?: string;
}
export type OptionsPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type OptionsPutItemGeneric = {
          query: OptionsPutItemQuery;
          params: OptionsPutItemParams;
          data: OptionsPutItemBody;
          result: OptionsPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/item 
* @summary 新增 
* @description  
 */
export type OptionsPostItemQuery = Record<string, any>
export type OptionsPostItemParams = Record<string, any>
export type OptionsPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}" */
  type?: "QUESTION" | "INFORMATION";

  /** string (可选) - 选项文本（如 A、B、C） */
  label?: string;

  /** string (可选) - 选项对应的值 */
  value?: string;

  /** number (可选) - 选项分数 | 格式: int32 */
  score?: number;

  /** string (可选) - 问题code */
  questionCode?: string;

  /** string (可选) - code */
  code?: string;

  /** number (可选) - 格式: int32 */
  sort?: number;

  /** array (可选) */
  preconditionList?: XinliModels.PreconditionDTO[];
}
export type OptionsPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.OptionsDTO (可选) */
  data?: XinliModels.OptionsDTO;
}
export type OptionsPostItemGeneric = {
          query: OptionsPostItemQuery;
          params: OptionsPostItemParams;
          data: OptionsPostItemBody;
          result: OptionsPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/list/query 
* @summary 批量查询 
* @description  
 */
export type OptionsPostListQueryQuery = Record<string, any>
export type OptionsPostListQueryParams = Record<string, any>
export type OptionsPostListQueryBody = string[]
export type OptionsPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.OptionsDTO[];
}
export type OptionsPostListQueryGeneric = {
          query: OptionsPostListQueryQuery;
          params: OptionsPostListQueryParams;
          data: OptionsPostListQueryBody;
          result: OptionsPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type OptionsGetPageQuery = {
  /** XinliModels.OptionsPageQuery */
  params: XinliModels.OptionsPageQuery;
}
export type OptionsGetPageParams = Record<string, any>
export type OptionsGetPageBody = any
export type OptionsGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageOptionsDTO (可选) */
  data?: XinliModels.BasePageOptionsDTO;
}
export type OptionsGetPageGeneric = {
          query: OptionsGetPageQuery;
          params: OptionsGetPageParams;
          data: OptionsGetPageBody;
          result: OptionsGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /options/item/{id} 
* @summary 查询 
* @description  
 */
export type OptionsGetItemByIdQuery = Record<string, any>
export type OptionsGetItemByIdParams = {
  /** string */
  id: string;
}
export type OptionsGetItemByIdBody = any
export type OptionsGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.OptionsDTO (可选) */
  data?: XinliModels.OptionsDTO;
}
export type OptionsGetItemByIdGeneric = {
          query: OptionsGetItemByIdQuery;
          params: OptionsGetItemByIdParams;
          data: OptionsGetItemByIdBody;
          result: OptionsGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /options/item/{id} 
* @summary 删除 
* @description  
 */
export type OptionsDeleteItemByIdQuery = Record<string, any>
export type OptionsDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type OptionsDeleteItemByIdBody = any
export type OptionsDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type OptionsDeleteItemByIdGeneric = {
          query: OptionsDeleteItemByIdQuery;
          params: OptionsDeleteItemByIdParams;
          data: OptionsDeleteItemByIdBody;
          result: OptionsDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
