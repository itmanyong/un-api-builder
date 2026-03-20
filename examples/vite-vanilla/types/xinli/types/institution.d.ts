import { XinliModels } from "./models";
export namespace InstitutionModels {
  /**
   * @url /institution/item
   * @summary 修改
   * @description
   */
  export type InstitutionPutItemQuery = Record<string, any>;
  export type InstitutionPutItemParams = Record<string, any>;
  export type InstitutionPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** string (可选) - 机构名称 */
    insName?: string;

    /** string (可选) - 机构地址 */
    address?: string;

    /** string (可选) - 联系人 */
    contactPerson?: string;

    /** string (可选) - 联系电话 */
    contactPhone?: string;

    /** string (可选) - 机构图片 */
    images?: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 审核意见 */
    reason?: string;

    /** number (可选) - 最大人数 | 格式: int32 */
    maxNumber?: number;

    /** string (可选) - 城市编码 */
    parentCode?: string;

    /** boolean (可选) - 是否签署 */
    isSign?: boolean;

    /** string (可选) - 机构码 */
    code?: string;

    /** string (可选) - 机构介绍 */
    introduce?: string;

    /** string (可选) - 业务范围 */
    business?: string;

    /** string (可选) - 身份证正面 */
    idCardFont?: string;

    /** string (可选) - 身份证反面 */
    idCardBack?: string;

    /** string (可选) - 资格证书 */
    qualifications?: string;

    /** string (可选) */
    userId?: string;
  };
  export type InstitutionPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InstitutionPutItemGeneric = {
    query: InstitutionPutItemQuery;
    params: InstitutionPutItemParams;
    data: InstitutionPutItemBody;
    result: InstitutionPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /institution/item
   * @summary 新增
   * @description
   */
  export type InstitutionPostItemQuery = Record<string, any>;
  export type InstitutionPostItemParams = Record<string, any>;
  export type InstitutionPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** string (可选) - 机构名称 */
    insName?: string;

    /** string (可选) - 机构地址 */
    address?: string;

    /** string (可选) - 联系人 */
    contactPerson?: string;

    /** string (可选) - 联系电话 */
    contactPhone?: string;

    /** string (可选) - 机构图片 */
    images?: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 审核意见 */
    reason?: string;

    /** number (可选) - 最大人数 | 格式: int32 */
    maxNumber?: number;

    /** string (可选) - 城市编码 */
    parentCode?: string;

    /** boolean (可选) - 是否签署 */
    isSign?: boolean;

    /** string (可选) - 申请人ID */
    userId?: string;

    /** string (可选) - 账号 */
    userName?: string;

    /** string (可选) - 密码 - 机构入驻是密码RSA加密 */
    userPassword?: string;

    /** string (可选) - 机构码 */
    code?: string;

    /** string - 机构介绍 */
    introduce: string;

    /** string - 业务范围 */
    business: string;

    /** string (可选) */
    roleIds?: string;

    /** string - 身份证正面 */
    idCardFont: string;

    /** string - 身份证反面 */
    idCardBack: string;

    /** string (可选) - 资格证书 */
    qualifications?: string;

    /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 审核类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
    applicationType?: "SYSTEM" | "PERSONAL";
  };
  export type InstitutionPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InstitutionDTO (可选) */
    data?: XinliModels.InstitutionDTO;
  };
  export type InstitutionPostItemGeneric = {
    query: InstitutionPostItemQuery;
    params: InstitutionPostItemParams;
    data: InstitutionPostItemBody;
    result: InstitutionPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /institution/enterAudit
   * @summary 机构入驻审核
   * @description
   */
  export type InstitutionPostEnterAuditQuery = Record<string, any>;
  export type InstitutionPostEnterAuditParams = Record<string, any>;
  export type InstitutionPostEnterAuditBody = {
    /** string - 机构id */
    institutionId: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 账号 - 审核状态为通过是必传 */
    userName?: string;

    /** string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的 */
    password?: string;

    /** string (可选) - 角色id - 审核状态为通过是必传 */
    roleIds?: string;

    /** string (可选) - 理由 */
    reason?: string;

    /** string - 机构码 */
    code: string;
  };
  export type InstitutionPostEnterAuditResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InstitutionPostEnterAuditGeneric = {
    query: InstitutionPostEnterAuditQuery;
    params: InstitutionPostEnterAuditParams;
    data: InstitutionPostEnterAuditBody;
    result: InstitutionPostEnterAuditResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /institution/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InstitutionGetPageQuery = {
    /** XinliModels.InstitutionPageQuery */
    params: XinliModels.InstitutionPageQuery;
  };
  export type InstitutionGetPageParams = Record<string, any>;
  export type InstitutionGetPageBody = any;
  export type InstitutionGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInstitutionDTO (可选) */
    data?: XinliModels.BasePageInstitutionDTO;
  };
  export type InstitutionGetPageGeneric = {
    query: InstitutionGetPageQuery;
    params: InstitutionGetPageParams;
    data: InstitutionGetPageBody;
    result: InstitutionGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /institution/getPassword/{id}
   * @summary 获取机构密码
   * @description
   */
  export type InstitutionGetGetPasswordByIdQuery = Record<string, any>;
  export type InstitutionGetGetPasswordByIdParams = {
    /** string */
    id: string;
  };
  export type InstitutionGetGetPasswordByIdBody = any;
  export type InstitutionGetGetPasswordByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type InstitutionGetGetPasswordByIdGeneric = {
    query: InstitutionGetGetPasswordByIdQuery;
    params: InstitutionGetGetPasswordByIdParams;
    data: InstitutionGetGetPasswordByIdBody;
    result: InstitutionGetGetPasswordByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /institution/list
   * @summary 批量删除
   * @description
   */
  export type InstitutionDeleteListQuery = Record<string, any>;
  export type InstitutionDeleteListParams = Record<string, any>;
  export type InstitutionDeleteListBody = string[];
  export type InstitutionDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InstitutionDeleteListGeneric = {
    query: InstitutionDeleteListQuery;
    params: InstitutionDeleteListParams;
    data: InstitutionDeleteListBody;
    result: InstitutionDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /institution/item/{id}
   * @summary 删除
   * @description
   */
  export type InstitutionDeleteItemByIdQuery = Record<string, any>;
  export type InstitutionDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type InstitutionDeleteItemByIdBody = any;
  export type InstitutionDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InstitutionDeleteItemByIdGeneric = {
    query: InstitutionDeleteItemByIdQuery;
    params: InstitutionDeleteItemByIdParams;
    data: InstitutionDeleteItemByIdBody;
    result: InstitutionDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
