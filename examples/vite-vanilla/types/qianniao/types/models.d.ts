export namespace QianniaoModels {
  export type ResultVoid = {
    code?: number;
    message?: string;
    data?: any;
    timestamp?: number;
    success?: boolean;
  };
  export type AppCreateRequest = {
    appCode: string;
    appName: string;
    appUrl?: string;
    appIcon?: string;
    appDesc?: string;
    appType?: "WEB" | "MINIAPP";
    logoutUrl?: string;
    sortOrder?: number;
    remark?: string;
  };
  export type ResultUploadResultDTO = {
    code?: number;
    message?: string;
    data?: UploadResultDTO;
    timestamp?: number;
    success?: boolean;
  };
  export type UploadResultDTO = {
    originalFileName?: string;
    savePath?: string;
  };
  export type ResultListUploadResultDTO = {
    code?: number;
    message?: string;
    data?: UploadResultDTO[];
    timestamp?: number;
    success?: boolean;
  };
  export type AppInfo = {
    appId?: number;
    appCode?: string;
    appName?: string;
    appUrl?: string;
    appIcon?: string;
  };
  export type ResultUserInfo = {
    code?: number;
    message?: string;
    data?: UserInfo;
    timestamp?: number;
    success?: boolean;
  };
  export type UserInfo = {
    userId?: number;
    username?: string;
    realName?: string;
    phone?: string;
    avatar?: string;
    tenantId?: number;
    tenantName?: string;
    apps?: AppInfo[];
  };
  export type RefreshTokenRequest = {
    refreshToken: string;
  };
  export type ResultTokenInfo = {
    code?: number;
    message?: string;
    data?: TokenInfo;
    timestamp?: number;
    success?: boolean;
  };
  export type TokenInfo = {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    tokenType?: string;
  };
  export type LoginRequest = {
    username: string;
    password: string;
  };
  export type LoginResponse = {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    tokenType?: string;
    userInfo?: UserInfo;
  };
  export type ResultLoginResponse = {
    code?: number;
    message?: string;
    data?: LoginResponse;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultMapStringObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultMapStringString = {
    code?: number;
    message?: string;
    data?: Record<string, string>;
    timestamp?: number;
    success?: boolean;
  };
  export type Result = {
    code?: number;
    message?: string;
    data?: any;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultSysOperLog = {
    code?: number;
    message?: string;
    data?: SysOperLog;
    timestamp?: number;
    success?: boolean;
  };
  export type SysOperLog = {
    id?: number;
    userId?: number;
    username?: string;
    tenantId?: number;
    module?: string;
    operType?: "OTHER" | "INSERT" | "UPDATE" | "DELETE" | "QUERY" | "EXPORT" | "IMPORT" | "GRANT" | "FORCE_LOGOUT";
    operDesc?: string;
    methodName?: string;
    requestMethod?: string;
    requestUrl?: string;
    requestParams?: string;
    responseResult?: string;
    errorMsg?: string;
    operIp?: string;
    operLocation?: string;
    costTime?: number;
    status?: "SUCCESS" | "FAIL";
    operTime?: string;
  };
  export type PageResultSysOperLog = {
    pageNum?: number;
    pageSize?: number;
    total?: number;
    pages?: number;
    list?: SysOperLog[];
  };
  export type ResultPageResultSysOperLog = {
    code?: number;
    message?: string;
    data?: PageResultSysOperLog;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultSysLoginLog = {
    code?: number;
    message?: string;
    data?: SysLoginLog;
    timestamp?: number;
    success?: boolean;
  };
  export type SysLoginLog = {
    id?: number;
    userId?: number;
    username?: string;
    loginType?: "PASSWORD" | "MINIAPP";
    loginIp?: string;
    loginLocation?: string;
    browser?: string;
    os?: string;
    device?: string;
    status?: "SUCCESS" | "FAIL";
    message?: string;
    loginTime?: string;
  };
  export type PageResultSysLoginLog = {
    pageNum?: number;
    pageSize?: number;
    total?: number;
    pages?: number;
    list?: SysLoginLog[];
  };
  export type ResultPageResultSysLoginLog = {
    code?: number;
    message?: string;
    data?: PageResultSysLoginLog;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultSysExceptionLog = {
    code?: number;
    message?: string;
    data?: SysExceptionLog;
    timestamp?: number;
    success?: boolean;
  };
  export type SysExceptionLog = {
    id?: number;
    userId?: number;
    username?: string;
    exceptionType?: string;
    exceptionMessage?: string;
    exceptionStack?: string;
    requestUrl?: string;
    requestMethod?: string;
    requestParams?: string;
    className?: string;
    methodName?: string;
    lineNumber?: number;
    exceptionIp?: string;
    exceptionTime?: string;
  };
  export type PageResultSysExceptionLog = {
    pageNum?: number;
    pageSize?: number;
    total?: number;
    pages?: number;
    list?: SysExceptionLog[];
  };
  export type ResultPageResultSysExceptionLog = {
    code?: number;
    message?: string;
    data?: PageResultSysExceptionLog;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultSysApp = {
    code?: number;
    message?: string;
    data?: SysApp;
    timestamp?: number;
    success?: boolean;
  };
  export type SysApp = {
    id?: number;
    appCode?: string;
    appName?: string;
    appKey?: string;
    appSecret?: string;
    appUrl?: string;
    appIcon?: string;
    appDesc?: string;
    appType?: "WEB" | "MINIAPP";
    logoutUrl?: string;
    sortOrder?: number;
    status?: "ENABLE" | "DISABLE";
    remark?: string;
    createTime?: string;
    updateTime?: string;
    createBy?: string;
    updateBy?: string;
    deleted?: number;
  };
  export type PageResultSysApp = {
    pageNum?: number;
    pageSize?: number;
    total?: number;
    pages?: number;
    list?: SysApp[];
  };
  export type ResultPageResultSysApp = {
    code?: number;
    message?: string;
    data?: PageResultSysApp;
    timestamp?: number;
    success?: boolean;
  };
  export type ResultInteger = {
    code?: number;
    message?: string;
    data?: number;
    timestamp?: number;
    success?: boolean;
  };
}
