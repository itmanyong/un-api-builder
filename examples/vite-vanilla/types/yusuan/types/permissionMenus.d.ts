import { YusuanModels } from './models';
export namespace PermissionMenusModels {
/**
* @url /permissionMenus/{id} 
* @summary 根据ID查询一条数据 
* @description  
 */
export type PermissionMenusGetByIdQuery = Record<string, any>
export type PermissionMenusGetByIdParams = {
  /** string */
  id: string;
}
export type PermissionMenusGetByIdBody = any
export type PermissionMenusGetByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.PermissionMenusDTO (可选) */
  data?: YusuanModels.PermissionMenusDTO;
}
export type PermissionMenusGetByIdGeneric = {
          query: PermissionMenusGetByIdQuery;
          params: PermissionMenusGetByIdParams;
          data: PermissionMenusGetByIdBody;
          result: PermissionMenusGetByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/{id} 
* @summary 根据id修改一条数据 
* @description  
 */
export type PermissionMenusPutByIdQuery = Record<string, any>
export type PermissionMenusPutByIdParams = {
  /** string */
  id: string;
}
export type PermissionMenusPutByIdBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 名称 */
  name: string;

  /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"功能","name":"FUNCTION"}" | "{"desc":"目录","name":"GROUP"}" - 类型 | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}" */
  type: "MENU" | "FUNCTION" | "GROUP";

  /** string - 功能编码 */
  code: string;

  /** string - 父级菜单ID */
  parentId: string;

  /** string (可选) - 路由 */
  path?: string;

  /** string (可选) - 扩展字段 */
  extend?: string;

  /** number (可选) - 排序 | 格式: int32 */
  sort?: number;

  /** string (可选) - 组件 */
  component?: string;

  /** string (可选) - 标题 */
  title?: string;

  /** boolean (可选) - 是否隐藏 */
  isHidden?: boolean;
}
export type PermissionMenusPutByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type PermissionMenusPutByIdGeneric = {
          query: PermissionMenusPutByIdQuery;
          params: PermissionMenusPutByIdParams;
          data: PermissionMenusPutByIdBody;
          result: PermissionMenusPutByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: true;
};
     
/**
* @url /permissionMenus/{id} 
* @summary 根据id删除数据 
* @description  
 */
export type PermissionMenusDeleteByIdQuery = Record<string, any>
export type PermissionMenusDeleteByIdParams = {
  /** string */
  id: string;
}
export type PermissionMenusDeleteByIdBody = any
export type PermissionMenusDeleteByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type PermissionMenusDeleteByIdGeneric = {
          query: PermissionMenusDeleteByIdQuery;
          params: PermissionMenusDeleteByIdParams;
          data: PermissionMenusDeleteByIdBody;
          result: PermissionMenusDeleteByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/list 
* @summary 批量修改数据 
* @description  
 */
export type PermissionMenusPutListQuery = Record<string, any>
export type PermissionMenusPutListParams = Record<string, any>
export type PermissionMenusPutListBody = YusuanModels.PermissionMenusDTO[]
export type PermissionMenusPutListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type PermissionMenusPutListGeneric = {
          query: PermissionMenusPutListQuery;
          params: PermissionMenusPutListParams;
          data: PermissionMenusPutListBody;
          result: PermissionMenusPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/list 
* @summary 批量添加数据 
* @description  
 */
export type PermissionMenusPostListQuery = Record<string, any>
export type PermissionMenusPostListParams = Record<string, any>
export type PermissionMenusPostListBody = YusuanModels.PermissionMenusDTO[]
export type PermissionMenusPostListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** array (可选) - 返回数据 */
  data?: YusuanModels.PermissionMenusDTO[];
}
export type PermissionMenusPostListGeneric = {
          query: PermissionMenusPostListQuery;
          params: PermissionMenusPostListParams;
          data: PermissionMenusPostListBody;
          result: PermissionMenusPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/list 
* @summary 根据id集合批量删除数据 
* @description  
 */
export type PermissionMenusDeleteListQuery = Record<string, any>
export type PermissionMenusDeleteListParams = Record<string, any>
export type PermissionMenusDeleteListBody = string[]
export type PermissionMenusDeleteListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type PermissionMenusDeleteListGeneric = {
          query: PermissionMenusDeleteListQuery;
          params: PermissionMenusDeleteListParams;
          data: PermissionMenusDeleteListBody;
          result: PermissionMenusDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /permissionMenus 
* @summary 添加一条数据 
* @description  
 */
export type PermissionMenusPostQuery = Record<string, any>
export type PermissionMenusPostParams = Record<string, any>
export type PermissionMenusPostBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 名称 */
  name: string;

  /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"功能","name":"FUNCTION"}" | "{"desc":"目录","name":"GROUP"}" - 类型 | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}" */
  type: "MENU" | "FUNCTION" | "GROUP";

  /** string - 功能编码 */
  code: string;

  /** string - 父级菜单ID */
  parentId: string;

  /** string (可选) - 路由 */
  path?: string;

  /** string (可选) - 扩展字段 */
  extend?: string;

  /** number (可选) - 排序 | 格式: int32 */
  sort?: number;

  /** string (可选) - 组件 */
  component?: string;

  /** string (可选) - 标题 */
  title?: string;

  /** boolean (可选) - 是否隐藏 */
  isHidden?: boolean;
}
export type PermissionMenusPostResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.PermissionMenusDTO (可选) */
  data?: YusuanModels.PermissionMenusDTO;
}
export type PermissionMenusPostGeneric = {
          query: PermissionMenusPostQuery;
          params: PermissionMenusPostParams;
          data: PermissionMenusPostBody;
          result: PermissionMenusPostResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /permissionMenus/list/query 
* @summary 根据id集合获取列表 
* @description  
 */
export type PermissionMenusPostListQueryQuery = Record<string, any>
export type PermissionMenusPostListQueryParams = Record<string, any>
export type PermissionMenusPostListQueryBody = string[]
export type PermissionMenusPostListQueryResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** array (可选) - 返回数据 */
  data?: YusuanModels.PermissionMenusDTO[];
}
export type PermissionMenusPostListQueryGeneric = {
          query: PermissionMenusPostListQueryQuery;
          params: PermissionMenusPostListQueryParams;
          data: PermissionMenusPostListQueryBody;
          result: PermissionMenusPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/page 
* @summary 分页查询 
* @description  
 */
export type PermissionMenusGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;
}
export type PermissionMenusGetPageParams = Record<string, any>
export type PermissionMenusGetPageBody = any
export type PermissionMenusGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePagePermissionMenusDTO (可选) */
  data?: YusuanModels.BasePagePermissionMenusDTO;
}
export type PermissionMenusGetPageGeneric = {
          query: PermissionMenusGetPageQuery;
          params: PermissionMenusGetPageParams;
          data: PermissionMenusGetPageBody;
          result: PermissionMenusGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /permissionMenus/current 
* @summary 获取当前登录用户拥有的菜单功能权限 
* @description  
 */
export type PermissionMenusGetCurrentQuery = Record<string, any>
export type PermissionMenusGetCurrentParams = Record<string, any>
export type PermissionMenusGetCurrentBody = any
export type PermissionMenusGetCurrentResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** object (可选) - 返回数据 */
  data?: Record<string, any>;
}
export type PermissionMenusGetCurrentGeneric = {
          query: PermissionMenusGetCurrentQuery;
          params: PermissionMenusGetCurrentParams;
          data: PermissionMenusGetCurrentBody;
          result: PermissionMenusGetCurrentResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
