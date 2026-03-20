import { YusuanModels } from "./models";
export namespace ProjectCategoryModels {
  /**
   * @url /projectCategory/{id}
   * @summary 修改类目数据
   * @description
   */
  export type ProjectCategoryPutByIdQuery = Record<string, any>;
  export type ProjectCategoryPutByIdParams = {
    /** string */
    id: string;
  };
  export type ProjectCategoryPutByIdBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 编码 */
    code?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** number (可选) - 排序号 | 格式: int32 */
    sort?: number;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };
  export type ProjectCategoryPutByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectCategoryPutByIdGeneric = {
    query: ProjectCategoryPutByIdQuery;
    params: ProjectCategoryPutByIdParams;
    data: ProjectCategoryPutByIdBody;
    result: ProjectCategoryPutByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /projectCategory/status
   * @summary 批量修改状态
   * @description
   */
  export type ProjectCategoryPutStatusQuery = Record<string, any>;
  export type ProjectCategoryPutStatusParams = Record<string, any>;
  export type ProjectCategoryPutStatusBody = {
    /** array - 主键ID列表 */
    ids: string[];

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type ProjectCategoryPutStatusResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ProjectCategoryPutStatusGeneric = {
    query: ProjectCategoryPutStatusQuery;
    params: ProjectCategoryPutStatusParams;
    data: ProjectCategoryPutStatusBody;
    result: ProjectCategoryPutStatusResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /projectCategory
   * @summary 新增类目数据
   * @description
   */
  export type ProjectCategoryPostQuery = Record<string, any>;
  export type ProjectCategoryPostParams = Record<string, any>;
  export type ProjectCategoryPostBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 编码 */
    code?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** number (可选) - 排序号 | 格式: int32 */
    sort?: number;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };
  export type ProjectCategoryPostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectCategoryDTO (可选) */
    data?: YusuanModels.ProjectCategoryDTO;
  };
  export type ProjectCategoryPostGeneric = {
    query: ProjectCategoryPostQuery;
    params: ProjectCategoryPostParams;
    data: ProjectCategoryPostBody;
    result: ProjectCategoryPostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /projectCategory/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ProjectCategoryPostListQuery = Record<string, any>;
  export type ProjectCategoryPostListParams = Record<string, any>;
  export type ProjectCategoryPostListBody = string[];
  export type ProjectCategoryPostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectCategoryDTO[];
  };
  export type ProjectCategoryPostListGeneric = {
    query: ProjectCategoryPostListQuery;
    params: ProjectCategoryPostListParams;
    data: ProjectCategoryPostListBody;
    result: ProjectCategoryPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /projectCategory/page
   * @summary 分页查询
   * @description
   */
  export type ProjectCategoryGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 上级部门ID */
    parentId?: string;
  };
  export type ProjectCategoryGetPageParams = Record<string, any>;
  export type ProjectCategoryGetPageBody = any;
  export type ProjectCategoryGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectCategoryDTO (可选) */
    data?: YusuanModels.BasePageProjectCategoryDTO;
  };
  export type ProjectCategoryGetPageGeneric = {
    query: ProjectCategoryGetPageQuery;
    params: ProjectCategoryGetPageParams;
    data: ProjectCategoryGetPageBody;
    result: ProjectCategoryGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };
}
