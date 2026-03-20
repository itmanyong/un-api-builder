import { YusuanModels } from "./models";
export namespace ApprovalModels {
  /**
   * @url /approval
   * @summary 修改
   * @description
   */
  export type ApprovalPutQuery = Record<string, any>;
  export type ApprovalPutParams = Record<string, any>;
  export type ApprovalPutBody = {
    /** string - 主键ID(修改时传入) */
    id: string;

    /** string - 标题 */
    title: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 内容 */
    content?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string - 审批人id集合（英文逗号隔开） */
    approveAccountIds: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition: "AND" | "OR";

    /** string (可选) - 抄送人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };
  export type ApprovalPutResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalPutGeneric = {
    query: ApprovalPutQuery;
    params: ApprovalPutParams;
    data: ApprovalPutBody;
    result: ApprovalPutResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval
   * @summary 新增
   * @description
   */
  export type ApprovalPostQuery = Record<string, any>;
  export type ApprovalPostParams = Record<string, any>;
  export type ApprovalPostBody = {
    /** string - 主键ID(修改时传入) */
    id: string;

    /** string - 标题 */
    title: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 内容 */
    content?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string - 审批人id集合（英文逗号隔开） */
    approveAccountIds: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition: "AND" | "OR";

    /** string (可选) - 抄送人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };
  export type ApprovalPostResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ApprovalDTO (可选) */
    data?: YusuanModels.ApprovalDTO;
  };
  export type ApprovalPostGeneric = {
    query: ApprovalPostQuery;
    params: ApprovalPostParams;
    data: ApprovalPostBody;
    result: ApprovalPostResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ApprovalPostListQuery = Record<string, any>;
  export type ApprovalPostListParams = Record<string, any>;
  export type ApprovalPostListBody = string[];
  export type ApprovalPostListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ApprovalDTO[];
  };
  export type ApprovalPostListGeneric = {
    query: ApprovalPostListQuery;
    params: ApprovalPostListParams;
    data: ApprovalPostListBody;
    result: ApprovalPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /approval/list
   * @summary 批量删除
   * @description
   */
  export type ApprovalDeleteListQuery = Record<string, any>;
  export type ApprovalDeleteListParams = Record<string, any>;
  export type ApprovalDeleteListBody = string[];
  export type ApprovalDeleteListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalDeleteListGeneric = {
    query: ApprovalDeleteListQuery;
    params: ApprovalDeleteListParams;
    data: ApprovalDeleteListBody;
    result: ApprovalDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /approval/history/page
   * @summary 分配历史记录分页查询
   * @description
   */
  export type ApprovalPostHistoryPageQuery = Record<string, any>;
  export type ApprovalPostHistoryPageParams = Record<string, any>;
  export type ApprovalPostHistoryPageBody = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) */
    approveAccountId?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** number (可选) - 格式: int32 */
    lot?: number;

    /** string (可选) */
    copyAccountId?: string;

    /** array (可选) */
    approvalIds?: string[];
  };
  export type ApprovalPostHistoryPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalHistoryDTO (可选) */
    data?: YusuanModels.BasePageApprovalHistoryDTO;
  };
  export type ApprovalPostHistoryPageGeneric = {
    query: ApprovalPostHistoryPageQuery;
    params: ApprovalPostHistoryPageParams;
    data: ApprovalPostHistoryPageBody;
    result: ApprovalPostHistoryPageResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval/page
   * @summary 分页查询
   * @description
   */
  export type ApprovalGetPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;

    /** string (可选) - 当前审批人ID */
    approveAccountId?: string;

    /** string (可选) - 当前抄送人id */
    copyAccountId?: string;
  };
  export type ApprovalGetPageParams = Record<string, any>;
  export type ApprovalGetPageBody = any;
  export type ApprovalGetPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalDTO (可选) */
    data?: YusuanModels.BasePageApprovalDTO;
  };
  export type ApprovalGetPageGeneric = {
    query: ApprovalGetPageQuery;
    params: ApprovalGetPageParams;
    data: ApprovalGetPageBody;
    result: ApprovalGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /approval/history/{approvalId}/{lot}
   * @summary 获取指定单子指定阶段最新的审批人知会人
   * @description
   */
  export type ApprovalGetHistoryByApprovalIdByLotQuery = Record<string, any>;
  export type ApprovalGetHistoryByApprovalIdByLotParams = {
    /** string */
    approvalId: string;

    /** number - 格式: int32 */
    lot: number;
  };
  export type ApprovalGetHistoryByApprovalIdByLotBody = any;
  export type ApprovalGetHistoryByApprovalIdByLotResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ApprovalHistoryDTO (可选) */
    data?: YusuanModels.ApprovalHistoryDTO;
  };
  export type ApprovalGetHistoryByApprovalIdByLotGeneric = {
    query: ApprovalGetHistoryByApprovalIdByLotQuery;
    params: ApprovalGetHistoryByApprovalIdByLotParams;
    data: ApprovalGetHistoryByApprovalIdByLotBody;
    result: ApprovalGetHistoryByApprovalIdByLotResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /approval/{id}
   * @summary 删除
   * @description
   */
  export type ApprovalDeleteByIdQuery = Record<string, any>;
  export type ApprovalDeleteByIdParams = {
    /** string */
    id: string;
  };
  export type ApprovalDeleteByIdBody = any;
  export type ApprovalDeleteByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalDeleteByIdGeneric = {
    query: ApprovalDeleteByIdQuery;
    params: ApprovalDeleteByIdParams;
    data: ApprovalDeleteByIdBody;
    result: ApprovalDeleteByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /approval/record
   * @summary 修改
   * @description
   */
  export type ApprovalPutRecordQuery = Record<string, any>;
  export type ApprovalPutRecordParams = Record<string, any>;
  export type ApprovalPutRecordBody = {
    /** string - ID */
    id: string;

    /** string - 审批id */
    approvalId: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** boolean - 是否提交 */
    isSubmit: boolean;

    /** string (可选) - 后续审批人id集合（英文逗号隔开） */
    approveAccountIds?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 后续审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** string (可选) - 后续知会人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };
  export type ApprovalPutRecordResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalPutRecordGeneric = {
    query: ApprovalPutRecordQuery;
    params: ApprovalPutRecordParams;
    data: ApprovalPutRecordBody;
    result: ApprovalPutRecordResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval/record
   * @summary 新增
   * @description
   */
  export type ApprovalPostRecordQuery = Record<string, any>;
  export type ApprovalPostRecordParams = Record<string, any>;
  export type ApprovalPostRecordBody = {
    /** string - ID */
    id: string;

    /** string - 审批id */
    approvalId: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** boolean - 是否提交 */
    isSubmit: boolean;

    /** string (可选) - 后续审批人id集合（英文逗号隔开） */
    approveAccountIds?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 后续审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** string (可选) - 后续知会人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };
  export type ApprovalPostRecordResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ApprovalDTO (可选) */
    data?: YusuanModels.ApprovalDTO;
  };
  export type ApprovalPostRecordGeneric = {
    query: ApprovalPostRecordQuery;
    params: ApprovalPostRecordParams;
    data: ApprovalPostRecordBody;
    result: ApprovalPostRecordResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval/record/back
   * @summary 退回
   * @description
   */
  export type ApprovalPutRecordBackQuery = Record<string, any>;
  export type ApprovalPutRecordBackParams = Record<string, any>;
  export type ApprovalPutRecordBackBody = {
    /** string - 审批id */
    approvalId: string;

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;
  };
  export type ApprovalPutRecordBackResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalPutRecordBackGeneric = {
    query: ApprovalPutRecordBackQuery;
    params: ApprovalPutRecordBackParams;
    data: ApprovalPutRecordBackBody;
    result: ApprovalPutRecordBackResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
  };

  /**
   * @url /approval/record/list
   * @summary 根据id集合获取列表
   * @description
   */
  export type ApprovalPostRecordListQuery = Record<string, any>;
  export type ApprovalPostRecordListParams = Record<string, any>;
  export type ApprovalPostRecordListBody = string[];
  export type ApprovalPostRecordListResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ApprovalRecordDTO[];
  };
  export type ApprovalPostRecordListGeneric = {
    query: ApprovalPostRecordListQuery;
    params: ApprovalPostRecordListParams;
    data: ApprovalPostRecordListBody;
    result: ApprovalPostRecordListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /approval/record/page
   * @summary 分页查询
   * @description
   */
  export type ApprovalGetRecordPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 审批id */
    approvalId?: string;

    /** string (可选) - 审批人id */
    approvalAccountId?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** number (可选) - 审批阶段 | 格式: int32 */
    lot?: number;

    /** boolean (可选) - 是否提交 */
    isSubmit?: boolean;

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;

    /** string (可选) - 提交开始时间 | 格式: date-time */
    startSubmitTime?: string;

    /** string (可选) - 提交结束时间 | 格式: date-time */
    endSubmitTime?: string;
  };
  export type ApprovalGetRecordPageParams = Record<string, any>;
  export type ApprovalGetRecordPageBody = any;
  export type ApprovalGetRecordPageResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalRecordDTO (可选) */
    data?: YusuanModels.BasePageApprovalRecordDTO;
  };
  export type ApprovalGetRecordPageGeneric = {
    query: ApprovalGetRecordPageQuery;
    params: ApprovalGetRecordPageParams;
    data: ApprovalGetRecordPageBody;
    result: ApprovalGetRecordPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /approval/record/{id}
   * @summary 删除
   * @description
   */
  export type ApprovalDeleteRecordByIdQuery = Record<string, any>;
  export type ApprovalDeleteRecordByIdParams = {
    /** string */
    id: string;
  };
  export type ApprovalDeleteRecordByIdBody = any;
  export type ApprovalDeleteRecordByIdResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ApprovalDeleteRecordByIdGeneric = {
    query: ApprovalDeleteRecordByIdQuery;
    params: ApprovalDeleteRecordByIdParams;
    data: ApprovalDeleteRecordByIdBody;
    result: ApprovalDeleteRecordByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
