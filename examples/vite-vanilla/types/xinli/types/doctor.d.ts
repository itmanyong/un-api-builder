import { XinliModels } from './models';
export namespace DoctorModels {
/**
* @url /doctor/item 
* @summary 修改 
* @description  
 */
export type DoctorPutItemQuery = Record<string, any>
export type DoctorPutItemParams = Record<string, any>
export type DoctorPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 医师姓名 */
  name?: string;

  /** string (可选) - 绑定的机构ID */
  institutionId?: string;

  /** boolean (可选) - 是否在线 */
  isOnline?: boolean;

  /** string (可选) - 医生标签 */
  label?: string;

  /** string (可选) - 医师等级 */
  level?: string;

  /** string (可选) - 擅长领域 */
  specialty?: string;

  /** string (可选) - 个人简介 */
  introduction?: string;

  /** number (可选) - 咨询费用 */
  serviceFee?: number;

  /** string (可选) - 地址 */
  address?: string;

  /** number (可选) - 服务时长 | 格式: int32 */
  serviceHours?: number;

  /** number (可选) - 服务次数 | 格式: int32 */
  serviceCount?: number;

  /** string (可选) - 入行时间 */
  entryTime?: string;

  /** number (可选) - 在线时长 | 格式: int32 */
  onlineHours?: number;

  /** string (可选) - 下线时间 | 格式: date-time */
  logoutTime?: string;

  /** string (可选) - 登录时间 | 格式: date-time */
  loginTime?: string;

  /** string (可选) - 审核意见 */
  reason?: string;

  /** string - 身份证正面 */
  idCardFont: string;

  /** string - 身份证反面 */
  idCardBack: string;

  /** string (可选) - 证书-允许传多个,逗号分隔 */
  qualifications?: string;

  /** string - 电话 */
  phone: string;

  /** string (可选) - 头像 */
  avatar?: string;
}
export type DoctorPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DoctorPutItemGeneric = {
          query: DoctorPutItemQuery;
          params: DoctorPutItemParams;
          data: DoctorPutItemBody;
          result: DoctorPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /doctor/item 
* @summary 新增 
* @description  
 */
export type DoctorPostItemQuery = Record<string, any>
export type DoctorPostItemParams = Record<string, any>
export type DoctorPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string - 医师姓名 */
  name: string;

  /** string - 身份证号 */
  idCard: string;

  /** string - 电话 */
  phone: string;

  /** string - 职务 */
  job: string;

  /** string - 擅长领域 */
  specialty: string;

  /** string (可选) - 绑定的机构ID */
  institutionId?: string;

  /** string (可选) - 地址 */
  address?: string;

  /** string - 个人简介 */
  introduction: string;

  /** string - 身份证正面 */
  idCardFont: string;

  /** string - 身份证反面 */
  idCardBack: string;

  /** string (可选) - 证书-允许传多个,逗号分隔 */
  qualifications?: string;

  /** number - 咨询费用 */
  serviceFee: number;

  /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 申请类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
  applicationType?: "SYSTEM" | "PERSONAL";

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status?: "ENABLE" | "DISABLE";

  /** boolean (可选) - 是否在线 */
  isOnline?: boolean;

  /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 申请审核状态，枚举：AuditStatus | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
  auditStatus?: "WAIT" | "PASS" | "FAIL";

  /** string (可选) - 医生标签 */
  label?: string;

  /** string (可选) - 医师等级 */
  level?: string;

  /** number (可选) - 服务时长 | 格式: int32 */
  serviceHours?: number;

  /** number (可选) - 服务次数 | 格式: int32 */
  serviceCount?: number;

  /** string - 入行时间 */
  entryTime: string;

  /** number (可选) - 在线时长 | 格式: int32 */
  onlineHours?: number;

  /** string (可选) - 下线时间 | 格式: date-time */
  logoutTime?: string;

  /** string (可选) - 登录时间 | 格式: date-time */
  loginTime?: string;

  /** string (可选) - 申请人ID */
  userId?: string;

  /** string (可选) - 审核意见 */
  reason?: string;

  /** string (可选) - 密码 */
  userPassword?: string;

  /** string (可选) */
  institutionName?: string;

  /** string (可选) - 头像 */
  avatar?: string;

  /** string (可选) - 角色id - 管端添加必填，审核通过必填 */
  roleIds?: string;

  /** string (可选) - 账号id - 后端处理 */
  accountId?: string;

  /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
  sex: "MAN" | "WOMAN" | "UNKNOWN";
}
export type DoctorPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.DoctorDTO (可选) */
  data?: XinliModels.DoctorDTO;
}
export type DoctorPostItemGeneric = {
          query: DoctorPostItemQuery;
          params: DoctorPostItemParams;
          data: DoctorPostItemBody;
          result: DoctorPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /doctor/putStatus/{id}/{status} 
* @summary 修改状态 
* @description  
 */
export type DoctorPostPutStatusByIdByStatusQuery = Record<string, any>
export type DoctorPostPutStatusByIdByStatusParams = {
  /** string */
  id: string;

  /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
  status: "ENABLE" | "DISABLE";
}
export type DoctorPostPutStatusByIdByStatusBody = any
export type DoctorPostPutStatusByIdByStatusResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DoctorPostPutStatusByIdByStatusGeneric = {
          query: DoctorPostPutStatusByIdByStatusQuery;
          params: DoctorPostPutStatusByIdByStatusParams;
          data: DoctorPostPutStatusByIdByStatusBody;
          result: DoctorPostPutStatusByIdByStatusResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /doctor/enterAudit 
* @summary 医生入驻审核 
* @description  
 */
export type DoctorPostEnterAuditQuery = Record<string, any>
export type DoctorPostEnterAuditParams = Record<string, any>
export type DoctorPostEnterAuditBody = {
  /** string - 医生id */
  doctorId: string;

  /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
  auditStatus: "WAIT" | "PASS" | "FAIL";

  /** string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的 */
  password?: string;

  /** number (可选) - 咨询费用 - 不传默认为0 */
  serviceFee?: number;

  /** string (可选) - 角色id - 审核状态为通过是必传 */
  roleIds?: string;

  /** string (可选) - 理由 */
  reason?: string;
}
export type DoctorPostEnterAuditResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DoctorPostEnterAuditGeneric = {
          query: DoctorPostEnterAuditQuery;
          params: DoctorPostEnterAuditParams;
          data: DoctorPostEnterAuditBody;
          result: DoctorPostEnterAuditResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: true;
};
     
/**
* @url /doctor/page 
* @summary 多条件组合分页查询 
* @description  
 */
export type DoctorGetPageQuery = {
  /** XinliModels.DoctorPageQuery */
  params: XinliModels.DoctorPageQuery;
}
export type DoctorGetPageParams = Record<string, any>
export type DoctorGetPageBody = any
export type DoctorGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageDoctorDTO (可选) */
  data?: XinliModels.BasePageDoctorDTO;
}
export type DoctorGetPageGeneric = {
          query: DoctorGetPageQuery;
          params: DoctorGetPageParams;
          data: DoctorGetPageBody;
          result: DoctorGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /doctor/list 
* @summary 批量删除 
* @description  
 */
export type DoctorDeleteListQuery = Record<string, any>
export type DoctorDeleteListParams = Record<string, any>
export type DoctorDeleteListBody = string[]
export type DoctorDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DoctorDeleteListGeneric = {
          query: DoctorDeleteListQuery;
          params: DoctorDeleteListParams;
          data: DoctorDeleteListBody;
          result: DoctorDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /doctor/item/{id} 
* @summary 删除 
* @description  
 */
export type DoctorDeleteItemByIdQuery = Record<string, any>
export type DoctorDeleteItemByIdParams = {
  /** string */
  id: string;
}
export type DoctorDeleteItemByIdBody = any
export type DoctorDeleteItemByIdResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type DoctorDeleteItemByIdGeneric = {
          query: DoctorDeleteItemByIdQuery;
          params: DoctorDeleteItemByIdParams;
          data: DoctorDeleteItemByIdBody;
          result: DoctorDeleteItemByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
}
