import { XinliModels } from "./models";
export namespace MenusModels {
  /**
   * @url /menus/item
   * @summary 修改菜单
   * @description
   */
  export type MenusPutItemQuery = Record<string, any>;
  export type MenusPutItemParams = Record<string, any>;
  export type MenusPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 菜单名称 */
    name?: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" (可选) - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}" */
    type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";

    /** string (可选) - 功能编码 */
    code?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 页面url地址 */
    urlAddress?: string;

    /** string (可选) - 图标 */
    icon?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 路径 */
    path?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 渲染组件 */
    component?: string;

    /** string (可选) - 父级名称 */
    parentName?: string;

    /** string (可选) - 重定向路径 */
    redirect?: string;

    /** number (可选) - 权重 | 格式: int32 */
    weight?: number;

    /** boolean (可选) - 是否隐藏 */
    isHidden?: boolean;

    /** boolean (可选) - 是否缓存 */
    isCache?: boolean;

    /** boolean (可选) - 是否禁用 */
    isDisabled?: boolean;

    /** boolean (可选) - 是否内联 */
    isInline?: boolean;

    /** "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}" */
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };
  export type MenusPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type MenusPutItemGeneric = {
    query: MenusPutItemQuery;
    params: MenusPutItemParams;
    data: MenusPutItemBody;
    result: MenusPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/item
   * @summary 新增菜单
   * @description
   */
  export type MenusPostItemQuery = Record<string, any>;
  export type MenusPostItemParams = Record<string, any>;
  export type MenusPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 菜单名称 */
    name?: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}" */
    type: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";

    /** string (可选) - 功能编码 */
    code?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 页面url地址 */
    urlAddress?: string;

    /** string (可选) - 图标 */
    icon?: string;

    /** number - 排序 | 格式: int32 */
    sort: number;

    /** string (可选) - 路径 */
    path?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 渲染组件 */
    component?: string;

    /** string - 父级名称 */
    parentName: string;

    /** string (可选) - 重定向路径 */
    redirect?: string;

    /** number - 权重 | 格式: int32 */
    weight: number;

    /** boolean - 是否隐藏 */
    isHidden: boolean;

    /** boolean - 是否缓存 */
    isCache: boolean;

    /** boolean - 是否禁用 */
    isDisabled: boolean;

    /** boolean - 是否内联 */
    isInline: boolean;

    /** "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}" */
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };
  export type MenusPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.MenusDTO (可选) */
    data?: XinliModels.MenusDTO;
  };
  export type MenusPostItemGeneric = {
    query: MenusPostItemQuery;
    params: MenusPostItemParams;
    data: MenusPostItemBody;
    result: MenusPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /menus/list/query
   * @summary 批量查询
   * @description
   */
  export type MenusPostListQueryQuery = Record<string, any>;
  export type MenusPostListQueryParams = Record<string, any>;
  export type MenusPostListQueryBody = string[];
  export type MenusPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };
  export type MenusPostListQueryGeneric = {
    query: MenusPostListQueryQuery;
    params: MenusPostListQueryParams;
    data: MenusPostListQueryBody;
    result: MenusPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/page
   * @summary 分页查询
   * @description 菜单分页查询
   */
  export type MenusGetPageQuery = {
    /** XinliModels.MenusPageQuery */
    params: XinliModels.MenusPageQuery;
  };
  export type MenusGetPageParams = Record<string, any>;
  export type MenusGetPageBody = any;
  export type MenusGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageMenusDTO (可选) */
    data?: XinliModels.BasePageMenusDTO;
  };
  export type MenusGetPageGeneric = {
    query: MenusGetPageQuery;
    params: MenusGetPageParams;
    data: MenusGetPageBody;
    result: MenusGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/getByRoleId
   * @summary 获取角色权限
   * @description
   */
  export type MenusGetGetByRoleIdQuery = {
    /** string */
    roleId: string;
  };
  export type MenusGetGetByRoleIdParams = Record<string, any>;
  export type MenusGetGetByRoleIdBody = any;
  export type MenusGetGetByRoleIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };
  export type MenusGetGetByRoleIdGeneric = {
    query: MenusGetGetByRoleIdQuery;
    params: MenusGetGetByRoleIdParams;
    data: MenusGetGetByRoleIdBody;
    result: MenusGetGetByRoleIdResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/getByAccountId
   * @summary 获取登录账号菜单功能权限
   * @description
   */
  export type MenusGetGetByAccountIdQuery = Record<string, any>;
  export type MenusGetGetByAccountIdParams = Record<string, any>;
  export type MenusGetGetByAccountIdBody = any;
  export type MenusGetGetByAccountIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };
  export type MenusGetGetByAccountIdGeneric = {
    query: MenusGetGetByAccountIdQuery;
    params: MenusGetGetByAccountIdParams;
    data: MenusGetGetByAccountIdBody;
    result: MenusGetGetByAccountIdResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/list
   * @summary 删除菜单
   * @description
   */
  export type MenusDeleteListQuery = Record<string, any>;
  export type MenusDeleteListParams = Record<string, any>;
  export type MenusDeleteListBody = string[];
  export type MenusDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type MenusDeleteListGeneric = {
    query: MenusDeleteListQuery;
    params: MenusDeleteListParams;
    data: MenusDeleteListBody;
    result: MenusDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /menus/item/{id}
   * @summary 删除
   * @description
   */
  export type MenusDeleteItemByIdQuery = Record<string, any>;
  export type MenusDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type MenusDeleteItemByIdBody = any;
  export type MenusDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type MenusDeleteItemByIdGeneric = {
    query: MenusDeleteItemByIdQuery;
    params: MenusDeleteItemByIdParams;
    data: MenusDeleteItemByIdBody;
    result: MenusDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
