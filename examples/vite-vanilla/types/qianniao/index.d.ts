import * as tsTypes from "./types";
import type { ApiFunctionGenerate } from "un-api-builder";
export {};
declare module "@qianniao" {
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | app | getById | /app/{id} | GET | 获取应用详情 |
   * | app | putById | /app/{id} | PUT | 更新应用 |
   * | app | deleteById | /app/{id} | DELETE | 删除应用 |
   * | app | post | /app | POST | 创建应用 |
   * | app | postByIdStatus | /app/{id}/status | POST | 修改状态 |
   * | app | postByIdRegenerateSecret | /app/{id}/regenerate-secret | POST | 重新生成密钥 |
   * | app | getPage | /app/page | GET | 分页查询应用 |
   * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
   * | file | postUploadBatch | /file/upload/batch | POST | 批量上传文件（FormData） |
   * | file | getDownload | /file/download | GET | 下载文件 |
   * | auth | postValidate | /auth/validate | POST | 验证Token |
   * | auth | postRefresh | /auth/refresh | POST | 刷新Token |
   * | auth | postLogout | /auth/logout | POST | 用户登出 |
   * | auth | postLogin | /auth/login | POST | 用户登录 |
   * | auth | getInfo | /auth/info | GET | 获取当前用户信息 |
   * | user | getAllEnums | /user/allEnums | GET | 获取所有枚举信息 |
   * | log | getOperById | /log/oper/{id} | GET | 获取操作日志详情 |
   * | log | getOperPage | /log/oper/page | GET | 分页查询操作日志 |
   * | log | getLoginById | /log/login/{id} | GET | 获取登录日志详情 |
   * | log | getLoginPage | /log/login/page | GET | 分页查询登录日志 |
   * | log | getExceptionById | /log/exception/{id} | GET | 获取异常日志详情 |
   * | log | getExceptionPage | /log/exception/page | GET | 分页查询异常日志 |
   * | log | deleteOperClean | /log/oper/clean | DELETE | 清理操作日志 |
   * | log | deleteLoginClean | /log/login/clean | DELETE | 清理登录日志 |
   * | log | deleteExceptionClean | /log/exception/clean | DELETE | 清理异常日志 |
   */
  const apiQianniao: {
    app: {
      getById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppGetByIdGeneric>;
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppDeleteByIdGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostGeneric>;
      postByIdStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostByIdStatusGeneric>;
      postByIdRegenerateSecret: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostByIdRegenerateSecretGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppGetPageGeneric>;
    };
    file: {
      postUpload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadGeneric>;
      postUploadBatch: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadBatchGeneric>;
      getDownload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FileGetDownloadGeneric>;
    };
    auth: {
      postValidate: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostValidateGeneric>;
      postRefresh: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostRefreshGeneric>;
      postLogout: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostLogoutGeneric>;
      postLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostLoginGeneric>;
      getInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthGetInfoGeneric>;
    };
    user: {
      getAllEnums: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetAllEnumsGeneric>;
    };
    log: {
      getOperById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetOperByIdGeneric>;
      getOperPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetOperPageGeneric>;
      getLoginById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetLoginByIdGeneric>;
      getLoginPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetLoginPageGeneric>;
      getExceptionById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetExceptionByIdGeneric>;
      getExceptionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetExceptionPageGeneric>;
      deleteOperClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteOperCleanGeneric>;
      deleteLoginClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteLoginCleanGeneric>;
      deleteExceptionClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteExceptionCleanGeneric>;
    };
  };
  export default apiQianniao;
}
