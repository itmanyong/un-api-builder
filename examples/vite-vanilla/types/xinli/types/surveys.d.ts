import { XinliModels } from "./models";
export namespace SurveysModels {
  /**
   * @url /surveys/list
   * @summary 批量修改
   * @description
   */
  export type SurveysPutListQuery = Record<string, any>;
  export type SurveysPutListParams = Record<string, any>;
  export type SurveysPutListBody = XinliModels.UpdateSurveys[];
  export type SurveysPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysPutListGeneric = {
    query: SurveysPutListQuery;
    params: SurveysPutListParams;
    data: SurveysPutListBody;
    result: SurveysPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/list
   * @summary 批量新增
   * @description
   */
  export type SurveysPostListQuery = Record<string, any>;
  export type SurveysPostListParams = Record<string, any>;
  export type SurveysPostListBody = XinliModels.SurveysDTO[];
  export type SurveysPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysDTO[];
  };
  export type SurveysPostListGeneric = {
    query: SurveysPostListQuery;
    params: SurveysPostListParams;
    data: SurveysPostListBody;
    result: SurveysPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/list
   * @summary 批量删除
   * @description
   */
  export type SurveysDeleteListQuery = Record<string, any>;
  export type SurveysDeleteListParams = Record<string, any>;
  export type SurveysDeleteListBody = string[];
  export type SurveysDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysDeleteListGeneric = {
    query: SurveysDeleteListQuery;
    params: SurveysDeleteListParams;
    data: SurveysDeleteListBody;
    result: SurveysDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/item
   * @summary 修改
   * @description
   */
  export type SurveysPutItemQuery = Record<string, any>;
  export type SurveysPutItemParams = Record<string, any>;
  export type SurveysPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 机构ID */
    institutionId?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 量表描述 */
    description?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 推荐等级 | 格式: int32 */
    isRec?: number;

    /** string (可选) - 开始日期 | 格式: date-time */
    openTime?: string;

    /** string (可选) - 截止日期 | 格式: date-time */
    closeTime?: string;

    /** "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}" */
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";

    /** string (可选) - 量表码 */
    code?: string;

    /** number (可选) - 预警分数 | 格式: int32 */
    warningScore?: number;

    /** string (可选) - 量表图片 */
    image?: string;

    /** boolean (可选) - 是否允许重复测试 */
    isRepetition?: boolean;

    /** string (可选) - 类型 */
    category?: string;

    /** boolean (可选) - 是否推荐 */
    isRecommended?: boolean;
  };
  export type SurveysPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysPutItemGeneric = {
    query: SurveysPutItemQuery;
    params: SurveysPutItemParams;
    data: SurveysPutItemBody;
    result: SurveysPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/item
   * @summary 新增
   * @description
   */
  export type SurveysPostItemQuery = Record<string, any>;
  export type SurveysPostItemParams = Record<string, any>;
  export type SurveysPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 机构ID */
    institutionId?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 量表描述 */
    description?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 推荐等级 | 格式: int32 */
    isRec?: number;

    /** string (可选) - 开始日期 | 格式: date-time */
    openTime?: string;

    /** string (可选) - 截止日期 | 格式: date-time */
    closeTime?: string;

    /** "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}" */
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";

    /** string (可选) - 量表码 */
    code?: string;

    /** number (可选) - 预警分数 | 格式: int32 */
    warningScore?: number;

    /** string (可选) - 量表图片 */
    image?: string;

    /** boolean (可选) - 是否允许重复测试 */
    isRepetition?: boolean;

    /** string (可选) */
    insName?: string;

    /** boolean (可选) - 是否推荐 */
    isRecommended?: boolean;

    /** string - 类型 */
    category: string;

    /** string (可选) - 类型名字 */
    categoryName?: string;

    /** array (可选) - 条件 */
    preconditionDtoList?: XinliModels.PreconditionDTO[];

    /** "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}" */
    joinStatus?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";

    /** number (可选) - 参与人数 | 格式: int32 */
    joinNum?: number;
  };
  export type SurveysPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysDTO (可选) */
    data?: XinliModels.SurveysDTO;
  };
  export type SurveysPostItemGeneric = {
    query: SurveysPostItemQuery;
    params: SurveysPostItemParams;
    data: SurveysPostItemBody;
    result: SurveysPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /surveys/category/item
   * @summary 修改
   * @description
   */
  export type SurveysPutCategoryItemQuery = Record<string, any>;
  export type SurveysPutCategoryItemParams = Record<string, any>;
  export type SurveysPutCategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 名字 */
    title: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";

    /** string (可选) */
    pid?: string;
  };
  export type SurveysPutCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysPutCategoryItemGeneric = {
    query: SurveysPutCategoryItemQuery;
    params: SurveysPutCategoryItemParams;
    data: SurveysPutCategoryItemBody;
    result: SurveysPutCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /surveys/category/item
   * @summary 添加
   * @description
   */
  export type SurveysPostCategoryItemQuery = Record<string, any>;
  export type SurveysPostCategoryItemParams = Record<string, any>;
  export type SurveysPostCategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 名字 */
    title: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";

    /** string (可选) */
    pid?: string;
  };
  export type SurveysPostCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysCategoryDto (可选) */
    data?: XinliModels.SurveysCategoryDto;
  };
  export type SurveysPostCategoryItemGeneric = {
    query: SurveysPostCategoryItemQuery;
    params: SurveysPostCategoryItemParams;
    data: SurveysPostCategoryItemBody;
    result: SurveysPostCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /surveys/category/item
   * @summary 批量删除
   * @description
   */
  export type SurveysDeleteCategoryItemQuery = Record<string, any>;
  export type SurveysDeleteCategoryItemParams = Record<string, any>;
  export type SurveysDeleteCategoryItemBody = string[];
  export type SurveysDeleteCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysDeleteCategoryItemGeneric = {
    query: SurveysDeleteCategoryItemQuery;
    params: SurveysDeleteCategoryItemParams;
    data: SurveysDeleteCategoryItemBody;
    result: SurveysDeleteCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/list/query
   * @summary 批量查询
   * @description
   */
  export type SurveysPostListQueryQuery = Record<string, any>;
  export type SurveysPostListQueryParams = Record<string, any>;
  export type SurveysPostListQueryBody = string[];
  export type SurveysPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysDTO[];
  };
  export type SurveysPostListQueryGeneric = {
    query: SurveysPostListQueryQuery;
    params: SurveysPostListQueryParams;
    data: SurveysPostListQueryBody;
    result: SurveysPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type SurveysGetPageQuery = {
    /** XinliModels.SurveysPageQuery */
    params: XinliModels.SurveysPageQuery;
  };
  export type SurveysGetPageParams = Record<string, any>;
  export type SurveysGetPageBody = any;
  export type SurveysGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysDTO (可选) */
    data?: XinliModels.BasePageSurveysDTO;
  };
  export type SurveysGetPageGeneric = {
    query: SurveysGetPageQuery;
    params: SurveysGetPageParams;
    data: SurveysGetPageBody;
    result: SurveysGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/item/{id}
   * @summary 查询
   * @description
   */
  export type SurveysGetItemByIdQuery = Record<string, any>;
  export type SurveysGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type SurveysGetItemByIdBody = any;
  export type SurveysGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveyDetails (可选) */
    data?: XinliModels.SurveyDetails;
  };
  export type SurveysGetItemByIdGeneric = {
    query: SurveysGetItemByIdQuery;
    params: SurveysGetItemByIdParams;
    data: SurveysGetItemByIdBody;
    result: SurveysGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /surveys/item/{id}
   * @summary 删除
   * @description
   */
  export type SurveysDeleteItemByIdQuery = Record<string, any>;
  export type SurveysDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type SurveysDeleteItemByIdBody = any;
  export type SurveysDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysDeleteItemByIdGeneric = {
    query: SurveysDeleteItemByIdQuery;
    params: SurveysDeleteItemByIdParams;
    data: SurveysDeleteItemByIdBody;
    result: SurveysDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /surveys/category/status/{id}/{status}
   * @summary 禁用/启用
   * @description
   */
  export type SurveysGetCategoryStatusByIdByStatusQuery = Record<string, any>;
  export type SurveysGetCategoryStatusByIdByStatusParams = {
    /** string */
    id: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type SurveysGetCategoryStatusByIdByStatusBody = any;
  export type SurveysGetCategoryStatusByIdByStatusResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysGetCategoryStatusByIdByStatusGeneric = {
    query: SurveysGetCategoryStatusByIdByStatusQuery;
    params: SurveysGetCategoryStatusByIdByStatusParams;
    data: SurveysGetCategoryStatusByIdByStatusBody;
    result: SurveysGetCategoryStatusByIdByStatusResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /surveys/category/page
   * @summary 分页查询
   * @description
   */
  export type SurveysGetCategoryPageQuery = {
    /** XinliModels.SurveysCategoryPageQuery */
    query: XinliModels.SurveysCategoryPageQuery;
  };
  export type SurveysGetCategoryPageParams = Record<string, any>;
  export type SurveysGetCategoryPageBody = any;
  export type SurveysGetCategoryPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysCategoryDto (可选) */
    data?: XinliModels.BasePageSurveysCategoryDto;
  };
  export type SurveysGetCategoryPageGeneric = {
    query: SurveysGetCategoryPageQuery;
    params: SurveysGetCategoryPageParams;
    data: SurveysGetCategoryPageBody;
    result: SurveysGetCategoryPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/category/getTopBranch
   * @summary 获取顶层节点数据
   * @description
   */
  export type SurveysGetCategoryGetTopBranchQuery = {
    /** XinliModels.SurveysCategoryPageQuery */
    query: XinliModels.SurveysCategoryPageQuery;
  };
  export type SurveysGetCategoryGetTopBranchParams = Record<string, any>;
  export type SurveysGetCategoryGetTopBranchBody = any;
  export type SurveysGetCategoryGetTopBranchResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysCategoryDto[];
  };
  export type SurveysGetCategoryGetTopBranchGeneric = {
    query: SurveysGetCategoryGetTopBranchQuery;
    params: SurveysGetCategoryGetTopBranchParams;
    data: SurveysGetCategoryGetTopBranchBody;
    result: SurveysGetCategoryGetTopBranchResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/category/getChildBranch
   * @summary 获取子节点数据
   * @description
   */
  export type SurveysGetCategoryGetChildBranchQuery = {
    /** string */
    id: string;
  };
  export type SurveysGetCategoryGetChildBranchParams = Record<string, any>;
  export type SurveysGetCategoryGetChildBranchBody = any;
  export type SurveysGetCategoryGetChildBranchResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysCategoryDto[];
  };
  export type SurveysGetCategoryGetChildBranchGeneric = {
    query: SurveysGetCategoryGetChildBranchQuery;
    params: SurveysGetCategoryGetChildBranchParams;
    data: SurveysGetCategoryGetChildBranchBody;
    result: SurveysGetCategoryGetChildBranchResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /surveys/category/item/{id}
   * @summary 删除
   * @description
   */
  export type SurveysDeleteCategoryItemByIdQuery = Record<string, any>;
  export type SurveysDeleteCategoryItemByIdParams = {
    /** string */
    id: string;
  };
  export type SurveysDeleteCategoryItemByIdBody = any;
  export type SurveysDeleteCategoryItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysDeleteCategoryItemByIdGeneric = {
    query: SurveysDeleteCategoryItemByIdQuery;
    params: SurveysDeleteCategoryItemByIdParams;
    data: SurveysDeleteCategoryItemByIdBody;
    result: SurveysDeleteCategoryItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
