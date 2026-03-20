import { XinliModels } from './models';
export namespace ConfigModels {
/**
* @url /config/list 
* @summary 批量修改系统配置表 
* @description  
 */
export type ConfigPutListQuery = Record<string, any>
export type ConfigPutListParams = Record<string, any>
export type ConfigPutListBody = XinliModels.UpdateSysConfig[]
export type ConfigPutListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type ConfigPutListGeneric = {
          query: ConfigPutListQuery;
          params: ConfigPutListParams;
          data: ConfigPutListBody;
          result: ConfigPutListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/list 
* @summary 批量新增系统配置表 
* @description  
 */
export type ConfigPostListQuery = Record<string, any>
export type ConfigPostListParams = Record<string, any>
export type ConfigPostListBody = XinliModels.SysConfigDTO[]
export type ConfigPostListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.SysConfigDTO[];
}
export type ConfigPostListGeneric = {
          query: ConfigPostListQuery;
          params: ConfigPostListParams;
          data: ConfigPostListBody;
          result: ConfigPostListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/list 
* @summary 删除系统配置 
* @description  
 */
export type ConfigDeleteListQuery = Record<string, any>
export type ConfigDeleteListParams = Record<string, any>
export type ConfigDeleteListBody = string[]
export type ConfigDeleteListResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type ConfigDeleteListGeneric = {
          query: ConfigDeleteListQuery;
          params: ConfigDeleteListParams;
          data: ConfigDeleteListBody;
          result: ConfigDeleteListResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/item 
* @summary 修改系统配置 
* @description  
 */
export type ConfigPutItemQuery = Record<string, any>
export type ConfigPutItemParams = Record<string, any>
export type ConfigPutItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** number (可选) - 配置类型 | 格式: int32 */
  type?: number;

  /** string (可选) - name */
  name?: string;

  /** string (可选) - content */
  content?: string;
}
export type ConfigPutItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type ConfigPutItemGeneric = {
          query: ConfigPutItemQuery;
          params: ConfigPutItemParams;
          data: ConfigPutItemBody;
          result: ConfigPutItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/item 
* @summary 新增系统配置 
* @description  
 */
export type ConfigPostItemQuery = Record<string, any>
export type ConfigPostItemParams = Record<string, any>
export type ConfigPostItemBody = {
  /** string (可选) */
  id?: string;

  /** string (可选) - 格式: date-time */
  createTime?: string;

  /** string (可选) - 格式: date-time */
  updateTime?: string;

  /** number (可选) - 配置类型 | 格式: int32 */
  type?: number;

  /** string (可选) - name */
  name?: string;

  /** string (可选) - content */
  content?: string;
}
export type ConfigPostItemResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.SysConfigDTO (可选) */
  data?: XinliModels.SysConfigDTO;
}
export type ConfigPostItemGeneric = {
          query: ConfigPostItemQuery;
          params: ConfigPostItemParams;
          data: ConfigPostItemBody;
          result: ConfigPostItemResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/saveStoreCity 
* @summary 商家配置设置-城市 
* @description  
 */
export type ConfigPostSaveStoreCityQuery = Record<string, any>
export type ConfigPostSaveStoreCityParams = Record<string, any>
export type ConfigPostSaveStoreCityBody = XinliModels.SysConfigStoreCity[]
export type ConfigPostSaveStoreCityResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type ConfigPostSaveStoreCityGeneric = {
          query: ConfigPostSaveStoreCityQuery;
          params: ConfigPostSaveStoreCityParams;
          data: ConfigPostSaveStoreCityBody;
          result: ConfigPostSaveStoreCityResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/saveBasicInfo 
* @summary 基础信息设置 
* @description  
 */
export type ConfigPostSaveBasicInfoQuery = Record<string, any>
export type ConfigPostSaveBasicInfoParams = Record<string, any>
export type ConfigPostSaveBasicInfoBody = {
  /** string (可选) - 站点名称 */
  siteName?: string;

  /** string (可选) - 备案号 */
  recordNumber?: string;

  /** string (可选) - 版本号 */
  version?: string;

  /** string (可选) - logo */
  logo?: string;

  /** string (可选) - 小程序appid */
  appId?: string;

  /** string (可选) - 小程序app-secret */
  appSecret?: string;

  /** string (可选) - 腾讯地图定位key */
  mapLocationKey?: string;

  /** string (可选) - 商家默认评分 */
  defaultRating?: string;

  /** string (可选) - 小程序分享标题 */
  shareTitle?: string;

  /** string (可选) - 小程序分享图片 */
  shareImage?: string;

  /** string (可选) - 订单付款时长(分钟) */
  paymentDuration?: string;

  /** string (可选) - 订单结算时长(小时) */
  settlementDuration?: string;
}
export type ConfigPostSaveBasicInfoResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** boolean (可选) */
  data?: boolean;
}
export type ConfigPostSaveBasicInfoGeneric = {
          query: ConfigPostSaveBasicInfoQuery;
          params: ConfigPostSaveBasicInfoParams;
          data: ConfigPostSaveBasicInfoBody;
          result: ConfigPostSaveBasicInfoResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/list/query 
* @summary 批量查询系统配置表 
* @description  
 */
export type ConfigPostListQueryQuery = Record<string, any>
export type ConfigPostListQueryParams = Record<string, any>
export type ConfigPostListQueryBody = string[]
export type ConfigPostListQueryResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.SysConfigDTO[];
}
export type ConfigPostListQueryGeneric = {
          query: ConfigPostListQueryQuery;
          params: ConfigPostListQueryParams;
          data: ConfigPostListQueryBody;
          result: ConfigPostListQueryResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/page 
* @summary 系统配置分页查询 
* @description  
 */
export type ConfigGetPageQuery = {
  /** XinliModels.SysConfigPageQuery */
  params: XinliModels.SysConfigPageQuery;
}
export type ConfigGetPageParams = Record<string, any>
export type ConfigGetPageBody = any
export type ConfigGetPageResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.BasePageSysConfigDTO (可选) */
  data?: XinliModels.BasePageSysConfigDTO;
}
export type ConfigGetPageGeneric = {
          query: ConfigGetPageQuery;
          params: ConfigGetPageParams;
          data: ConfigGetPageBody;
          result: ConfigGetPageResponse;
          queryRequired: true;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/getStoreCity 
* @summary 商家配置查询-城市 
* @description  
 */
export type ConfigGetGetStoreCityQuery = Record<string, any>
export type ConfigGetGetStoreCityParams = Record<string, any>
export type ConfigGetGetStoreCityBody = any
export type ConfigGetGetStoreCityResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** array (可选) */
  data?: XinliModels.SysConfigStoreCity[];
}
export type ConfigGetGetStoreCityGeneric = {
          query: ConfigGetGetStoreCityQuery;
          params: ConfigGetGetStoreCityParams;
          data: ConfigGetGetStoreCityBody;
          result: ConfigGetGetStoreCityResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/getIsMaintenance 
* @summary 获取是否维护 
* @description  
 */
export type ConfigGetGetIsMaintenanceQuery = Record<string, any>
export type ConfigGetGetIsMaintenanceParams = Record<string, any>
export type ConfigGetGetIsMaintenanceBody = any
export type ConfigGetGetIsMaintenanceResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** string (可选) */
  data?: string;
}
export type ConfigGetGetIsMaintenanceGeneric = {
          query: ConfigGetGetIsMaintenanceQuery;
          params: ConfigGetGetIsMaintenanceParams;
          data: ConfigGetGetIsMaintenanceBody;
          result: ConfigGetGetIsMaintenanceResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/getBasicInfo 
* @summary 基础信息查询 
* @description  
 */
export type ConfigGetGetBasicInfoQuery = Record<string, any>
export type ConfigGetGetBasicInfoParams = Record<string, any>
export type ConfigGetGetBasicInfoBody = any
export type ConfigGetGetBasicInfoResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** XinliModels.SysConfigBasicInfo (可选) */
  data?: XinliModels.SysConfigBasicInfo;
}
export type ConfigGetGetBasicInfoGeneric = {
          query: ConfigGetGetBasicInfoQuery;
          params: ConfigGetGetBasicInfoParams;
          data: ConfigGetGetBasicInfoBody;
          result: ConfigGetGetBasicInfoResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
/**
* @url /config/allEnums 
* @summary 获取所有枚举信息 
* @description  
 */
export type ConfigGetAllEnumsQuery = Record<string, any>
export type ConfigGetAllEnumsParams = Record<string, any>
export type ConfigGetAllEnumsBody = any
export type ConfigGetAllEnumsResponse = {
  /** number (可选) - 格式: int32 */
  code?: number;

  /** string (可选) */
  msg?: string;

  /** object (可选) */
  data?: Record<string, Record<string, any>>;
}
export type ConfigGetAllEnumsGeneric = {
          query: ConfigGetAllEnumsQuery;
          params: ConfigGetAllEnumsParams;
          data: ConfigGetAllEnumsBody;
          result: ConfigGetAllEnumsResponse;
          queryRequired: false;
          paramsRequired: false;
          dataRequired: false;
};
     
}
