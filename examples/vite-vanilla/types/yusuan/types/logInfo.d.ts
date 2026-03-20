import { YusuanModels } from './models';
export namespace LogInfoModels {
/**
* @url /logInfo/page 
* @summary 分页查询 
* @description  
 */
export type LogInfoGetPageQuery = {
  /** number - 页码 | 最小值: >=1 | 格式: int32 */
  page: number;

  /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
  size?: number;

  /** string (可选) - 搜索关键字 */
  keyword?: string;

  /** number (可选) - 类型
1：操作日志2：异常日志3：登录日志 | 格式: int32 */
  typeId?: number;
}
export type LogInfoGetPageParams = Record<string, any>
export type LogInfoGetPageBody = any
export type LogInfoGetPageResponse = {
  /** number (可选) - 状态码 | 格式: int32 */
  code?: number;

  /** string (可选) - 返回信息 */
  msg?: string;

  /** YusuanModels.BasePageLogInfoDTO (可选) */
  data?: YusuanModels.BasePageLogInfoDTO;
}
export type LogInfoGetPageGeneric = {
          query: LogInfoGetPageQuery;
          params: LogInfoGetPageParams;
          data: LogInfoGetPageBody;
          result: LogInfoGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
}
