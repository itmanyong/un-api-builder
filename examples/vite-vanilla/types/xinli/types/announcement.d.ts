import { XinliModels } from "./models";
export namespace AnnouncementModels {
  /**
   * @url /announcement/updateStatus/{id}
   * @summary 修改状态
   * @description
   */
  export type AnnouncementPutUpdateStatusByIdQuery = Record<string, any>;
  export type AnnouncementPutUpdateStatusByIdParams = {
    /** string */
    id: string;
  };
  export type AnnouncementPutUpdateStatusByIdBody = any;
  export type AnnouncementPutUpdateStatusByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnnouncementPutUpdateStatusByIdGeneric = {
    query: AnnouncementPutUpdateStatusByIdQuery;
    params: AnnouncementPutUpdateStatusByIdParams;
    data: AnnouncementPutUpdateStatusByIdBody;
    result: AnnouncementPutUpdateStatusByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /announcement/list
   * @summary 批量修改
   * @description
   */
  export type AnnouncementPutListQuery = Record<string, any>;
  export type AnnouncementPutListParams = Record<string, any>;
  export type AnnouncementPutListBody = XinliModels.UpdateAnnouncement[];
  export type AnnouncementPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnnouncementPutListGeneric = {
    query: AnnouncementPutListQuery;
    params: AnnouncementPutListParams;
    data: AnnouncementPutListBody;
    result: AnnouncementPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/list
   * @summary 批量新增
   * @description
   */
  export type AnnouncementPostListQuery = Record<string, any>;
  export type AnnouncementPostListParams = Record<string, any>;
  export type AnnouncementPostListBody = XinliModels.AnnouncementDTO[];
  export type AnnouncementPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnnouncementDTO[];
  };
  export type AnnouncementPostListGeneric = {
    query: AnnouncementPostListQuery;
    params: AnnouncementPostListParams;
    data: AnnouncementPostListBody;
    result: AnnouncementPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/list
   * @summary 批量删除
   * @description
   */
  export type AnnouncementDeleteListQuery = Record<string, any>;
  export type AnnouncementDeleteListParams = Record<string, any>;
  export type AnnouncementDeleteListBody = string[];
  export type AnnouncementDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnnouncementDeleteListGeneric = {
    query: AnnouncementDeleteListQuery;
    params: AnnouncementDeleteListParams;
    data: AnnouncementDeleteListBody;
    result: AnnouncementDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/item
   * @summary 修改
   * @description
   */
  export type AnnouncementPutItemQuery = Record<string, any>;
  export type AnnouncementPutItemParams = Record<string, any>;
  export type AnnouncementPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 公告标题 */
    title?: string;

    /** string (可选) - 公告内容（富文本） */
    content?: string;

    /** boolean (可选) - 是否开启，1为开启，0为关闭 */
    isActive?: boolean;

    /** string (可选) - 公告有效期的开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 公告有效期的结束时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 置顶优先级 | 格式: int32 */
    isTop?: number;

    /** string (可选) - 公告分类 */
    type?: string;

    /** string (可选) - 公告图片 */
    image?: string;

    /** string (可选) - 副标题 */
    subhead?: string;

    /** string (可选) - 附件 */
    annex?: string;
  };
  export type AnnouncementPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnnouncementPutItemGeneric = {
    query: AnnouncementPutItemQuery;
    params: AnnouncementPutItemParams;
    data: AnnouncementPutItemBody;
    result: AnnouncementPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/item
   * @summary 新增
   * @description
   */
  export type AnnouncementPostItemQuery = Record<string, any>;
  export type AnnouncementPostItemParams = Record<string, any>;
  export type AnnouncementPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 公告标题 */
    title?: string;

    /** string (可选) - 公告内容（富文本） */
    content?: string;

    /** boolean (可选) - 是否开启，1为开启，0为关闭 */
    isActive?: boolean;

    /** string (可选) - 公告有效期的开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 公告有效期的结束时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 置顶优先级 | 格式: int32 */
    isTop?: number;

    /** string (可选) - 公告分类 */
    type?: string;

    /** string (可选) - 公告图片 */
    image?: string;

    /** string (可选) - 副标题 */
    subhead?: string;

    /** string (可选) - 附件 */
    annex?: string;
  };
  export type AnnouncementPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnnouncementDTO (可选) */
    data?: XinliModels.AnnouncementDTO;
  };
  export type AnnouncementPostItemGeneric = {
    query: AnnouncementPostItemQuery;
    params: AnnouncementPostItemParams;
    data: AnnouncementPostItemBody;
    result: AnnouncementPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/list/query
   * @summary 批量查询
   * @description
   */
  export type AnnouncementPostListQueryQuery = Record<string, any>;
  export type AnnouncementPostListQueryParams = Record<string, any>;
  export type AnnouncementPostListQueryBody = string[];
  export type AnnouncementPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnnouncementDTO[];
  };
  export type AnnouncementPostListQueryGeneric = {
    query: AnnouncementPostListQueryQuery;
    params: AnnouncementPostListQueryParams;
    data: AnnouncementPostListQueryBody;
    result: AnnouncementPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type AnnouncementGetPageQuery = {
    /** XinliModels.AnnouncementPageQuery */
    params: XinliModels.AnnouncementPageQuery;
  };
  export type AnnouncementGetPageParams = Record<string, any>;
  export type AnnouncementGetPageBody = any;
  export type AnnouncementGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnnouncementDTO (可选) */
    data?: XinliModels.BasePageAnnouncementDTO;
  };
  export type AnnouncementGetPageGeneric = {
    query: AnnouncementGetPageQuery;
    params: AnnouncementGetPageParams;
    data: AnnouncementGetPageBody;
    result: AnnouncementGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /announcement/item/{id}
   * @summary 查询
   * @description
   */
  export type AnnouncementGetItemByIdQuery = Record<string, any>;
  export type AnnouncementGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnnouncementGetItemByIdBody = any;
  export type AnnouncementGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnnouncementDTO (可选) */
    data?: XinliModels.AnnouncementDTO;
  };
  export type AnnouncementGetItemByIdGeneric = {
    query: AnnouncementGetItemByIdQuery;
    params: AnnouncementGetItemByIdParams;
    data: AnnouncementGetItemByIdBody;
    result: AnnouncementGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /announcement/item/{id}
   * @summary 删除
   * @description
   */
  export type AnnouncementDeleteItemByIdQuery = Record<string, any>;
  export type AnnouncementDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type AnnouncementDeleteItemByIdBody = any;
  export type AnnouncementDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type AnnouncementDeleteItemByIdGeneric = {
    query: AnnouncementDeleteItemByIdQuery;
    params: AnnouncementDeleteItemByIdParams;
    data: AnnouncementDeleteItemByIdBody;
    result: AnnouncementDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
