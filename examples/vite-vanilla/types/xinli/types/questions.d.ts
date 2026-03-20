import { XinliModels } from './models';
export namespace QuestionsModels {
/**
* @url /questions/updateStatus/{id} 
* @summary 修改状态 
* @description  
 */
export type QuestionsPutUpdateStatusByIdQuery = Record<string, any>
export type QuestionsPutUpdateStatusByIdParams = {
  /** string */
  id: string;
}
export type QuestionsPutUpdateStatusByIdBody = any
export type QuestionsPutUpdateStatusByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type QuestionsPutUpdateStatusByIdGeneric = {
          query: QuestionsPutUpdateStatusByIdQuery;
          params: QuestionsPutUpdateStatusByIdParams;
          data: QuestionsPutUpdateStatusByIdBody;
          result: QuestionsPutUpdateStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /questions/list 
* @summary 批量修改（量表的题） 
* @description 量表的题批量修改 
 */
export type QuestionsPutListQuery = Record<string, any>
export type QuestionsPutListParams = Record<string, any>
export type QuestionsPutListBody = XinliModels.QuestionsDTO[]
export type QuestionsPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type QuestionsPutListGeneric = {
          query: QuestionsPutListQuery;
          params: QuestionsPutListParams;
          data: QuestionsPutListBody;
          result: QuestionsPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/list 
* @summary 批量新增 
* @description  
 */
export type QuestionsPostListQuery = Record<string, any>
export type QuestionsPostListParams = Record<string, any>
export type QuestionsPostListBody = XinliModels.QuestionsDTO[]
export type QuestionsPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.QuestionsDTO[];
}
export type QuestionsPostListGeneric = {
          query: QuestionsPostListQuery;
          params: QuestionsPostListParams;
          data: QuestionsPostListBody;
          result: QuestionsPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/list 
* @summary 批量删除 
* @description  
 */
export type QuestionsDeleteListQuery = Record<string, any>
export type QuestionsDeleteListParams = Record<string, any>
export type QuestionsDeleteListBody = string[]
export type QuestionsDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type QuestionsDeleteListGeneric = {
          query: QuestionsDeleteListQuery;
          params: QuestionsDeleteListParams;
          data: QuestionsDeleteListBody;
          result: QuestionsDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/item 
* @summary 修改（题库的题） 
* @description 题库的题单个修改 
 */
export type QuestionsPutItemQuery = Record<string, any>
export type QuestionsPutItemParams = Record<string, any>
export type QuestionsPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}" */
  sourceType?: "BANK" | "SURVEY";

  /** string (可选) - 量表ID */
  surveysId?: string;

  /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
  questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

  /** string (可选) - 问题文本 */
  questionText?: string;

  /** number (可选) - 排序 | 格式: int32 */
  order?: number;

  /** boolean (可选) - 是否必填 */
  required?: boolean;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 分类ID */
  categoryId?: string;

  /** string (可选) - code */
  code?: string;
}
export type QuestionsPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type QuestionsPutItemGeneric = {
          query: QuestionsPutItemQuery;
          params: QuestionsPutItemParams;
          data: QuestionsPutItemBody;
          result: QuestionsPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/item 
* @summary 新增 
* @description  
 */
export type QuestionsPostItemQuery = Record<string, any>
export type QuestionsPostItemParams = Record<string, any>
export type QuestionsPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}" */
  sourceType?: "BANK" | "SURVEY";

  /** string (可选) - 量表ID */
  surveysId?: string;

  /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
  questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

  /** string (可选) - 问题文本 */
  questionText?: string;

  /** number (可选) - 排序 | 格式: int32 */
  order?: number;

  /** boolean (可选) - 是否必填 */
  required?: boolean;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 分类ID */
  categoryId?: string;

  /** string (可选) - 分类名字 */
  categoryName?: string;

  /** string (可选) - code */
  code?: string;

  /** string (可选) */
  surveysTitle?: string;

  /** array (可选) */
  optionList?: XinliModels.OptionsDTO[];

  /** array (可选) */
  preconditionList?: XinliModels.PreconditionDTO[];
}
export type QuestionsPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.QuestionsDTO (可选) */
  data?: XinliModels.QuestionsDTO;
}
export type QuestionsPostItemGeneric = {
          query: QuestionsPostItemQuery;
          params: QuestionsPostItemParams;
          data: QuestionsPostItemBody;
          result: QuestionsPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/list/query 
* @summary 批量查询 
* @description  
 */
export type QuestionsPostListQueryQuery = Record<string, any>
export type QuestionsPostListQueryParams = Record<string, any>
export type QuestionsPostListQueryBody = string[]
export type QuestionsPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.QuestionsDTO[];
}
export type QuestionsPostListQueryGeneric = {
          query: QuestionsPostListQueryQuery;
          params: QuestionsPostListQueryParams;
          data: QuestionsPostListQueryBody;
          result: QuestionsPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type QuestionsGetPageQuery = {
  /** XinliModels.QuestionsPageQuery */
  params: XinliModels.QuestionsPageQuery;
}
export type QuestionsGetPageParams = Record<string, any>
export type QuestionsGetPageBody = any
export type QuestionsGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageQuestionsDTO (可选) */
  data?: XinliModels.BasePageQuestionsDTO;
}
export type QuestionsGetPageGeneric = {
          query: QuestionsGetPageQuery;
          params: QuestionsGetPageParams;
          data: QuestionsGetPageBody;
          result: QuestionsGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /questions/item/{id} 
* @summary 查询 
* @description  
 */
export type QuestionsGetItemByIdQuery = Record<string, any>
export type QuestionsGetItemByIdParams = {
  /** string */
  id: string;
}
export type QuestionsGetItemByIdBody = any
export type QuestionsGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.QuestionsDTO (可选) */
  data?: XinliModels.QuestionsDTO;
}
export type QuestionsGetItemByIdGeneric = {
          query: QuestionsGetItemByIdQuery;
          params: QuestionsGetItemByIdParams;
          data: QuestionsGetItemByIdBody;
          result: QuestionsGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /questions/item/{id} 
* @summary 删除 
* @description  
 */
export type QuestionsDeleteItemByIdQuery = Record<string, any>
export type QuestionsDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type QuestionsDeleteItemByIdBody = any
export type QuestionsDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type QuestionsDeleteItemByIdGeneric = {
          query: QuestionsDeleteItemByIdQuery;
          params: QuestionsDeleteItemByIdParams;
          data: QuestionsDeleteItemByIdBody;
          result: QuestionsDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
