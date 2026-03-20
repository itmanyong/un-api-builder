import { YusuanModels } from './models';
export namespace DepartmentModels {
/**
* @url /department/{id} 
* @summary 修改部门数据 
* @description  
 */
export type DepartmentPutByIdQuery = Record<string, any>
export type DepartmentPutByIdParams = {
  /** string */
  id: string;
}
export type DepartmentPutByIdBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 上级部门ID（顶级默认-1） */
  parentId: string;

  /** string - 部门编码 */
  code: string;

  /** string - 部门名称 */
  name: string;

  /** number (可选) - 排序 | 格式: int32 */
  sort?: number;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DepartmentPutByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DepartmentPutByIdGeneric = {
          query: DepartmentPutByIdQuery;
          params: DepartmentPutByIdParams;
          data: DepartmentPutByIdBody;
          result: DepartmentPutByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: true;
};
     
/**
* @url /department/{id} 
* @summary 删除部门数据 
* @description  
 */
export type DepartmentDeleteByIdQuery = Record<string, any>
export type DepartmentDeleteByIdParams = {
  /** string */
  id: string;
}
export type DepartmentDeleteByIdBody = any
export type DepartmentDeleteByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DepartmentDeleteByIdGeneric = {
          query: DepartmentDeleteByIdQuery;
          params: DepartmentDeleteByIdParams;
          data: DepartmentDeleteByIdBody;
          result: DepartmentDeleteByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /department/status 
* @summary 批量修改状态 
* @description  
 */
export type DepartmentPutStatusQuery = Record<string, any>
export type DepartmentPutStatusParams = Record<string, any>
export type DepartmentPutStatusBody = {
  /** array - 主键ID列表 */
  ids: string[];

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status: "ENABLE" | "DISABLE";
}
export type DepartmentPutStatusResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DepartmentPutStatusGeneric = {
          query: DepartmentPutStatusQuery;
          params: DepartmentPutStatusParams;
          data: DepartmentPutStatusBody;
          result: DepartmentPutStatusResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /department 
* @summary 新增部门数据 
* @description  
 */
export type DepartmentPostQuery = Record<string, any>
export type DepartmentPostParams = Record<string, any>
export type DepartmentPostBody = {
  /** string (可选) - 主键ID */
  id?: string;

  /** string (可选) - 创建时间 | 格式: date-time */
  createTime?: string;

  /** string (可选) - 修改时间 | 格式: date-time */
  modifTime?: string;

  /** string - 上级部门ID（顶级默认-1） */
  parentId: string;

  /** string - 部门编码 */
  code: string;

  /** string - 部门名称 */
  name: string;

  /** number (可选) - 排序 | 格式: int32 */
  sort?: number;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** string (可选) - 备注 */
  remark?: string;
}
export type DepartmentPostResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.DepartmentDTO (可选) */
  data?: YusuanModels.DepartmentDTO;
}
export type DepartmentPostGeneric = {
          query: DepartmentPostQuery;
          params: DepartmentPostParams;
          data: DepartmentPostBody;
          result: DepartmentPostResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /department/list 
* @summary 根据id集合获取列表 
* @description  
 */
export type DepartmentPostListQuery = Record<string, any>
export type DepartmentPostListParams = Record<string, any>
export type DepartmentPostListBody = string[]
export type DepartmentPostListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** array (可选) - 返回数据 */
  data?: YusuanModels.DepartmentDTO[];
}
export type DepartmentPostListGeneric = {
          query: DepartmentPostListQuery;
          params: DepartmentPostListParams;
          data: DepartmentPostListBody;
          result: DepartmentPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /department/list 
* @summary 批量删除部门数据 
* @description  
 */
export type DepartmentDeleteListQuery = Record<string, any>
export type DepartmentDeleteListParams = Record<string, any>
export type DepartmentDeleteListBody = string[]
export type DepartmentDeleteListResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type DepartmentDeleteListGeneric = {
          query: DepartmentDeleteListQuery;
          params: DepartmentDeleteListParams;
          data: DepartmentDeleteListBody;
          result: DepartmentDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /department/page 
* @summary 分页查询 
* @description  
 */
export type DepartmentGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** string (可选) - 上级部门ID */
  parentId?: string;
}
export type DepartmentGetPageParams = Record<string, any>
export type DepartmentGetPageBody = any
export type DepartmentGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageDepartmentDTO (可选) */
  data?: YusuanModels.BasePageDepartmentDTO;
}
export type DepartmentGetPageGeneric = {
          query: DepartmentGetPageQuery;
          params: DepartmentGetPageParams;
          data: DepartmentGetPageBody;
          result: DepartmentGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
