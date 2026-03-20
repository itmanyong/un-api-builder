import * as tsTypes from "./types";
import type { ApiFunctionGenerate } from "un-api-builder";
export {};
declare module "@yusuan" {
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
   * | file | postUploadList | /file/upload/list | POST | 批量上传文件（FormData） |
   * | file | postUploadListBase64 | /file/upload/list/base64 | POST | 批量上传文件（Base64） |
   * | file | getDownload | /file/download | GET | 下载文件 |
   * | user | putById | /user/{id} | PUT | 修改用户信息 |
   * | user | post | /user | POST | 新增用户信息 |
   * | user | postList | /user/list | POST | 根据userId集合获取用户列表 |
   * | user | postListByAccount | /user/listByAccount | POST | 根据accountId集合获取用户列表 |
   * | user | getPage | /user/page | GET | 分页查询 |
   * | user | getGetIMLink | /user/getIMLink | GET | 获取IM连接加密信息 |
   * | user | getGetAccountInfo | /user/getAccountInfo | GET | 获取当前登录用户的信息 |
   * | systemMessage | putReadById | /systemMessage/read/{id} | PUT | 指定消息为已读状态 |
   * | systemMessage | getPage | /systemMessage/page | GET | 分页查询 |
   * | systemMessage | getCurrentPage | /systemMessage/current/page | GET | 分页查询当前登录用户的系统消息 |
   * | role | getById | /role/{id} | GET | 根据ID查询一条数据 |
   * | role | putById | /role/{id} | PUT | 根据id修改一条数据 |
   * | role | deleteById | /role/{id} | DELETE | 根据id删除数据 |
   * | role | putList | /role/list | PUT | 批量修改数据 |
   * | role | postList | /role/list | POST | 批量添加数据 |
   * | role | deleteList | /role/list | DELETE | 根据id集合批量删除数据 |
   * | role | post | /role | POST | 添加一条数据 |
   * | role | postListQuery | /role/list/query | POST | 根据id集合获取列表 |
   * | role | getPage | /role/page | GET | 分页查询 |
   * | project | put | /project | PUT | 修改项目 |
   * | project | post | /project | POST | 新增项目 |
   * | project | postList | /project/list | POST | 根据id集合获取列表 |
   * | project | getPage | /project/page | GET | 分页查询 |
   * | project | putStatusChange | /project/statusChange | PUT | 修改项目状态 |
   * | project | postStatusChange | /project/statusChange | POST | 新增项目状态 |
   * | project | postStatusChangeList | /project/statusChange/list | POST | 根据id集合获取列表 |
   * | project | getStatusChangePage | /project/statusChange/page | GET | 分页查询 |
   * | project | putLifeCycle | /project/lifeCycle | PUT | 修改任务 |
   * | project | postLifeCycle | /project/lifeCycle | POST | 新增任务 |
   * | project | putLifeCycleStatus | /project/lifeCycle/status | PUT | 修改状态 |
   * | project | postLifeCycleList | /project/lifeCycle/list | POST | 根据id集合获取列表 |
   * | project | getLifeCyclePage | /project/lifeCycle/page | GET | 分页查询 |
   * | projectCategory | putById | /projectCategory/{id} | PUT | 修改类目数据 |
   * | projectCategory | putStatus | /projectCategory/status | PUT | 批量修改状态 |
   * | projectCategory | post | /projectCategory | POST | 新增类目数据 |
   * | projectCategory | postList | /projectCategory/list | POST | 根据id集合获取列表 |
   * | projectCategory | getPage | /projectCategory/page | GET | 分页查询 |
   * | permissionMenus | getById | /permissionMenus/{id} | GET | 根据ID查询一条数据 |
   * | permissionMenus | putById | /permissionMenus/{id} | PUT | 根据id修改一条数据 |
   * | permissionMenus | deleteById | /permissionMenus/{id} | DELETE | 根据id删除数据 |
   * | permissionMenus | putList | /permissionMenus/list | PUT | 批量修改数据 |
   * | permissionMenus | postList | /permissionMenus/list | POST | 批量添加数据 |
   * | permissionMenus | deleteList | /permissionMenus/list | DELETE | 根据id集合批量删除数据 |
   * | permissionMenus | post | /permissionMenus | POST | 添加一条数据 |
   * | permissionMenus | postListQuery | /permissionMenus/list/query | POST | 根据id集合获取列表 |
   * | permissionMenus | getPage | /permissionMenus/page | GET | 分页查询 |
   * | permissionMenus | getCurrent | /permissionMenus/current | GET | 获取当前登录用户拥有的菜单功能权限 |
   * | financeCategory | putById | /financeCategory/{id} | PUT | 修改类目数据 |
   * | financeCategory | putStatus | /financeCategory/status | PUT | 批量修改状态 |
   * | financeCategory | post | /financeCategory | POST | 新增类目数据 |
   * | financeCategory | postList | /financeCategory/list | POST | 根据id集合获取列表 |
   * | financeCategory | getPage | /financeCategory/page | GET | 分页查询 |
   * | finance | putById | /finance/{id} | PUT | 修改资金批次 |
   * | finance | putStatus | /finance/status | PUT | 批量修改状态 |
   * | finance | post | /finance | POST | 新增资金批次 |
   * | finance | postList | /finance/list | POST | 根据id集合获取列表 |
   * | finance | getPage | /finance/page | GET | 分页查询 |
   * | finance | putDepartmentById | /finance/department/{id} | PUT | 修改分配给部门的资金 |
   * | finance | putDepartmentStatus | /finance/department/status | PUT | 批量修改状态 |
   * | finance | postDepartment | /finance/department | POST | 新增资金分配给部门（从批次上分配给顶级部门） |
   * | finance | postDepartmentList | /finance/department/list | POST | 根据id集合获取列表 |
   * | finance | postDepartmentChild | /finance/department/child | POST | 新增资金分配给部门（分配给子部门） |
   * | finance | getDepartmentPage | /finance/department/page | GET | 分页查询 |
   * | finance | putCategoryById | /finance/category/{id} | PUT | 修改部门分配资金类目 |
   * | finance | putCategoryStatus | /finance/category/status | PUT | 批量修改状态 |
   * | finance | postCategory | /finance/category | POST | 新增部门下资金分配给类目 |
   * | finance | postCategoryList | /finance/category/list | POST | 根据id集合获取列表 |
   * | finance | getCategoryPage | /finance/category/page | GET | 分页查询 |
   * | finance | postCategoryProjectByAllocationCategoryId | /finance/category/project/{allocationCategoryId} | POST | 批量关联项目类目id |
   * | finance | getCategoryProjectPage | /finance/category/project/page | GET | 分页查询 |
   * | dictType | putById | /dictType/{id} | PUT | 修改字典类型 |
   * | dictType | deleteById | /dictType/{id} | DELETE | 删除字典类型 |
   * | dictType | putStatusById | /dictType/status/{id} | PUT | 修改状态 |
   * | dictType | post | /dictType | POST | 新增字典类型 |
   * | dictType | getPage | /dictType/page | GET | 分页查询 |
   * | dictType | deleteList | /dictType/list | DELETE | 批量删除字典类型 |
   * | dictData | putById | /dictData/{id} | PUT | 修改字典数据 |
   * | dictData | deleteById | /dictData/{id} | DELETE | 删除字典数据 |
   * | dictData | putStatusById | /dictData/status/{id} | PUT | 修改状态 |
   * | dictData | post | /dictData | POST | 新增字典数据 |
   * | dictData | getPage | /dictData/page | GET | 分页查询 |
   * | dictData | deleteList | /dictData/list | DELETE | 批量删除字典数据 |
   * | department | putById | /department/{id} | PUT | 修改部门数据 |
   * | department | deleteById | /department/{id} | DELETE | 删除部门数据 |
   * | department | putStatus | /department/status | PUT | 批量修改状态 |
   * | department | post | /department | POST | 新增部门数据 |
   * | department | postList | /department/list | POST | 根据id集合获取列表 |
   * | department | deleteList | /department/list | DELETE | 批量删除部门数据 |
   * | department | getPage | /department/page | GET | 分页查询 |
   * | config | putUpdate | /config/update | PUT | 修改系统配置(自定义) |
   * | config | postSave | /config/save | POST | 新增系统配置(自定义) |
   * | config | getItem | /config/item | GET | 根据key获取配置项 |
   * | config | getEnums | /config/enums | GET | 获取所有枚举信息 |
   * | approval | put | /approval | PUT | 修改 |
   * | approval | post | /approval | POST | 新增 |
   * | approval | postList | /approval/list | POST | 根据id集合获取列表 |
   * | approval | deleteList | /approval/list | DELETE | 批量删除 |
   * | approval | postHistoryPage | /approval/history/page | POST | 分配历史记录分页查询 |
   * | approval | getPage | /approval/page | GET | 分页查询 |
   * | approval | getHistoryByApprovalIdByLot | /approval/history/{approvalId}/{lot} | GET | 获取指定单子指定阶段最新的审批人知会人 |
   * | approval | deleteById | /approval/{id} | DELETE | 删除 |
   * | approval | putRecord | /approval/record | PUT | 修改 |
   * | approval | postRecord | /approval/record | POST | 新增 |
   * | approval | putRecordBack | /approval/record/back | PUT | 退回 |
   * | approval | postRecordList | /approval/record/list | POST | 根据id集合获取列表 |
   * | approval | getRecordPage | /approval/record/page | GET | 分页查询 |
   * | approval | deleteRecordById | /approval/record/{id} | DELETE | 删除 |
   * | account | putUpdatePasswordCurrent | /account/updatePassword/current | PUT | 当前登录用户修改密码 |
   * | account | putUpdatePasswordAdmin | /account/updatePassword/admin | PUT | 超管修改指定用户密码 |
   * | account | putStatus | /account/status | PUT | 批量修改状态 |
   * | account | postLogin | /account/login | POST | 用户登录 |
   * | logInfo | getPage | /logInfo/page | GET | 分页查询 |
   */
  export const apiYusuan: {
    file: {
      postUpload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadGeneric>;
      postUploadList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadListGeneric>;
      postUploadListBase64: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadListBase64Generic>;
      getDownload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FileGetDownloadGeneric>;
    };
    user: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserPutByIdGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserPostListGeneric>;
      postListByAccount: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserPostListByAccountGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetPageGeneric>;
      getGetIMLink: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetGetIMLinkGeneric>;
      getGetAccountInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetGetAccountInfoGeneric>;
    };
    systemMessage: {
      putReadById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePutReadByIdGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageGetPageGeneric>;
      getCurrentPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageGetCurrentPageGeneric>;
    };
    role: {
      getById: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleGetByIdGeneric>;
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleDeleteByIdGeneric>;
      putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePutListGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePostListGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleDeleteListGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePostGeneric>;
      postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePostListQueryGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleGetPageGeneric>;
    };
    project: {
      put: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPutGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostListGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectGetPageGeneric>;
      putStatusChange: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPutStatusChangeGeneric>;
      postStatusChange: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostStatusChangeGeneric>;
      postStatusChangeList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostStatusChangeListGeneric>;
      getStatusChangePage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectGetStatusChangePageGeneric>;
      putLifeCycle: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPutLifeCycleGeneric>;
      postLifeCycle: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostLifeCycleGeneric>;
      putLifeCycleStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPutLifeCycleStatusGeneric>;
      postLifeCycleList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectPostLifeCycleListGeneric>;
      getLifeCyclePage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectModels.ProjectGetLifeCyclePageGeneric>;
    };
    projectCategory: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectCategoryModels.ProjectCategoryPutByIdGeneric>;
      putStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectCategoryModels.ProjectCategoryPutStatusGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectCategoryModels.ProjectCategoryPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectCategoryModels.ProjectCategoryPostListGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ProjectCategoryModels.ProjectCategoryGetPageGeneric>;
    };
    permissionMenus: {
      getById: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusGetByIdGeneric>;
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusPutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusDeleteByIdGeneric>;
      putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusPutListGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusPostListGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusDeleteListGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusPostGeneric>;
      postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusPostListQueryGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusGetPageGeneric>;
      getCurrent: ApiFunctionGenerate<RequestInit, Response, tsTypes.PermissionMenusModels.PermissionMenusGetCurrentGeneric>;
    };
    financeCategory: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceCategoryModels.FinanceCategoryPutByIdGeneric>;
      putStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceCategoryModels.FinanceCategoryPutStatusGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceCategoryModels.FinanceCategoryPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceCategoryModels.FinanceCategoryPostListGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceCategoryModels.FinanceCategoryGetPageGeneric>;
    };
    finance: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutByIdGeneric>;
      putStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutStatusGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostListGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinanceGetPageGeneric>;
      putDepartmentById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutDepartmentByIdGeneric>;
      putDepartmentStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutDepartmentStatusGeneric>;
      postDepartment: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostDepartmentGeneric>;
      postDepartmentList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostDepartmentListGeneric>;
      postDepartmentChild: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostDepartmentChildGeneric>;
      getDepartmentPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinanceGetDepartmentPageGeneric>;
      putCategoryById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutCategoryByIdGeneric>;
      putCategoryStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePutCategoryStatusGeneric>;
      postCategory: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostCategoryGeneric>;
      postCategoryList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinancePostCategoryListGeneric>;
      getCategoryPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinanceGetCategoryPageGeneric>;
      postCategoryProjectByAllocationCategoryId: ApiFunctionGenerate<
        RequestInit,
        Response,
        tsTypes.FinanceModels.FinancePostCategoryProjectByAllocationCategoryIdGeneric
      >;
      getCategoryProjectPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FinanceModels.FinanceGetCategoryProjectPageGeneric>;
    };
    dictType: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypePutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypeDeleteByIdGeneric>;
      putStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypePutStatusByIdGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypePostGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypeGetPageGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictTypeModels.DictTypeDeleteListGeneric>;
    };
    dictData: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataPutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataDeleteByIdGeneric>;
      putStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataPutStatusByIdGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataPostGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataGetPageGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictDataModels.DictDataDeleteListGeneric>;
    };
    department: {
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentPutByIdGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentDeleteByIdGeneric>;
      putStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentPutStatusGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentPostListGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentDeleteListGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DepartmentModels.DepartmentGetPageGeneric>;
    };
    config: {
      putUpdate: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPutUpdateGeneric>;
      postSave: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostSaveGeneric>;
      getItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetItemGeneric>;
      getEnums: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetEnumsGeneric>;
    };
    approval: {
      put: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPutGeneric>;
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPostGeneric>;
      postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPostListGeneric>;
      deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalDeleteListGeneric>;
      postHistoryPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPostHistoryPageGeneric>;
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalGetPageGeneric>;
      getHistoryByApprovalIdByLot: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalGetHistoryByApprovalIdByLotGeneric>;
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalDeleteByIdGeneric>;
      putRecord: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPutRecordGeneric>;
      postRecord: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPostRecordGeneric>;
      putRecordBack: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPutRecordBackGeneric>;
      postRecordList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalPostRecordListGeneric>;
      getRecordPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalGetRecordPageGeneric>;
      deleteRecordById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ApprovalModels.ApprovalDeleteRecordByIdGeneric>;
    };
    account: {
      putUpdatePasswordCurrent: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutUpdatePasswordCurrentGeneric>;
      putUpdatePasswordAdmin: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutUpdatePasswordAdminGeneric>;
      putStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutStatusGeneric>;
      postLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPostLoginGeneric>;
    };
    logInfo: {
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogInfoModels.LogInfoGetPageGeneric>;
    };
  };
}
