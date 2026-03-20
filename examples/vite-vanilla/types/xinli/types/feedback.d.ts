import { XinliModels } from "./models";
export namespace FeedbackModels {
  /**
   * @url /feedback/list
   * @summary 批量修改
   * @description
   */
  export type FeedbackPutListQuery = Record<string, any>;
  export type FeedbackPutListParams = Record<string, any>;
  export type FeedbackPutListBody = XinliModels.UpdateFeedback[];
  export type FeedbackPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type FeedbackPutListGeneric = {
    query: FeedbackPutListQuery;
    params: FeedbackPutListParams;
    data: FeedbackPutListBody;
    result: FeedbackPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/list
   * @summary 批量新增
   * @description
   */
  export type FeedbackPostListQuery = Record<string, any>;
  export type FeedbackPostListParams = Record<string, any>;
  export type FeedbackPostListBody = XinliModels.FeedbackDTO[];
  export type FeedbackPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.FeedbackDTO[];
  };
  export type FeedbackPostListGeneric = {
    query: FeedbackPostListQuery;
    params: FeedbackPostListParams;
    data: FeedbackPostListBody;
    result: FeedbackPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/list
   * @summary 批量删除
   * @description
   */
  export type FeedbackDeleteListQuery = Record<string, any>;
  export type FeedbackDeleteListParams = Record<string, any>;
  export type FeedbackDeleteListBody = string[];
  export type FeedbackDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type FeedbackDeleteListGeneric = {
    query: FeedbackDeleteListQuery;
    params: FeedbackDeleteListParams;
    data: FeedbackDeleteListBody;
    result: FeedbackDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/item
   * @summary 修改
   * @description
   */
  export type FeedbackPutItemQuery = Record<string, any>;
  export type FeedbackPutItemParams = Record<string, any>;
  export type FeedbackPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 受理人id */
    accountId?: string;

    /** string (可选) - 用户ID，提交反馈的用户 */
    userId?: string;

    /** "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}" */
    status?: "PENDING" | "ACCEPTED" | "CLOSED";

    /** string (可选) - 反馈内容 */
    description?: string;

    /** string (可选) - 受理时间 | 格式: date-time */
    acceptedTime?: string;

    /** string (可选) - 受理回复 */
    reply?: string;

    /** string (可选) - 反馈类型 */
    type?: string;
  };
  export type FeedbackPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type FeedbackPutItemGeneric = {
    query: FeedbackPutItemQuery;
    params: FeedbackPutItemParams;
    data: FeedbackPutItemBody;
    result: FeedbackPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/item
   * @summary 新增
   * @description
   */
  export type FeedbackPostItemQuery = Record<string, any>;
  export type FeedbackPostItemParams = Record<string, any>;
  export type FeedbackPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 受理人id */
    accountId?: string;

    /** string (可选) - 用户ID，提交反馈的用户 */
    userId?: string;

    /** "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}" */
    status?: "PENDING" | "ACCEPTED" | "CLOSED";

    /** string (可选) - 反馈内容 */
    description?: string;

    /** string (可选) - 受理时间 | 格式: date-time */
    acceptedTime?: string;

    /** string (可选) - 受理回复 */
    reply?: string;

    /** string - 反馈类型 */
    type: string;

    /** string (可选) */
    accountName?: string;

    /** string (可选) */
    userName?: string;
  };
  export type FeedbackPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.FeedbackDTO (可选) */
    data?: XinliModels.FeedbackDTO;
  };
  export type FeedbackPostItemGeneric = {
    query: FeedbackPostItemQuery;
    params: FeedbackPostItemParams;
    data: FeedbackPostItemBody;
    result: FeedbackPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /feedback/list/query
   * @summary 批量查询
   * @description
   */
  export type FeedbackPostListQueryQuery = Record<string, any>;
  export type FeedbackPostListQueryParams = Record<string, any>;
  export type FeedbackPostListQueryBody = string[];
  export type FeedbackPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.FeedbackDTO[];
  };
  export type FeedbackPostListQueryGeneric = {
    query: FeedbackPostListQueryQuery;
    params: FeedbackPostListQueryParams;
    data: FeedbackPostListQueryBody;
    result: FeedbackPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type FeedbackGetPageQuery = {
    /** XinliModels.FeedbackPageQuery */
    params: XinliModels.FeedbackPageQuery;
  };
  export type FeedbackGetPageParams = Record<string, any>;
  export type FeedbackGetPageBody = any;
  export type FeedbackGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageFeedbackDTO (可选) */
    data?: XinliModels.BasePageFeedbackDTO;
  };
  export type FeedbackGetPageGeneric = {
    query: FeedbackGetPageQuery;
    params: FeedbackGetPageParams;
    data: FeedbackGetPageBody;
    result: FeedbackGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /feedback/item/{id}
   * @summary 查询
   * @description
   */
  export type FeedbackGetItemByIdQuery = Record<string, any>;
  export type FeedbackGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type FeedbackGetItemByIdBody = any;
  export type FeedbackGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.FeedbackDTO (可选) */
    data?: XinliModels.FeedbackDTO;
  };
  export type FeedbackGetItemByIdGeneric = {
    query: FeedbackGetItemByIdQuery;
    params: FeedbackGetItemByIdParams;
    data: FeedbackGetItemByIdBody;
    result: FeedbackGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /feedback/item/{id}
   * @summary 删除
   * @description
   */
  export type FeedbackDeleteItemByIdQuery = Record<string, any>;
  export type FeedbackDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type FeedbackDeleteItemByIdBody = any;
  export type FeedbackDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type FeedbackDeleteItemByIdGeneric = {
    query: FeedbackDeleteItemByIdQuery;
    params: FeedbackDeleteItemByIdParams;
    data: FeedbackDeleteItemByIdBody;
    result: FeedbackDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
