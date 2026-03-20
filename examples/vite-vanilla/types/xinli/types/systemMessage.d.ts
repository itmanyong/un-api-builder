import { XinliModels } from "./models";
export namespace SystemMessageModels {
  /**
   * @url /systemMessage/list
   * @summary 批量修改
   * @description
   */
  export type SystemMessagePutListQuery = Record<string, any>;
  export type SystemMessagePutListParams = Record<string, any>;
  export type SystemMessagePutListBody = XinliModels.UpdateSystemMessage[];
  export type SystemMessagePutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SystemMessagePutListGeneric = {
    query: SystemMessagePutListQuery;
    params: SystemMessagePutListParams;
    data: SystemMessagePutListBody;
    result: SystemMessagePutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/list
   * @summary 批量新增
   * @description
   */
  export type SystemMessagePostListQuery = Record<string, any>;
  export type SystemMessagePostListParams = Record<string, any>;
  export type SystemMessagePostListBody = XinliModels.SystemMessageDTO[];
  export type SystemMessagePostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SystemMessageDTO[];
  };
  export type SystemMessagePostListGeneric = {
    query: SystemMessagePostListQuery;
    params: SystemMessagePostListParams;
    data: SystemMessagePostListBody;
    result: SystemMessagePostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/list
   * @summary 批量删除
   * @description
   */
  export type SystemMessageDeleteListQuery = Record<string, any>;
  export type SystemMessageDeleteListParams = Record<string, any>;
  export type SystemMessageDeleteListBody = string[];
  export type SystemMessageDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SystemMessageDeleteListGeneric = {
    query: SystemMessageDeleteListQuery;
    params: SystemMessageDeleteListParams;
    data: SystemMessageDeleteListBody;
    result: SystemMessageDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/item
   * @summary 修改
   * @description
   */
  export type SystemMessagePutItemQuery = Record<string, any>;
  export type SystemMessagePutItemParams = Record<string, any>;
  export type SystemMessagePutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}" */
    messageType?: "SYSTEM";

    /** string (可选) - 消息内容 */
    content?: string;

    /** "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}" */
    status?: "SEND" | "READ" | "UNREAD";

    /** string (可选) - 消息已读时间 | 格式: date-time */
    readTime?: string;
  };
  export type SystemMessagePutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SystemMessagePutItemGeneric = {
    query: SystemMessagePutItemQuery;
    params: SystemMessagePutItemParams;
    data: SystemMessagePutItemBody;
    result: SystemMessagePutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/item
   * @summary 新增
   * @description
   */
  export type SystemMessagePostItemQuery = Record<string, any>;
  export type SystemMessagePostItemParams = Record<string, any>;
  export type SystemMessagePostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}" */
    messageType?: "SYSTEM";

    /** string (可选) - 消息内容 */
    content?: string;

    /** "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}" */
    status?: "SEND" | "READ" | "UNREAD";

    /** string (可选) - 消息已读时间 | 格式: date-time */
    readTime?: string;

    /** string (可选) */
    userName?: string;
  };
  export type SystemMessagePostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SystemMessageDTO (可选) */
    data?: XinliModels.SystemMessageDTO;
  };
  export type SystemMessagePostItemGeneric = {
    query: SystemMessagePostItemQuery;
    params: SystemMessagePostItemParams;
    data: SystemMessagePostItemBody;
    result: SystemMessagePostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/list/query
   * @summary 批量查询
   * @description
   */
  export type SystemMessagePostListQueryQuery = Record<string, any>;
  export type SystemMessagePostListQueryParams = Record<string, any>;
  export type SystemMessagePostListQueryBody = string[];
  export type SystemMessagePostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SystemMessageDTO[];
  };
  export type SystemMessagePostListQueryGeneric = {
    query: SystemMessagePostListQueryQuery;
    params: SystemMessagePostListQueryParams;
    data: SystemMessagePostListQueryBody;
    result: SystemMessagePostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type SystemMessageGetPageQuery = {
    /** XinliModels.SystemMessagePageQuery */
    params: XinliModels.SystemMessagePageQuery;
  };
  export type SystemMessageGetPageParams = Record<string, any>;
  export type SystemMessageGetPageBody = any;
  export type SystemMessageGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSystemMessageDTO (可选) */
    data?: XinliModels.BasePageSystemMessageDTO;
  };
  export type SystemMessageGetPageGeneric = {
    query: SystemMessageGetPageQuery;
    params: SystemMessageGetPageParams;
    data: SystemMessageGetPageBody;
    result: SystemMessageGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/item/{id}
   * @summary 查询
   * @description
   */
  export type SystemMessageGetItemByIdQuery = Record<string, any>;
  export type SystemMessageGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type SystemMessageGetItemByIdBody = any;
  export type SystemMessageGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SystemMessageDTO (可选) */
    data?: XinliModels.SystemMessageDTO;
  };
  export type SystemMessageGetItemByIdGeneric = {
    query: SystemMessageGetItemByIdQuery;
    params: SystemMessageGetItemByIdParams;
    data: SystemMessageGetItemByIdBody;
    result: SystemMessageGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /systemMessage/item/{id}
   * @summary 删除
   * @description
   */
  export type SystemMessageDeleteItemByIdQuery = Record<string, any>;
  export type SystemMessageDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type SystemMessageDeleteItemByIdBody = any;
  export type SystemMessageDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SystemMessageDeleteItemByIdGeneric = {
    query: SystemMessageDeleteItemByIdQuery;
    params: SystemMessageDeleteItemByIdParams;
    data: SystemMessageDeleteItemByIdBody;
    result: SystemMessageDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
