import { XinliModels } from "./models";
export namespace AnswersModels {
  /**
   * @url /answers/list
   * @summary 批量修改
   * @description
   */
  export type AnswersPutListQuery = Record<string, any>;
  export type AnswersPutListParams = Record<string, any>;
  export type AnswersPutListBody = XinliModels.UpdateAnswers[];
  export type AnswersPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswersPutListGeneric = {
    query: AnswersPutListQuery;
    params: AnswersPutListParams;
    data: AnswersPutListBody;
    result: AnswersPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/list
   * @summary 批量新增
   * @description
   */
  export type AnswersPostListQuery = Record<string, any>;
  export type AnswersPostListParams = Record<string, any>;
  export type AnswersPostListBody = XinliModels.AnswersDTO[];
  export type AnswersPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswersDTO[];
  };
  export type AnswersPostListGeneric = {
    query: AnswersPostListQuery;
    params: AnswersPostListParams;
    data: AnswersPostListBody;
    result: AnswersPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/list
   * @summary 批量删除
   * @description
   */
  export type AnswersDeleteListQuery = Record<string, any>;
  export type AnswersDeleteListParams = Record<string, any>;
  export type AnswersDeleteListBody = string[];
  export type AnswersDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswersDeleteListGeneric = {
    query: AnswersDeleteListQuery;
    params: AnswersDeleteListParams;
    data: AnswersDeleteListBody;
    result: AnswersDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/item
   * @summary 修改
   * @description
   */
  export type AnswersPutItemQuery = Record<string, any>;
  export type AnswersPutItemParams = Record<string, any>;
  export type AnswersPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 总分数 | 格式: int32 */
    totalScore?: number;

    /** string (可选) - 回答详细内容 */
    answer?: string;
  };
  export type AnswersPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswersPutItemGeneric = {
    query: AnswersPutItemQuery;
    params: AnswersPutItemParams;
    data: AnswersPutItemBody;
    result: AnswersPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/item
   * @summary 新增
   * @description
   */
  export type AnswersPostItemQuery = Record<string, any>;
  export type AnswersPostItemParams = Record<string, any>;
  export type AnswersPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 总分数 | 格式: int32 */
    totalScore?: number;

    /** string (可选) - 回答详细内容 */
    answer?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;
  };
  export type AnswersPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswersDTO (可选) */
    data?: XinliModels.AnswersDTO;
  };
  export type AnswersPostItemGeneric = {
    query: AnswersPostItemQuery;
    params: AnswersPostItemParams;
    data: AnswersPostItemBody;
    result: AnswersPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/list/query
   * @summary 批量查询
   * @description
   */
  export type AnswersPostListQueryQuery = Record<string, any>;
  export type AnswersPostListQueryParams = Record<string, any>;
  export type AnswersPostListQueryBody = string[];
  export type AnswersPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswersDTO[];
  };
  export type AnswersPostListQueryGeneric = {
    query: AnswersPostListQueryQuery;
    params: AnswersPostListQueryParams;
    data: AnswersPostListQueryBody;
    result: AnswersPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type AnswersGetPageQuery = {
    /** XinliModels.AnswersPageQuery */
    params: XinliModels.AnswersPageQuery;
  };
  export type AnswersGetPageParams = Record<string, any>;
  export type AnswersGetPageBody = any;
  export type AnswersGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswersDTO (可选) */
    data?: XinliModels.BasePageAnswersDTO;
  };
  export type AnswersGetPageGeneric = {
    query: AnswersGetPageQuery;
    params: AnswersGetPageParams;
    data: AnswersGetPageBody;
    result: AnswersGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /answers/item/{id}
   * @summary 查询
   * @description
   */
  export type AnswersGetItemByIdQuery = Record<string, any>;
  export type AnswersGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnswersGetItemByIdBody = any;
  export type AnswersGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswersDTO (可选) */
    data?: XinliModels.AnswersDTO;
  };
  export type AnswersGetItemByIdGeneric = {
    query: AnswersGetItemByIdQuery;
    params: AnswersGetItemByIdParams;
    data: AnswersGetItemByIdBody;
    result: AnswersGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /answers/item/{id}
   * @summary 删除
   * @description
   */
  export type AnswersDeleteItemByIdQuery = Record<string, any>;
  export type AnswersDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnswersDeleteItemByIdBody = any;
  export type AnswersDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnswersDeleteItemByIdGeneric = {
    query: AnswersDeleteItemByIdQuery;
    params: AnswersDeleteItemByIdParams;
    data: AnswersDeleteItemByIdBody;
    result: AnswersDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
