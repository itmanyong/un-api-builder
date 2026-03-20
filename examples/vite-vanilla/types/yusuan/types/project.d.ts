import { YusuanModels } from "./models";
export namespace ProjectModels {
  /**
   * @url /project
   * @summary 修改项目
   * @description
   */
  export type ProjectPutQuery = Record<string, any>;
  export type ProjectPutParams = Record<string, any>;
  export type ProjectPutBody = {
    /** string - id */
    id: string;

    /** string - 标题 */
    title: string;

    /** string - 项目编号 */
    code: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number - 总金额 */
    total: number;
  };
  export type ProjectPutResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectPutGeneric = {
    query: ProjectPutQuery;
    params: ProjectPutParams;
    data: ProjectPutBody;
    result: ProjectPutResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project
   * @summary 新增项目
   * @description
   */
  export type ProjectPostQuery = Record<string, any>;
  export type ProjectPostParams = Record<string, any>;
  export type ProjectPostBody = {
    /** string - 部门id */
    departmentId: string;

    /** string - 资金批次id */
    financeId: string;

    /** string - 标题 */
    title: string;

    /** string - 项目编号 */
    code: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number - 总金额 */
    total: number;

    /** string - 父级id(顶级默认-1) */
    parentId: string;

    /** string - 项目类目id */
    categoryId: string;

    /** string - 分配资金类目id（从哪笔分配记录上面扣） */
    allocationCategoryId: string;
  };
  export type ProjectPostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectInfoDTO (可选) */
    data?: YusuanModels.ProjectInfoDTO;
  };
  export type ProjectPostGeneric = {
    query: ProjectPostQuery;
    params: ProjectPostParams;
    data: ProjectPostBody;
    result: ProjectPostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ProjectPostListQuery = Record<string, any>;
  export type ProjectPostListParams = Record<string, any>;
  export type ProjectPostListBody = string[];
  export type ProjectPostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectInfoDTO[];
  };
  export type ProjectPostListGeneric = {
    query: ProjectPostListQuery;
    params: ProjectPostListParams;
    data: ProjectPostListBody;
    result: ProjectPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /project/page
   * @summary 分页查询
   * @description
   */
  export type ProjectGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 父级项目ID */
    parentId?: string;

    /** string (可选) - 创建人id */
    creator?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 项目状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    status?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** number (可选) - 总金额大于 */
    minTotal?: number;

    /** number (可选) - 总金额小于 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** number (可选) - 项目进度大于 */
    minProgress?: number;

    /** number (可选) - 项目进度小于 */
    maxProgress?: number;

    /** string (可选) - 项目类目id */
    categoryId?: string;

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;
  };
  export type ProjectGetPageParams = Record<string, any>;
  export type ProjectGetPageBody = any;
  export type ProjectGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectInfoDTO (可选) */
    data?: YusuanModels.BasePageProjectInfoDTO;
  };
  export type ProjectGetPageGeneric = {
    query: ProjectGetPageQuery;
    params: ProjectGetPageParams;
    data: ProjectGetPageBody;
    result: ProjectGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /project/statusChange
   * @summary 修改项目状态
   * @description
   */
  export type ProjectPutStatusChangeQuery = Record<string, any>;
  export type ProjectPutStatusChangeParams = Record<string, any>;
  export type ProjectPutStatusChangeBody = {
    /** string - 主键ID */
    id: string;

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    changeTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type ProjectPutStatusChangeResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectPutStatusChangeGeneric = {
    query: ProjectPutStatusChangeQuery;
    params: ProjectPutStatusChangeParams;
    data: ProjectPutStatusChangeBody;
    result: ProjectPutStatusChangeResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/statusChange
   * @summary 新增项目状态
   * @description
   */
  export type ProjectPostStatusChangeQuery = Record<string, any>;
  export type ProjectPostStatusChangeParams = Record<string, any>;
  export type ProjectPostStatusChangeBody = {
    /** string - 项目ID */
    projectId: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" - 变更状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    status: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    changeTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type ProjectPostStatusChangeResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectStatusChangeDTO (可选) */
    data?: YusuanModels.ProjectStatusChangeDTO;
  };
  export type ProjectPostStatusChangeGeneric = {
    query: ProjectPostStatusChangeQuery;
    params: ProjectPostStatusChangeParams;
    data: ProjectPostStatusChangeBody;
    result: ProjectPostStatusChangeResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/statusChange/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ProjectPostStatusChangeListQuery = Record<string, any>;
  export type ProjectPostStatusChangeListParams = Record<string, any>;
  export type ProjectPostStatusChangeListBody = string[];
  export type ProjectPostStatusChangeListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectStatusChangeDTO[];
  };
  export type ProjectPostStatusChangeListGeneric = {
    query: ProjectPostStatusChangeListQuery;
    params: ProjectPostStatusChangeListParams;
    data: ProjectPostStatusChangeListBody;
    result: ProjectPostStatusChangeListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /project/statusChange/page
   * @summary 分页查询
   * @description
   */
  export type ProjectGetStatusChangePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更前状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更后状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    startChangeTime?: string;

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    endChangeTime?: string;
  };
  export type ProjectGetStatusChangePageParams = Record<string, any>;
  export type ProjectGetStatusChangePageBody = any;
  export type ProjectGetStatusChangePageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectStatusChangeDTO (可选) */
    data?: YusuanModels.BasePageProjectStatusChangeDTO;
  };
  export type ProjectGetStatusChangePageGeneric = {
    query: ProjectGetStatusChangePageQuery;
    params: ProjectGetStatusChangePageParams;
    data: ProjectGetStatusChangePageBody;
    result: ProjectGetStatusChangePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /project/lifeCycle
   * @summary 修改任务
   * @description
   */
  export type ProjectPutLifeCycleQuery = Record<string, any>;
  export type ProjectPutLifeCycleParams = Record<string, any>;
  export type ProjectPutLifeCycleBody = {
    /** string - ID */
    id: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type ProjectPutLifeCycleResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectPutLifeCycleGeneric = {
    query: ProjectPutLifeCycleQuery;
    params: ProjectPutLifeCycleParams;
    data: ProjectPutLifeCycleBody;
    result: ProjectPutLifeCycleResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/lifeCycle
   * @summary 新增任务
   * @description
   */
  export type ProjectPostLifeCycleQuery = Record<string, any>;
  export type ProjectPostLifeCycleParams = Record<string, any>;
  export type ProjectPostLifeCycleBody = {
    /** string - 标题 */
    title: string;

    /** string - 父级ID(顶级默认-1) */
    parentId: string;

    /** string - 项目ID */
    projectId: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type ProjectPostLifeCycleResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectLifeCycleDTO (可选) */
    data?: YusuanModels.ProjectLifeCycleDTO;
  };
  export type ProjectPostLifeCycleGeneric = {
    query: ProjectPostLifeCycleQuery;
    params: ProjectPostLifeCycleParams;
    data: ProjectPostLifeCycleBody;
    result: ProjectPostLifeCycleResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/lifeCycle/status
   * @summary 修改状态
   * @description
   */
  export type ProjectPutLifeCycleStatusQuery = Record<string, any>;
  export type ProjectPutLifeCycleStatusParams = Record<string, any>;
  export type ProjectPutLifeCycleStatusBody = {
    /** string - ID */
    id: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}" */
    status: "WKS" | "ZXZ" | "YWC";
  };
  export type ProjectPutLifeCycleStatusResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectPutLifeCycleStatusGeneric = {
    query: ProjectPutLifeCycleStatusQuery;
    params: ProjectPutLifeCycleStatusParams;
    data: ProjectPutLifeCycleStatusBody;
    result: ProjectPutLifeCycleStatusResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /project/lifeCycle/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ProjectPostLifeCycleListQuery = Record<string, any>;
  export type ProjectPostLifeCycleListParams = Record<string, any>;
  export type ProjectPostLifeCycleListBody = string[];
  export type ProjectPostLifeCycleListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectLifeCycleDTO[];
  };
  export type ProjectPostLifeCycleListGeneric = {
    query: ProjectPostLifeCycleListQuery;
    params: ProjectPostLifeCycleListParams;
    data: ProjectPostLifeCycleListBody;
    result: ProjectPostLifeCycleListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /project/lifeCycle/page
   * @summary 分页查询
   * @description
   */
  export type ProjectGetLifeCyclePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" (可选) - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}" */
    status?: "WKS" | "ZXZ" | "YWC";

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;
  };
  export type ProjectGetLifeCyclePageParams = Record<string, any>;
  export type ProjectGetLifeCyclePageBody = any;
  export type ProjectGetLifeCyclePageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectLifeCycleDTO (可选) */
    data?: YusuanModels.BasePageProjectLifeCycleDTO;
  };
  export type ProjectGetLifeCyclePageGeneric = {
    query: ProjectGetLifeCyclePageQuery;
    params: ProjectGetLifeCyclePageParams;
    data: ProjectGetLifeCyclePageBody;
    result: ProjectGetLifeCyclePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };
}
