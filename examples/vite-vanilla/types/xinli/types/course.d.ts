import { XinliModels } from "./models";
export namespace CourseModels {
  /**
   * @url /course/type/item
   * @summary 修改课程
   * @description
   */
  export type CoursePutTypeItemQuery = Record<string, any>;
  export type CoursePutTypeItemParams = Record<string, any>;
  export type CoursePutTypeItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) */
    pid?: string;
  };
  export type CoursePutTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutTypeItemGeneric = {
    query: CoursePutTypeItemQuery;
    params: CoursePutTypeItemParams;
    data: CoursePutTypeItemBody;
    result: CoursePutTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/type/item
   * @summary 添加课程分类
   * @description
   */
  export type CoursePostTypeItemQuery = Record<string, any>;
  export type CoursePostTypeItemParams = Record<string, any>;
  export type CoursePostTypeItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) */
    pid?: string;
  };
  export type CoursePostTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseTypeDto (可选) */
    data?: XinliModels.CourseTypeDto;
  };
  export type CoursePostTypeItemGeneric = {
    query: CoursePostTypeItemQuery;
    params: CoursePostTypeItemParams;
    data: CoursePostTypeItemBody;
    result: CoursePostTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/type/item
   * @summary 批量删除课程
   * @description
   */
  export type CourseDeleteTypeItemQuery = Record<string, any>;
  export type CourseDeleteTypeItemParams = Record<string, any>;
  export type CourseDeleteTypeItemBody = string[];
  export type CourseDeleteTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteTypeItemGeneric = {
    query: CourseDeleteTypeItemQuery;
    params: CourseDeleteTypeItemParams;
    data: CourseDeleteTypeItemBody;
    result: CourseDeleteTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/resources/item
   * @summary 修改
   * @description
   */
  export type CoursePutResourcesItemQuery = Record<string, any>;
  export type CoursePutResourcesItemParams = Record<string, any>;
  export type CoursePutResourcesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程id */
    courseId: string;

    /** string - 课时标题 */
    title: string;

    /** string (可选) - 课时介绍 */
    description?: string;

    /** number (可选) - 时长 | 格式: double */
    duration?: number;

    /** string (可选) - 附件 */
    annex?: string;

    /** string - 资源地址 */
    resourceUrl: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** boolean - 是否开放 */
    isOpen: boolean;
  };
  export type CoursePutResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutResourcesItemGeneric = {
    query: CoursePutResourcesItemQuery;
    params: CoursePutResourcesItemParams;
    data: CoursePutResourcesItemBody;
    result: CoursePutResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/resources/item
   * @summary 添加
   * @description
   */
  export type CoursePostResourcesItemQuery = Record<string, any>;
  export type CoursePostResourcesItemParams = Record<string, any>;
  export type CoursePostResourcesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程id */
    courseId: string;

    /** string - 课时标题 */
    title: string;

    /** string (可选) - 课时介绍 */
    description?: string;

    /** number (可选) - 时长 | 格式: double */
    duration?: number;

    /** string (可选) - 附件 */
    annex?: string;

    /** string - 资源地址 */
    resourceUrl: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** boolean - 是否开放 */
    isOpen: boolean;
  };
  export type CoursePostResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseResourcesDto (可选) */
    data?: XinliModels.CourseResourcesDto;
  };
  export type CoursePostResourcesItemGeneric = {
    query: CoursePostResourcesItemQuery;
    params: CoursePostResourcesItemParams;
    data: CoursePostResourcesItemBody;
    result: CoursePostResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/resources/item
   * @summary 批量删除
   * @description
   */
  export type CourseDeleteResourcesItemQuery = Record<string, any>;
  export type CourseDeleteResourcesItemParams = Record<string, any>;
  export type CourseDeleteResourcesItemBody = string[];
  export type CourseDeleteResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteResourcesItemGeneric = {
    query: CourseDeleteResourcesItemQuery;
    params: CourseDeleteResourcesItemParams;
    data: CourseDeleteResourcesItemBody;
    result: CourseDeleteResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/item
   * @summary 修改课程
   * @description
   */
  export type CoursePutItemQuery = Record<string, any>;
  export type CoursePutItemParams = Record<string, any>;
  export type CoursePutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程标题 */
    title: string;

    /** string (可选) - 课程说明 */
    description?: string;

    /** number - 价格 */
    price: number;

    /** boolean - 是否启用 */
    isActive: boolean;

    /** boolean - 是否推荐 */
    isRec: boolean;

    /** boolean - 是否置顶 */
    isTop: boolean;

    /** string (可选) - 开售时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 截至时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 课程销量 | 格式: int32 */
    salesCount?: number;

    /** number (可选) - 课程销售额 */
    salesAmount?: number;

    /** string - 课程类型 */
    type: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) - 封面 */
    coverImg?: string;
  };
  export type CoursePutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutItemGeneric = {
    query: CoursePutItemQuery;
    params: CoursePutItemParams;
    data: CoursePutItemBody;
    result: CoursePutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/item
   * @summary 添加课程
   * @description
   */
  export type CoursePostItemQuery = Record<string, any>;
  export type CoursePostItemParams = Record<string, any>;
  export type CoursePostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程标题 */
    title: string;

    /** string (可选) - 课程说明 */
    description?: string;

    /** number - 价格 */
    price: number;

    /** boolean - 是否启用 */
    isActive: boolean;

    /** boolean - 是否推荐 */
    isRec: boolean;

    /** boolean - 是否置顶 */
    isTop: boolean;

    /** string (可选) - 开售时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 截至时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 课程销量 | 格式: int32 */
    salesCount?: number;

    /** number (可选) - 课程销售额 */
    salesAmount?: number;

    /** string - 课程类型 */
    type: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) - 封面 */
    coverImg?: string;
  };
  export type CoursePostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseDto (可选) */
    data?: XinliModels.CourseDto;
  };
  export type CoursePostItemGeneric = {
    query: CoursePostItemQuery;
    params: CoursePostItemParams;
    data: CoursePostItemBody;
    result: CoursePostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /course/item
   * @summary 批量删除课程
   * @description
   */
  export type CourseDeleteItemQuery = Record<string, any>;
  export type CourseDeleteItemParams = Record<string, any>;
  export type CourseDeleteItemBody = string[];
  export type CourseDeleteItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteItemGeneric = {
    query: CourseDeleteItemQuery;
    params: CourseDeleteItemParams;
    data: CourseDeleteItemBody;
    result: CourseDeleteItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/type/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetTypePageQuery = {
    /** XinliModels.CourseTypePageQuery */
    query: XinliModels.CourseTypePageQuery;
  };
  export type CourseGetTypePageParams = Record<string, any>;
  export type CourseGetTypePageBody = any;
  export type CourseGetTypePageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseTypeDto (可选) */
    data?: XinliModels.BasePageCourseTypeDto;
  };
  export type CourseGetTypePageGeneric = {
    query: CourseGetTypePageQuery;
    params: CourseGetTypePageParams;
    data: CourseGetTypePageBody;
    result: CourseGetTypePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/resources/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetResourcesPageQuery = {
    /** XinliModels.CourseResourcesPageQuery */
    query: XinliModels.CourseResourcesPageQuery;
  };
  export type CourseGetResourcesPageParams = Record<string, any>;
  export type CourseGetResourcesPageBody = any;
  export type CourseGetResourcesPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseResourcesDto (可选) */
    data?: XinliModels.BasePageCourseResourcesDto;
  };
  export type CourseGetResourcesPageGeneric = {
    query: CourseGetResourcesPageQuery;
    params: CourseGetResourcesPageParams;
    data: CourseGetResourcesPageBody;
    result: CourseGetResourcesPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetPageQuery = {
    /** XinliModels.CoursePageQuery */
    query: XinliModels.CoursePageQuery;
  };
  export type CourseGetPageParams = Record<string, any>;
  export type CourseGetPageBody = any;
  export type CourseGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseDto (可选) */
    data?: XinliModels.BasePageCourseDto;
  };
  export type CourseGetPageGeneric = {
    query: CourseGetPageQuery;
    params: CourseGetPageParams;
    data: CourseGetPageBody;
    result: CourseGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /course/type/item/{id}
   * @summary 删除课程
   * @description
   */
  export type CourseDeleteTypeItemByIdQuery = Record<string, any>;
  export type CourseDeleteTypeItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteTypeItemByIdBody = any;
  export type CourseDeleteTypeItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteTypeItemByIdGeneric = {
    query: CourseDeleteTypeItemByIdQuery;
    params: CourseDeleteTypeItemByIdParams;
    data: CourseDeleteTypeItemByIdBody;
    result: CourseDeleteTypeItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /course/resources/item/{id}
   * @summary 删除
   * @description
   */
  export type CourseDeleteResourcesItemByIdQuery = Record<string, any>;
  export type CourseDeleteResourcesItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteResourcesItemByIdBody = any;
  export type CourseDeleteResourcesItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteResourcesItemByIdGeneric = {
    query: CourseDeleteResourcesItemByIdQuery;
    params: CourseDeleteResourcesItemByIdParams;
    data: CourseDeleteResourcesItemByIdBody;
    result: CourseDeleteResourcesItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /course/item/{id}
   * @summary 删除课程
   * @description
   */
  export type CourseDeleteItemByIdQuery = Record<string, any>;
  export type CourseDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteItemByIdBody = any;
  export type CourseDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteItemByIdGeneric = {
    query: CourseDeleteItemByIdQuery;
    params: CourseDeleteItemByIdParams;
    data: CourseDeleteItemByIdBody;
    result: CourseDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
