import { YusuanModels } from "./models";
export namespace FinanceModels {
  /**
   * @url /finance/{id}
   * @summary 修改资金批次
   * @description
   */
  export type FinancePutByIdQuery = Record<string, any>;
  export type FinancePutByIdParams = {
    /** string */
    id: string;
  };
  export type FinancePutByIdBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 资金批次编码 */
    code?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** number (可选) - 资金批次年度 | 格式: int32 */
    year?: number;

    /** string (可选) - 资金批次截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 资金批次备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type FinancePutByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutByIdGeneric = {
    query: FinancePutByIdQuery;
    params: FinancePutByIdParams;
    data: FinancePutByIdBody;
    result: FinancePutByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /finance/status
   * @summary 批量修改状态
   * @description
   */
  export type FinancePutStatusQuery = Record<string, any>;
  export type FinancePutStatusParams = Record<string, any>;
  export type FinancePutStatusBody = {
    /** array - 主键ID列表 */
    ids: string[];

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type FinancePutStatusResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutStatusGeneric = {
    query: FinancePutStatusQuery;
    params: FinancePutStatusParams;
    data: FinancePutStatusBody;
    result: FinancePutStatusResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /finance
   * @summary 新增资金批次
   * @description
   */
  export type FinancePostQuery = Record<string, any>;
  export type FinancePostParams = Record<string, any>;
  export type FinancePostBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 资金批次编码 */
    code?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** number (可选) - 资金批次年度 | 格式: int32 */
    year?: number;

    /** string (可选) - 资金批次截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 资金批次备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type FinancePostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceInfoDTO (可选) */
    data?: YusuanModels.FinanceInfoDTO;
  };
  export type FinancePostGeneric = {
    query: FinancePostQuery;
    params: FinancePostParams;
    data: FinancePostBody;
    result: FinancePostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type FinancePostListQuery = Record<string, any>;
  export type FinancePostListParams = Record<string, any>;
  export type FinancePostListBody = string[];
  export type FinancePostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceInfoDTO[];
  };
  export type FinancePostListGeneric = {
    query: FinancePostListQuery;
    params: FinancePostListParams;
    data: FinancePostListBody;
    result: FinancePostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/page
   * @summary 分页查询
   * @description
   */
  export type FinanceGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** number (可选) - 资金批次最小年度 | 格式: int32 */
    minYear?: number;

    /** number (可选) - 资金批次最大年度 | 格式: int32 */
    maxYear?: number;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };
  export type FinanceGetPageParams = Record<string, any>;
  export type FinanceGetPageBody = any;
  export type FinanceGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceInfoDTO (可选) */
    data?: YusuanModels.BasePageFinanceInfoDTO;
  };
  export type FinanceGetPageGeneric = {
    query: FinanceGetPageQuery;
    params: FinanceGetPageParams;
    data: FinanceGetPageBody;
    result: FinanceGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/department/{id}
   * @summary 修改分配给部门的资金
   * @description
   */
  export type FinancePutDepartmentByIdQuery = Record<string, any>;
  export type FinancePutDepartmentByIdParams = {
    /** string */
    id: string;
  };
  export type FinancePutDepartmentByIdBody = {
    /** string (可选) */
    id?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type FinancePutDepartmentByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutDepartmentByIdGeneric = {
    query: FinancePutDepartmentByIdQuery;
    params: FinancePutDepartmentByIdParams;
    data: FinancePutDepartmentByIdBody;
    result: FinancePutDepartmentByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /finance/department/status
   * @summary 批量修改状态
   * @description
   */
  export type FinancePutDepartmentStatusQuery = Record<string, any>;
  export type FinancePutDepartmentStatusParams = Record<string, any>;
  export type FinancePutDepartmentStatusBody = {
    /** array - 主键ID列表 */
    ids: string[];

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type FinancePutDepartmentStatusResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutDepartmentStatusGeneric = {
    query: FinancePutDepartmentStatusQuery;
    params: FinancePutDepartmentStatusParams;
    data: FinancePutDepartmentStatusBody;
    result: FinancePutDepartmentStatusResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /finance/department
   * @summary 新增资金分配给部门（从批次上分配给顶级部门）
   * @description
   */
  export type FinancePostDepartmentQuery = Record<string, any>;
  export type FinancePostDepartmentParams = Record<string, any>;
  export type FinancePostDepartmentBody = {
    /** number (可选) - 资金总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 资金id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;
  };
  export type FinancePostDepartmentResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceInfoDTO (可选) */
    data?: YusuanModels.FinanceInfoDTO;
  };
  export type FinancePostDepartmentGeneric = {
    query: FinancePostDepartmentQuery;
    params: FinancePostDepartmentParams;
    data: FinancePostDepartmentBody;
    result: FinancePostDepartmentResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/department/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type FinancePostDepartmentListQuery = Record<string, any>;
  export type FinancePostDepartmentListParams = Record<string, any>;
  export type FinancePostDepartmentListBody = string[];
  export type FinancePostDepartmentListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceAllocationDepartmentDTO[];
  };
  export type FinancePostDepartmentListGeneric = {
    query: FinancePostDepartmentListQuery;
    params: FinancePostDepartmentListParams;
    data: FinancePostDepartmentListBody;
    result: FinancePostDepartmentListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/department/child
   * @summary 新增资金分配给部门（分配给子部门）
   * @description
   */
  export type FinancePostDepartmentChildQuery = Record<string, any>;
  export type FinancePostDepartmentChildParams = Record<string, any>;
  export type FinancePostDepartmentChildBody = {
    /** number (可选) - 资金总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 资金id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;
  };
  export type FinancePostDepartmentChildResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceInfoDTO (可选) */
    data?: YusuanModels.FinanceInfoDTO;
  };
  export type FinancePostDepartmentChildGeneric = {
    query: FinancePostDepartmentChildQuery;
    params: FinancePostDepartmentChildParams;
    data: FinancePostDepartmentChildBody;
    result: FinancePostDepartmentChildResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/department/page
   * @summary 分页查询
   * @description
   */
  export type FinanceGetDepartmentPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 资金批次年度 | 格式: int32 */
    financeYear?: number;
  };
  export type FinanceGetDepartmentPageParams = Record<string, any>;
  export type FinanceGetDepartmentPageBody = any;
  export type FinanceGetDepartmentPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceAllocationDepartmentDTO (可选) */
    data?: YusuanModels.BasePageFinanceAllocationDepartmentDTO;
  };
  export type FinanceGetDepartmentPageGeneric = {
    query: FinanceGetDepartmentPageQuery;
    params: FinanceGetDepartmentPageParams;
    data: FinanceGetDepartmentPageBody;
    result: FinanceGetDepartmentPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/category/{id}
   * @summary 修改部门分配资金类目
   * @description
   */
  export type FinancePutCategoryByIdQuery = Record<string, any>;
  export type FinancePutCategoryByIdParams = {
    /** string */
    id: string;
  };
  export type FinancePutCategoryByIdBody = {
    /** string (可选) */
    id?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type FinancePutCategoryByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutCategoryByIdGeneric = {
    query: FinancePutCategoryByIdQuery;
    params: FinancePutCategoryByIdParams;
    data: FinancePutCategoryByIdBody;
    result: FinancePutCategoryByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /finance/category/status
   * @summary 批量修改状态
   * @description
   */
  export type FinancePutCategoryStatusQuery = Record<string, any>;
  export type FinancePutCategoryStatusParams = Record<string, any>;
  export type FinancePutCategoryStatusBody = {
    /** array - 主键ID列表 */
    ids: string[];

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type FinancePutCategoryStatusResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type FinancePutCategoryStatusGeneric = {
    query: FinancePutCategoryStatusQuery;
    params: FinancePutCategoryStatusParams;
    data: FinancePutCategoryStatusBody;
    result: FinancePutCategoryStatusResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /finance/category
   * @summary 新增部门下资金分配给类目
   * @description
   */
  export type FinancePostCategoryQuery = Record<string, any>;
  export type FinancePostCategoryParams = Record<string, any>;
  export type FinancePostCategoryBody = {
    /** number (可选) - 资金总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 资金类目id */
    financeCategoryId?: string;

    /** string (可选) - 资金分配部门id */
    allocationDepartmentId?: string;
  };
  export type FinancePostCategoryResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceAllocationCategoryDTO (可选) */
    data?: YusuanModels.FinanceAllocationCategoryDTO;
  };
  export type FinancePostCategoryGeneric = {
    query: FinancePostCategoryQuery;
    params: FinancePostCategoryParams;
    data: FinancePostCategoryBody;
    result: FinancePostCategoryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/category/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type FinancePostCategoryListQuery = Record<string, any>;
  export type FinancePostCategoryListParams = Record<string, any>;
  export type FinancePostCategoryListBody = string[];
  export type FinancePostCategoryListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceAllocationCategoryDTO[];
  };
  export type FinancePostCategoryListGeneric = {
    query: FinancePostCategoryListQuery;
    params: FinancePostCategoryListParams;
    data: FinancePostCategoryListBody;
    result: FinancePostCategoryListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/category/page
   * @summary 分页查询
   * @description
   */
  export type FinanceGetCategoryPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金类目id */
    financeCategoryId?: string;

    /** string (可选) - 资金分配部门id */
    allocationDepartmentId?: string;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 资金批次年度 | 格式: int32 */
    financeYear?: number;
  };
  export type FinanceGetCategoryPageParams = Record<string, any>;
  export type FinanceGetCategoryPageBody = any;
  export type FinanceGetCategoryPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceAllocationCategoryDTO (可选) */
    data?: YusuanModels.BasePageFinanceAllocationCategoryDTO;
  };
  export type FinanceGetCategoryPageGeneric = {
    query: FinanceGetCategoryPageQuery;
    params: FinanceGetCategoryPageParams;
    data: FinanceGetCategoryPageBody;
    result: FinanceGetCategoryPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /finance/category/project/{allocationCategoryId}
   * @summary 批量关联项目类目id
   * @description
   */
  export type FinancePostCategoryProjectByAllocationCategoryIdQuery = Record<string, any>;
  export type FinancePostCategoryProjectByAllocationCategoryIdParams = {
    /** string */
    allocationCategoryId: string;
  };
  export type FinancePostCategoryProjectByAllocationCategoryIdBody = YusuanModels.AddAllocationProjectCategoryDTO[];
  export type FinancePostCategoryProjectByAllocationCategoryIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** object (可选) - 返回数据 */
    data?: Record<string, any>;
  };
  export type FinancePostCategoryProjectByAllocationCategoryIdGeneric = {
    query: FinancePostCategoryProjectByAllocationCategoryIdQuery;
    params: FinancePostCategoryProjectByAllocationCategoryIdParams;
    data: FinancePostCategoryProjectByAllocationCategoryIdBody;
    result: FinancePostCategoryProjectByAllocationCategoryIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /finance/category/project/page
   * @summary 分页查询
   * @description
   */
  export type FinanceGetCategoryProjectPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string - 分配资金类目的关联id */
    allocationCategoryId: string;

    /** string (可选) - 项目类目id */
    projectCategoryId?: string;
  };
  export type FinanceGetCategoryProjectPageParams = Record<string, any>;
  export type FinanceGetCategoryProjectPageBody = any;
  export type FinanceGetCategoryProjectPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageAllocationProjectCategoryDTO (可选) */
    data?: YusuanModels.BasePageAllocationProjectCategoryDTO;
  };
  export type FinanceGetCategoryProjectPageGeneric = {
    query: FinanceGetCategoryProjectPageQuery;
    params: FinanceGetCategoryProjectPageParams;
    data: FinanceGetCategoryProjectPageBody;
    result: FinanceGetCategoryProjectPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };
}
