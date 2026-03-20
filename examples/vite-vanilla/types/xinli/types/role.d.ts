import { XinliModels } from './models';
export namespace RoleModels {
/**
* @url /role/status/{id} 
* @summary 修改状态 
* @description  
 */
export type RolePutStatusByIdQuery = Record<string, any>
export type RolePutStatusByIdParams = {
  /** string */
  id: string;
}
export type RolePutStatusByIdBody = any
export type RolePutStatusByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type RolePutStatusByIdGeneric = {
          query: RolePutStatusByIdQuery;
          params: RolePutStatusByIdParams;
          data: RolePutStatusByIdBody;
          result: RolePutStatusByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /role/item 
* @summary 修改角色 
* @description  
 */
export type RolePutItemQuery = Record<string, any>
export type RolePutItemParams = Record<string, any>
export type RolePutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 角色名称 */
  roleName?: string;

  /** string (可选) - 角色编码 */
  roleCode?: string;

  /** string (可选) - 菜单ids */
  menuIds?: string;
}
export type RolePutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type RolePutItemGeneric = {
          query: RolePutItemQuery;
          params: RolePutItemParams;
          data: RolePutItemBody;
          result: RolePutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /role/item 
* @summary 新增角色 
* @description  
 */
export type RolePostItemQuery = Record<string, any>
export type RolePostItemParams = Record<string, any>
export type RolePostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string - 角色名称 */
  roleName: string;

  /** string - 角色编码 */
  roleCode: string;

  /** string - 菜单ids */
  menuIds: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态：启用/禁用 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";
}
export type RolePostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.RoleDTO (可选) */
  data?: XinliModels.RoleDTO;
}
export type RolePostItemGeneric = {
          query: RolePostItemQuery;
          params: RolePostItemParams;
          data: RolePostItemBody;
          result: RolePostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /role/list/query 
* @summary 批量查询 
* @description  
 */
export type RolePostListQueryQuery = Record<string, any>
export type RolePostListQueryParams = Record<string, any>
export type RolePostListQueryBody = string[]
export type RolePostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.RoleDTO[];
}
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
* @description 角色分页查询 
 */
export type RoleGetPageQuery = {
  /** XinliModels.RolePageQuery */
  params: XinliModels.RolePageQuery;
}
export type RoleGetPageParams = Record<string, any>
export type RoleGetPageBody = any
export type RoleGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageRoleDTO (可选) */
  data?: XinliModels.BasePageRoleDTO;
}
export type RoleGetPageGeneric = {
          query: RoleGetPageQuery;
          params: RoleGetPageParams;
          data: RoleGetPageBody;
          result: RoleGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /role/list 
* @summary 删除角色 
* @description  
 */
export type RoleDeleteListQuery = Record<string, any>
export type RoleDeleteListParams = Record<string, any>
export type RoleDeleteListBody = string[]
export type RoleDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
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
* @url /role/item/{id} 
* @summary 删除角色 
* @description  
 */
export type RoleDeleteItemByIdQuery = Record<string, any>
export type RoleDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type RoleDeleteItemByIdBody = any
export type RoleDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type RoleDeleteItemByIdGeneric = {
          query: RoleDeleteItemByIdQuery;
          params: RoleDeleteItemByIdParams;
          data: RoleDeleteItemByIdBody;
          result: RoleDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
