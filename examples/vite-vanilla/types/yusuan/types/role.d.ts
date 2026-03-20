import { YusuanModels } from "./models";
export namespace RoleModels {
  /**
   * @url /role/{id}
   * @summary 根据ID查询一条数据
   * @description
   */
  export type RoleGetByIdQuery = Record<string, any>;
  export type RoleGetByIdParams = {
    /** string */
    id: string;
  };
  export type RoleGetByIdBody = any;
  export type RoleGetByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.RoleInfoDTO (可选) */
    data?: YusuanModels.RoleInfoDTO;
  };
  export type RoleGetByIdGeneric = {
    query: RoleGetByIdQuery;
    params: RoleGetByIdParams;
    data: RoleGetByIdBody;
    result: RoleGetByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /role/{id}
   * @summary 根据id修改一条数据
   * @description
   */
  export type RolePutByIdQuery = Record<string, any>;
  export type RolePutByIdParams = {
    /** string */
    id: string;
  };
  export type RolePutByIdBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 角色名称 */
    name: string;

    /** string - 角色编码 */
    code: string;

    /** string (可选) - 权限菜单ids（多个英文逗号隔开） */
    permissionIds?: string;
  };
  export type RolePutByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type RolePutByIdGeneric = {
    query: RolePutByIdQuery;
    params: RolePutByIdParams;
    data: RolePutByIdBody;
    result: RolePutByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: true;
  };

  /**
   * @url /role/{id}
   * @summary 根据id删除数据
   * @description
   */
  export type RoleDeleteByIdQuery = Record<string, any>;
  export type RoleDeleteByIdParams = {
    /** string */
    id: string;
  };
  export type RoleDeleteByIdBody = any;
  export type RoleDeleteByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type RoleDeleteByIdGeneric = {
    query: RoleDeleteByIdQuery;
    params: RoleDeleteByIdParams;
    data: RoleDeleteByIdBody;
    result: RoleDeleteByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /role/list
   * @summary 批量修改数据
   * @description
   */
  export type RolePutListQuery = Record<string, any>;
  export type RolePutListParams = Record<string, any>;
  export type RolePutListBody = YusuanModels.RoleInfoDTO[];
  export type RolePutListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type RolePutListGeneric = {
    query: RolePutListQuery;
    params: RolePutListParams;
    data: RolePutListBody;
    result: RolePutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /role/list
   * @summary 批量添加数据
   * @description
   */
  export type RolePostListQuery = Record<string, any>;
  export type RolePostListParams = Record<string, any>;
  export type RolePostListBody = YusuanModels.RoleInfoDTO[];
  export type RolePostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.RoleInfoDTO[];
  };
  export type RolePostListGeneric = {
    query: RolePostListQuery;
    params: RolePostListParams;
    data: RolePostListBody;
    result: RolePostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /role/list
   * @summary 根据id集合批量删除数据
   * @description
   */
  export type RoleDeleteListQuery = Record<string, any>;
  export type RoleDeleteListParams = Record<string, any>;
  export type RoleDeleteListBody = string[];
  export type RoleDeleteListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type RoleDeleteListGeneric = {
    query: RoleDeleteListQuery;
    params: RoleDeleteListParams;
    data: RoleDeleteListBody;
    result: RoleDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /role
   * @summary 添加一条数据
   * @description
   */
  export type RolePostQuery = Record<string, any>;
  export type RolePostParams = Record<string, any>;
  export type RolePostBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 角色名称 */
    name: string;

    /** string - 角色编码 */
    code: string;

    /** string (可选) - 权限菜单ids（多个英文逗号隔开） */
    permissionIds?: string;
  };
  export type RolePostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.RoleInfoDTO (可选) */
    data?: YusuanModels.RoleInfoDTO;
  };
  export type RolePostGeneric = {
    query: RolePostQuery;
    params: RolePostParams;
    data: RolePostBody;
    result: RolePostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /role/list/query
   * @summary 根据id集合获取列表
   * @description
   */
  export type RolePostListQueryQuery = Record<string, any>;
  export type RolePostListQueryParams = Record<string, any>;
  export type RolePostListQueryBody = string[];
  export type RolePostListQueryResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.RoleInfoDTO[];
  };
  export type RolePostListQueryGeneric = {
    query: RolePostListQueryQuery;
    params: RolePostListQueryParams;
    data: RolePostListQueryBody;
    result: RolePostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /role/page
   * @summary 分页查询
   * @description
   */
  export type RoleGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;
  };
  export type RoleGetPageParams = Record<string, any>;
  export type RoleGetPageBody = any;
  export type RoleGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageRoleInfoDTO (可选) */
    data?: YusuanModels.BasePageRoleInfoDTO;
  };
  export type RoleGetPageGeneric = {
    query: RoleGetPageQuery;
    params: RoleGetPageParams;
    data: RoleGetPageBody;
    result: RoleGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };
}
