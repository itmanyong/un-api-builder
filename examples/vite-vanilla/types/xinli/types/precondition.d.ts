import { XinliModels } from "./models";
export namespace PreconditionModels {
  /**
   * @url /precondition/list
   * @summary 批量修改
   * @description
   */
  export type PreconditionPutListQuery = Record<string, any>;
  export type PreconditionPutListParams = Record<string, any>;
  export type PreconditionPutListBody = XinliModels.UpdatePrecondition[];
  export type PreconditionPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type PreconditionPutListGeneric = {
    query: PreconditionPutListQuery;
    params: PreconditionPutListParams;
    data: PreconditionPutListBody;
    result: PreconditionPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/list
   * @summary 批量新增
   * @description
   */
  export type PreconditionPostListQuery = Record<string, any>;
  export type PreconditionPostListParams = Record<string, any>;
  export type PreconditionPostListBody = XinliModels.PreconditionDTO[];
  export type PreconditionPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.PreconditionDTO[];
  };
  export type PreconditionPostListGeneric = {
    query: PreconditionPostListQuery;
    params: PreconditionPostListParams;
    data: PreconditionPostListBody;
    result: PreconditionPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/list
   * @summary 批量删除
   * @description
   */
  export type PreconditionDeleteListQuery = Record<string, any>;
  export type PreconditionDeleteListParams = Record<string, any>;
  export type PreconditionDeleteListBody = string[];
  export type PreconditionDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type PreconditionDeleteListGeneric = {
    query: PreconditionDeleteListQuery;
    params: PreconditionDeleteListParams;
    data: PreconditionDeleteListBody;
    result: PreconditionDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/item
   * @summary 修改
   * @description
   */
  export type PreconditionPutItemQuery = Record<string, any>;
  export type PreconditionPutItemParams = Record<string, any>;
  export type PreconditionPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}" */
    sourceType?: "QUESTION" | "OPTION";

    /** "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}" */
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";

    /** "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}" */
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";

    /** number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32 */
    value?: number;

    /** string (可选) - 指定选项值（用于指定题选项的条件） */
    optionValue?: string;

    /** string (可选) - 绑定问题或选项code */
    parentCode?: string;

    /** string (可选) - 目标问题code */
    questionCode?: string;

    /** string (可选) */
    surveysId?: string;
  };
  export type PreconditionPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type PreconditionPutItemGeneric = {
    query: PreconditionPutItemQuery;
    params: PreconditionPutItemParams;
    data: PreconditionPutItemBody;
    result: PreconditionPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/item
   * @summary 新增
   * @description
   */
  export type PreconditionPostItemQuery = Record<string, any>;
  export type PreconditionPostItemParams = Record<string, any>;
  export type PreconditionPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}" */
    sourceType?: "QUESTION" | "OPTION";

    /** "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}" */
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";

    /** "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}" */
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";

    /** number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32 */
    value?: number;

    /** string (可选) - 指定选项值（用于指定题选项的条件） */
    optionValue?: string;

    /** string (可选) - 绑定问题或选项code */
    parentCode?: string;

    /** string (可选) - 目标问题code */
    questionCode?: string;

    /** string (可选) */
    surveysId?: string;
  };
  export type PreconditionPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.PreconditionDTO (可选) */
    data?: XinliModels.PreconditionDTO;
  };
  export type PreconditionPostItemGeneric = {
    query: PreconditionPostItemQuery;
    params: PreconditionPostItemParams;
    data: PreconditionPostItemBody;
    result: PreconditionPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/list/query
   * @summary 批量查询
   * @description
   */
  export type PreconditionPostListQueryQuery = Record<string, any>;
  export type PreconditionPostListQueryParams = Record<string, any>;
  export type PreconditionPostListQueryBody = string[];
  export type PreconditionPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.PreconditionDTO[];
  };
  export type PreconditionPostListQueryGeneric = {
    query: PreconditionPostListQueryQuery;
    params: PreconditionPostListQueryParams;
    data: PreconditionPostListQueryBody;
    result: PreconditionPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type PreconditionGetPageQuery = {
    /** XinliModels.PreconditionPageQuery */
    params: XinliModels.PreconditionPageQuery;
  };
  export type PreconditionGetPageParams = Record<string, any>;
  export type PreconditionGetPageBody = any;
  export type PreconditionGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePagePreconditionDTO (可选) */
    data?: XinliModels.BasePagePreconditionDTO;
  };
  export type PreconditionGetPageGeneric = {
    query: PreconditionGetPageQuery;
    params: PreconditionGetPageParams;
    data: PreconditionGetPageBody;
    result: PreconditionGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /precondition/item/{id}
   * @summary 查询
   * @description
   */
  export type PreconditionGetItemByIdQuery = Record<string, any>;
  export type PreconditionGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type PreconditionGetItemByIdBody = any;
  export type PreconditionGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.PreconditionDTO (可选) */
    data?: XinliModels.PreconditionDTO;
  };
  export type PreconditionGetItemByIdGeneric = {
    query: PreconditionGetItemByIdQuery;
    params: PreconditionGetItemByIdParams;
    data: PreconditionGetItemByIdBody;
    result: PreconditionGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /precondition/item/{id}
   * @summary 删除
   * @description
   */
  export type PreconditionDeleteItemByIdQuery = Record<string, any>;
  export type PreconditionDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type PreconditionDeleteItemByIdBody = any;
  export type PreconditionDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type PreconditionDeleteItemByIdGeneric = {
    query: PreconditionDeleteItemByIdQuery;
    params: PreconditionDeleteItemByIdParams;
    data: PreconditionDeleteItemByIdBody;
    result: PreconditionDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
