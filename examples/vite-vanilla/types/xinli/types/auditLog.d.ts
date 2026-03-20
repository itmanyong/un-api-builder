import { XinliModels } from './models';
export namespace AuditLogModels {
/**
* @url /auditLog/list 
* @summary 批量修改审核 
* @description  
 */
export type AuditLogPutListQuery = Record<string, any>
export type AuditLogPutListParams = Record<string, any>
export type AuditLogPutListBody = XinliModels.UpdateAuditLog[]
export type AuditLogPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AuditLogPutListGeneric = {
          query: AuditLogPutListQuery;
          params: AuditLogPutListParams;
          data: AuditLogPutListBody;
          result: AuditLogPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/list 
* @summary 批量新增审核 
* @description  
 */
export type AuditLogPostListQuery = Record<string, any>
export type AuditLogPostListParams = Record<string, any>
export type AuditLogPostListBody = XinliModels.AuditLogDTO[]
export type AuditLogPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.AuditLogDTO[];
}
export type AuditLogPostListGeneric = {
          query: AuditLogPostListQuery;
          params: AuditLogPostListParams;
          data: AuditLogPostListBody;
          result: AuditLogPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/list 
* @summary 批量删除审核 
* @description  
 */
export type AuditLogDeleteListQuery = Record<string, any>
export type AuditLogDeleteListParams = Record<string, any>
export type AuditLogDeleteListBody = string[]
export type AuditLogDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AuditLogDeleteListGeneric = {
          query: AuditLogDeleteListQuery;
          params: AuditLogDeleteListParams;
          data: AuditLogDeleteListBody;
          result: AuditLogDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/item 
* @summary 修改审核 
* @description  
 */
export type AuditLogPutItemQuery = Record<string, any>
export type AuditLogPutItemParams = Record<string, any>
export type AuditLogPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 申请ID */
  applicantId?: string;

  /** string (可选) - 审核ID */
  auditorId?: string;

  /** string (可选) - 内容 */
  content?: string;

  /** "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}" */
  type?: "INSTITUTION" | "DOCTOR";

  /** string (可选) - 审核意见 */
  reason?: string;

  /** string (可选) */
  userName?: string;

  /** string (可选) */
  userPassword?: string;

  /** number (可选) - 格式: int32 */
  count?: number;
}
export type AuditLogPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AuditLogPutItemGeneric = {
          query: AuditLogPutItemQuery;
          params: AuditLogPutItemParams;
          data: AuditLogPutItemBody;
          result: AuditLogPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/item 
* @summary 新增审核 
* @description  
 */
export type AuditLogPostItemQuery = Record<string, any>
export type AuditLogPostItemParams = Record<string, any>
export type AuditLogPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 申请id */
  applicantId?: string;

  /** string (可选) - 审核id */
  auditorId?: string;

  /** string (可选) - 内容 */
  content?: string;

  /** "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}" */
  type?: "INSTITUTION" | "DOCTOR";

  /** string (可选) - 审核意见 */
  reason?: string;

  /** string (可选) - 申请name */
  applicantName?: string;

  /** string (可选) - 审核name */
  auditorName?: string;

  /** string (可选) */
  userName?: string;

  /** string (可选) */
  userPassword?: string;

  /** number (可选) - 格式: int32 */
  count?: number;
}
export type AuditLogPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.AuditLogDTO (可选) */
  data?: XinliModels.AuditLogDTO;
}
export type AuditLogPostItemGeneric = {
          query: AuditLogPostItemQuery;
          params: AuditLogPostItemParams;
          data: AuditLogPostItemBody;
          result: AuditLogPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/list/query 
* @summary 批量查询审核 
* @description  
 */
export type AuditLogPostListQueryQuery = Record<string, any>
export type AuditLogPostListQueryParams = Record<string, any>
export type AuditLogPostListQueryBody = string[]
export type AuditLogPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.AuditLogDTO[];
}
export type AuditLogPostListQueryGeneric = {
          query: AuditLogPostListQueryQuery;
          params: AuditLogPostListQueryParams;
          data: AuditLogPostListQueryBody;
          result: AuditLogPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type AuditLogGetPageQuery = {
  /** XinliModels.AuditLogPageQuery */
  params: XinliModels.AuditLogPageQuery;
}
export type AuditLogGetPageParams = Record<string, any>
export type AuditLogGetPageBody = any
export type AuditLogGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageAuditLogDTO (可选) */
  data?: XinliModels.BasePageAuditLogDTO;
}
export type AuditLogGetPageGeneric = {
          query: AuditLogGetPageQuery;
          params: AuditLogGetPageParams;
          data: AuditLogGetPageBody;
          result: AuditLogGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /auditLog/item/{id} 
* @summary 查询审核 
* @description  
 */
export type AuditLogGetItemByIdQuery = Record<string, any>
export type AuditLogGetItemByIdParams = {
  /** string */
  id: string;
}
export type AuditLogGetItemByIdBody = any
export type AuditLogGetItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.AuditLogDTO (可选) */
  data?: XinliModels.AuditLogDTO;
}
export type AuditLogGetItemByIdGeneric = {
          query: AuditLogGetItemByIdQuery;
          params: AuditLogGetItemByIdParams;
          data: AuditLogGetItemByIdBody;
          result: AuditLogGetItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /auditLog/item/{id} 
* @summary 删除审核 
* @description  
 */
export type AuditLogDeleteItemByIdQuery = Record<string, any>
export type AuditLogDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type AuditLogDeleteItemByIdBody = any
export type AuditLogDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type AuditLogDeleteItemByIdGeneric = {
          query: AuditLogDeleteItemByIdQuery;
          params: AuditLogDeleteItemByIdParams;
          data: AuditLogDeleteItemByIdBody;
          result: AuditLogDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /auditLog/getPassword 
* @summary 查看账号密码 
* @description  
 */
export type AuditLogGetGetPasswordQuery = {
  /** string */
  id: string;

  /** string */
  appId: string;
}
export type AuditLogGetGetPasswordParams = Record<string, any>
export type AuditLogGetGetPasswordBody = any
export type AuditLogGetGetPasswordResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.UsernamePassword (可选) */
  data?: XinliModels.UsernamePassword;
}
export type AuditLogGetGetPasswordGeneric = {
          query: AuditLogGetGetPasswordQuery;
          params: AuditLogGetGetPasswordParams;
          data: AuditLogGetGetPasswordBody;
          result: AuditLogGetGetPasswordResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
