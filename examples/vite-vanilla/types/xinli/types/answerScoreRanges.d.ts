import { XinliModels } from "./models";
export namespace AnswerScoreRangesModels {
  /**
   * @url /answerScoreRanges/list
   * @summary 批量修改
   * @description
   */
  export type AnswerScoreRangesPutListQuery = Record<string, any>;
  export type AnswerScoreRangesPutListParams = Record<string, any>;
  export type AnswerScoreRangesPutListBody = XinliModels.UpdateAnswerScoreRanges[];
  export type AnswerScoreRangesPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswerScoreRangesPutListGeneric = {
    query: AnswerScoreRangesPutListQuery;
    params: AnswerScoreRangesPutListParams;
    data: AnswerScoreRangesPutListBody;
    result: AnswerScoreRangesPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/list
   * @summary 批量新增
   * @description
   */
  export type AnswerScoreRangesPostListQuery = Record<string, any>;
  export type AnswerScoreRangesPostListParams = Record<string, any>;
  export type AnswerScoreRangesPostListBody = XinliModels.AnswerScoreRangesDTO[];
  export type AnswerScoreRangesPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswerScoreRangesDTO[];
  };
  export type AnswerScoreRangesPostListGeneric = {
    query: AnswerScoreRangesPostListQuery;
    params: AnswerScoreRangesPostListParams;
    data: AnswerScoreRangesPostListBody;
    result: AnswerScoreRangesPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/list
   * @summary 批量删除
   * @description
   */
  export type AnswerScoreRangesDeleteListQuery = Record<string, any>;
  export type AnswerScoreRangesDeleteListParams = Record<string, any>;
  export type AnswerScoreRangesDeleteListBody = string[];
  export type AnswerScoreRangesDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswerScoreRangesDeleteListGeneric = {
    query: AnswerScoreRangesDeleteListQuery;
    params: AnswerScoreRangesDeleteListParams;
    data: AnswerScoreRangesDeleteListBody;
    result: AnswerScoreRangesDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/item
   * @summary 修改
   * @description
   */
  export type AnswerScoreRangesPutItemQuery = Record<string, any>;
  export type AnswerScoreRangesPutItemParams = Record<string, any>;
  export type AnswerScoreRangesPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** number (可选) - 分数区间最小值 | 格式: int32 */
    minScore?: number;

    /** number (可选) - 分数区间最大值 | 格式: int32 */
    maxScore?: number;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;
  };
  export type AnswerScoreRangesPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswerScoreRangesPutItemGeneric = {
    query: AnswerScoreRangesPutItemQuery;
    params: AnswerScoreRangesPutItemParams;
    data: AnswerScoreRangesPutItemBody;
    result: AnswerScoreRangesPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/item
   * @summary 新增
   * @description
   */
  export type AnswerScoreRangesPostItemQuery = Record<string, any>;
  export type AnswerScoreRangesPostItemParams = Record<string, any>;
  export type AnswerScoreRangesPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** number (可选) - 分数区间最小值 | 格式: int32 */
    minScore?: number;

    /** number (可选) - 分数区间最大值 | 格式: int32 */
    maxScore?: number;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;

    /** string (可选) - 量表标题 */
    title?: string;
  };
  export type AnswerScoreRangesPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswerScoreRangesDTO (可选) */
    data?: XinliModels.AnswerScoreRangesDTO;
  };
  export type AnswerScoreRangesPostItemGeneric = {
    query: AnswerScoreRangesPostItemQuery;
    params: AnswerScoreRangesPostItemParams;
    data: AnswerScoreRangesPostItemBody;
    result: AnswerScoreRangesPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/list/query
   * @summary 批量查询
   * @description
   */
  export type AnswerScoreRangesPostListQueryQuery = Record<string, any>;
  export type AnswerScoreRangesPostListQueryParams = Record<string, any>;
  export type AnswerScoreRangesPostListQueryBody = string[];
  export type AnswerScoreRangesPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswerScoreRangesDTO[];
  };
  export type AnswerScoreRangesPostListQueryGeneric = {
    query: AnswerScoreRangesPostListQueryQuery;
    params: AnswerScoreRangesPostListQueryParams;
    data: AnswerScoreRangesPostListQueryBody;
    result: AnswerScoreRangesPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type AnswerScoreRangesGetPageQuery = {
    /** XinliModels.AnswerScoreRangesPageQuery */
    params: XinliModels.AnswerScoreRangesPageQuery;
  };
  export type AnswerScoreRangesGetPageParams = Record<string, any>;
  export type AnswerScoreRangesGetPageBody = any;
  export type AnswerScoreRangesGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswerScoreRangesDTO (可选) */
    data?: XinliModels.BasePageAnswerScoreRangesDTO;
  };
  export type AnswerScoreRangesGetPageGeneric = {
    query: AnswerScoreRangesGetPageQuery;
    params: AnswerScoreRangesGetPageParams;
    data: AnswerScoreRangesGetPageBody;
    result: AnswerScoreRangesGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/item/{id}
   * @summary 查询
   * @description
   */
  export type AnswerScoreRangesGetItemByIdQuery = Record<string, any>;
  export type AnswerScoreRangesGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnswerScoreRangesGetItemByIdBody = any;
  export type AnswerScoreRangesGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswerScoreRangesDTO (可选) */
    data?: XinliModels.AnswerScoreRangesDTO;
  };
  export type AnswerScoreRangesGetItemByIdGeneric = {
    query: AnswerScoreRangesGetItemByIdQuery;
    params: AnswerScoreRangesGetItemByIdParams;
    data: AnswerScoreRangesGetItemByIdBody;
    result: AnswerScoreRangesGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /answerScoreRanges/item/{id}
   * @summary 删除
   * @description
   */
  export type AnswerScoreRangesDeleteItemByIdQuery = Record<string, any>;
  export type AnswerScoreRangesDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnswerScoreRangesDeleteItemByIdBody = any;
  export type AnswerScoreRangesDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswerScoreRangesDeleteItemByIdGeneric = {
    query: AnswerScoreRangesDeleteItemByIdQuery;
    params: AnswerScoreRangesDeleteItemByIdParams;
    data: AnswerScoreRangesDeleteItemByIdBody;
    result: AnswerScoreRangesDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
