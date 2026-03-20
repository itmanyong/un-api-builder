import { YusuanModels } from './models';
export namespace SystemMessageModels {
/**
* @url /systemMessage/read/{id} 
* @summary 指定消息为已读状态 
* @description  
 */
export type SystemMessagePutReadByIdQuery = Record<string, any>
export type SystemMessagePutReadByIdParams = {
  /** string */
  id: string;
}
export type SystemMessagePutReadByIdBody = any
export type SystemMessagePutReadByIdResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** boolean (可选) - 返回数据 */
  data?: boolean;
}
export type SystemMessagePutReadByIdGeneric = {
          query: SystemMessagePutReadByIdQuery;
          params: SystemMessagePutReadByIdParams;
          data: SystemMessagePutReadByIdBody;
          result: SystemMessagePutReadByIdResponse;
          queryRequired: false;
          paramsRequired: true;
          dataRequired: false;
};
     
/**
* @url /systemMessage/page 
* @summary 分页查询 
* @description  
 */
export type SystemMessageGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** string (可选) - 接收人账号id */
  receiveId?: string;

  /** "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}" */
  type?: "SP" | "YS" | "XM" | "XT";

  /** "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}" */
  readStatus?: "WD" | "YD";

  /** string (可选) - 阅读开始时间 | 格式: date-time */
  readStartTime?: string;

  /** string (可选) - 阅读结束时间 | 格式: date-time */
  readEndTime?: string;
}
export type SystemMessageGetPageParams = Record<string, any>
export type SystemMessageGetPageBody = any
export type SystemMessageGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageSystemMessageDTO (可选) */
  data?: YusuanModels.BasePageSystemMessageDTO;
}
export type SystemMessageGetPageGeneric = {
          query: SystemMessageGetPageQuery;
          params: SystemMessageGetPageParams;
          data: SystemMessageGetPageBody;
          result: SystemMessageGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /systemMessage/current/page 
* @summary 分页查询当前登录用户的系统消息 
* @description  
 */
export type SystemMessageGetCurrentPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** string (可选) - 接收人账号id */
  receiveId?: string;

  /** "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}" */
  type?: "SP" | "YS" | "XM" | "XT";

  /** "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}" */
  readStatus?: "WD" | "YD";

  /** string (可选) - 阅读开始时间 | 格式: date-time */
  readStartTime?: string;

  /** string (可选) - 阅读结束时间 | 格式: date-time */
  readEndTime?: string;
}
export type SystemMessageGetCurrentPageParams = Record<string, any>
export type SystemMessageGetCurrentPageBody = any
export type SystemMessageGetCurrentPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageSystemMessageDTO (可选) */
  data?: YusuanModels.BasePageSystemMessageDTO;
}
export type SystemMessageGetCurrentPageGeneric = {
          query: SystemMessageGetCurrentPageQuery;
          params: SystemMessageGetCurrentPageParams;
          data: SystemMessageGetCurrentPageBody;
          result: SystemMessageGetCurrentPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
