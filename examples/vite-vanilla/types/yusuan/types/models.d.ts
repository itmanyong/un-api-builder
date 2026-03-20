export namespace YusuanModels {
export type ResultBoolean = {
  code?: number;
  msg?: string;
  data?: boolean;
}
export type UpdateUserInfoDTO = {
  realName?: string;
  cardNumber?: string;
  sex?: "MAN" | "WOMAN" | "UNKNOWN";
  phone?: string;
  departmentId?: string;
  remark?: string;
  nickName?: string;
  avatarPicPath?: string;
  roleIds?: string;
}
export type RoleInfoDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  name: string;
  code: string;
  permissionIds?: string;
}
export type PermissionMenusDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  name: string;
  type: "MENU" | "FUNCTION" | "GROUP";
  code: string;
  parentId: string;
  path?: string;
  extend?: string;
  sort?: number;
  component?: string;
  title?: string;
  isHidden?: boolean;
}
export type DictTypeDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  dictName: string;
  dictType: string;
  status?: "ENABLE" | "DISABLE";
  remark?: string;
}
export type ProjectCategoryDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  parentId?: string;
  code?: string;
  name?: string;
  sort?: number;
  status?: "ENABLE" | "DISABLE";
  remark?: string;
}
export type UpdateProjectInfoDTO = {
  id: string;
  title: string;
  code: string;
  remarks?: string;
  files?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  total: number;
}
export type DictDataDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  dictType: string;
  dictLabel?: string;
  dictSort?: number;
  dictValue?: string;
  color?: string;
  logo?: string;
  status?: "ENABLE" | "DISABLE";
  remark?: string;
}
export type UpdateStatusDTO = {
  ids: string[];
  status: "ENABLE" | "DISABLE";
}
export type DepartmentDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  parentId: string;
  code: string;
  name: string;
  sort?: number;
  status?: "ENABLE" | "DISABLE";
  remark?: string;
}
export type FinanceCategoryDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  parentId?: string;
  code?: string;
  name?: string;
  sort?: number;
  status?: "ENABLE" | "DISABLE";
  remark?: string;
}
export type SystemConfigDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  key: string;
  value: string;
}
export type UpdateProjectStatusChangeDTO = {
  id: string;
  changeTime?: string;
  remarks?: string;
  files?: string;
}
export type UpdatePasswordCurrentDTO = {
  oldPassword: string;
  newPassword: string;
}
export type AddFinanceInfoDTO = {
  id?: string;
  title?: string;
  code?: string;
  total?: number;
  year?: number;
  abortTime?: string;
  remarks?: string;
  files?: string;
}
export type UpdateProjectLifeCycleDTO = {
  id: string;
  title: string;
  runAccountId?: string;
  completeAccountId?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  sort?: number;
  remarks?: string;
  files?: string;
}
export type UpdatePasswordAdminDTO = {
  accountId: string;
  password: string;
}
export type UpdateFinanceAllocationDepartmentDTO = {
  id?: string;
  total?: number;
  abortTime?: string;
  remarks?: string;
  files?: string;
}
export type UpdateProjectLifeCycleStatusDTO = {
  id: string;
  status: "WKS" | "ZXZ" | "YWC";
}
export type ResultRoleInfoDTO = {
  code?: number;
  msg?: string;
  data?: RoleInfoDTO;
}
export type UpdateFinanceAllocationCategoryDTO = {
  id?: string;
  total?: number;
  abortTime?: string;
  remarks?: string;
  files?: string;
}
export type ResultListRoleInfoDTO = {
  code?: number;
  msg?: string;
  data?: RoleInfoDTO[];
}
export type AddUserInfoDTO = {
  realName?: string;
  cardNumber?: string;
  sex?: "MAN" | "WOMAN" | "UNKNOWN";
  phone?: string;
  departmentId: string;
  remark?: string;
  userName: string;
  userPassword: string;
  userType: "SUPPER" | "NOMAL";
  nickName?: string;
  avatarPicPath?: string;
  roleIds?: string;
}
export type ResultPermissionMenusDTO = {
  code?: number;
  msg?: string;
  data?: PermissionMenusDTO;
}
export type ResultUserInfoDTO = {
  code?: number;
  msg?: string;
  data?: UserInfoDTO;
}
export type ResultListPermissionMenusDTO = {
  code?: number;
  msg?: string;
  data?: PermissionMenusDTO[];
}
export type ResultDictTypeDTO = {
  code?: number;
  msg?: string;
  data?: DictTypeDTO;
}
export type ResultDictDataDTO = {
  code?: number;
  msg?: string;
  data?: DictDataDTO;
}
export type ResultDepartmentDTO = {
  code?: number;
  msg?: string;
  data?: DepartmentDTO;
}
export type ResultSystemConfigDTO = {
  code?: number;
  msg?: string;
  data?: SystemConfigDTO;
}
export type UserLoginDTO = {
  userName: string;
  password: string;
}
export type ResultProjectCategoryDTO = {
  code?: number;
  msg?: string;
  data?: ProjectCategoryDTO;
}
export type ResultString = {
  code?: number;
  msg?: string;
  data?: string;
}
export type AddApprovalDTO = {
  id: string;
  title: string;
  status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  content?: string;
  remarks?: string;
  files?: string;
  approveAccountIds: string;
  approveCondition: "AND" | "OR";
  copyAccountIds?: string;
}
export type AccountInfoPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  userType?: "SUPPER" | "NOMAL";
  isLock?: boolean;
  status?: "ENABLE" | "DISABLE";
  startTime?: string;
  endTime?: string;
  sex?: "MAN" | "WOMAN" | "UNKNOWN";
  departmentId?: string;
}
export type AddApprovalRecordDTO = {
  id: string;
  approvalId: string;
  status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  suggestion?: string;
  files?: string;
  isSubmit: boolean;
  approveAccountIds?: string;
  approveCondition?: "AND" | "OR";
  copyAccountIds?: string;
}
export type BasePageUserInfoDTO = {
  total?: number;
  list?: UserInfoDTO[];
}
export type ResultFinanceCategoryDTO = {
  code?: number;
  msg?: string;
  data?: FinanceCategoryDTO;
}
export type ApprovalBackDTO = {
  approvalId: string;
  suggestion?: string;
  files?: string;
}
export type ResultBasePageUserInfoDTO = {
  code?: number;
  msg?: string;
  data?: BasePageUserInfoDTO;
}
export type UserInfoDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  accountId?: string;
  realName?: string;
  cardNumber?: string;
  sex?: "MAN" | "WOMAN" | "UNKNOWN";
  phone?: string;
  departmentId?: string;
  remark?: string;
  userName?: string;
  userType?: "SUPPER" | "NOMAL";
  nickName?: string;
  lastLoginTime?: string;
  lastLoginIp?: string;
  isLock?: boolean;
  status?: "ENABLE" | "DISABLE";
  loginErrorCount?: number;
  loginErrorTime?: string;
  avatarPicPath?: string;
  roleIds?: string;
  dataScope?: string;
}
export type FinanceInfoDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  title?: string;
  code?: string;
  total?: number;
  used?: number;
  surplus?: number;
  year?: number;
  abortTime?: string;
  remarks?: string;
  status?: "ENABLE" | "DISABLE";
  files?: string;
}
export type SystemMessagePageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  receiveId?: string;
  type?: "SP" | "YS" | "XM" | "XT";
  readStatus?: "WD" | "YD";
  readStartTime?: string;
  readEndTime?: string;
}
export type ResultFinanceInfoDTO = {
  code?: number;
  msg?: string;
  data?: FinanceInfoDTO;
}
export type BasePageSystemMessageDTO = {
  total?: number;
  list?: SystemMessageDTO[];
}
export type ResultBasePageSystemMessageDTO = {
  code?: number;
  msg?: string;
  data?: BasePageSystemMessageDTO;
}
export type AddProjectInfoDTO = {
  departmentId: string;
  financeId: string;
  title: string;
  code: string;
  remarks?: string;
  files?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  total: number;
  parentId: string;
  categoryId: string;
  allocationCategoryId: string;
}
export type SystemMessageDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  receiveId?: string;
  title?: string;
  content?: string;
  extend?: string;
  type?: "SP" | "YS" | "XM" | "XT";
  readStatus?: "WD" | "YD";
  readTime?: string;
}
export type AddFinanceAllocationDepartmentDTO = {
  total?: number;
  abortTime?: string;
  remarks?: string;
  files?: string;
  financeId?: string;
  departmentId?: string;
}
export type ProjectInfoDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  creator?: string;
  departmentId?: string;
  financeId?: string;
  title?: string;
  code?: string;
  remarks?: string;
  status?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  files?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  total?: number;
  used?: number;
  surplus?: number;
  parentId?: string;
  runStartTime?: string;
  runEndTime?: string;
  progress?: number;
  categoryId?: string;
  allocationCategoryId?: string;
}
export type ResultListUserInfoDTO = {
  code?: number;
  msg?: string;
  data?: UserInfoDTO[];
}
export type BasePageQuery = {
  page: number;
  size?: number;
  keyword?: string;
}
export type ResultProjectInfoDTO = {
  code?: number;
  msg?: string;
  data?: ProjectInfoDTO;
}
export type BasePageRoleInfoDTO = {
  total?: number;
  list?: RoleInfoDTO[];
}
export type AddFinanceAllocationCategoryDTO = {
  total?: number;
  abortTime?: string;
  remarks?: string;
  files?: string;
  financeCategoryId?: string;
  allocationDepartmentId?: string;
}
export type ResultBasePageRoleInfoDTO = {
  code?: number;
  msg?: string;
  data?: BasePageRoleInfoDTO;
}
export type FinanceAllocationCategoryDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  financeId?: string;
  departmentId?: string;
  financeCategoryId?: string;
  allocationDepartmentId?: string;
  total?: number;
  used?: number;
  surplus?: number;
  abortTime?: string;
  status?: "ENABLE" | "DISABLE";
  files?: string;
  remarks?: string;
}
export type AddProjectStatusChangeDTO = {
  projectId: string;
  status: "WKS" | "ZXZ" | "YWJ" | "YQX";
  changeTime?: string;
  remarks?: string;
  files?: string;
}
export type BasePagePermissionMenusDTO = {
  total?: number;
  list?: PermissionMenusDTO[];
}
export type ResultFinanceAllocationCategoryDTO = {
  code?: number;
  msg?: string;
  data?: FinanceAllocationCategoryDTO;
}
export type ProjectStatusChangeDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  creator?: string;
  departmentId?: string;
  projectId?: string;
  oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  changeTime?: string;
  remarks?: string;
  files?: string;
}
export type ResultBasePagePermissionMenusDTO = {
  code?: number;
  msg?: string;
  data?: BasePagePermissionMenusDTO;
}
export type AddAllocationProjectCategoryDTO = {
  projectCategoryId: string;
}
export type ResultProjectStatusChangeDTO = {
  code?: number;
  msg?: string;
  data?: ProjectStatusChangeDTO;
}
export type Result = {
  code?: number;
  msg?: string;
  data?: Record<string, any>;
}
export type AddProjectLifeCycleDTO = {
  title: string;
  parentId: string;
  projectId: string;
  runAccountId?: string;
  completeAccountId?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  sort?: number;
  remarks?: string;
  files?: string;
}
export type DictTypePageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  status?: "ENABLE" | "DISABLE";
}
export type ProjectLifeCycleDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  title?: string;
  creator?: string;
  departmentId?: string;
  parentId?: string;
  projectId?: string;
  runAccountId?: string;
  completeAccountId?: string;
  planStartTime?: string;
  planEndTime?: string;
  actualStartTime?: string;
  actualEndTime?: string;
  sort?: number;
  remarks?: string;
  files?: string;
  status?: "WKS" | "ZXZ" | "YWC";
}
export type ResultListProjectCategoryDTO = {
  code?: number;
  msg?: string;
  data?: ProjectCategoryDTO[];
}
export type BasePageDictTypeDTO = {
  total?: number;
  list?: DictTypeDTO[];
}
export type ResultProjectLifeCycleDTO = {
  code?: number;
  msg?: string;
  data?: ProjectLifeCycleDTO;
}
export type ResultBasePageDictTypeDTO = {
  code?: number;
  msg?: string;
  data?: BasePageDictTypeDTO;
}
export type DictDataPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  status?: "ENABLE" | "DISABLE";
}
export type BasePageDictDataDTO = {
  total?: number;
  list?: DictDataDTO[];
}
export type ResultListProjectStatusChangeDTO = {
  code?: number;
  msg?: string;
  data?: ProjectStatusChangeDTO[];
}
export type ResultBasePageDictDataDTO = {
  code?: number;
  msg?: string;
  data?: BasePageDictDataDTO;
}
export type BasePageProjectCategoryDTO = {
  total?: number;
  list?: ProjectCategoryDTO[];
}
export type ResultListProjectInfoDTO = {
  code?: number;
  msg?: string;
  data?: ProjectInfoDTO[];
}
export type DepartmentPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  parentId?: string;
}
export type ResultBasePageProjectCategoryDTO = {
  code?: number;
  msg?: string;
  data?: BasePageProjectCategoryDTO;
}
export type BasePageDepartmentDTO = {
  total?: number;
  list?: DepartmentDTO[];
}
export type ResultBasePageDepartmentDTO = {
  code?: number;
  msg?: string;
  data?: BasePageDepartmentDTO;
}
export type ResultListProjectLifeCycleDTO = {
  code?: number;
  msg?: string;
  data?: ProjectLifeCycleDTO[];
}
export type LogInfoPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  typeId?: number;
}
export type BasePageLogInfoDTO = {
  total?: number;
  list?: LogInfoDTO[];
}
export type LogInfoDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  typeId?: number;
  message?: string;
  stackInfo?: string;
  url?: string;
  ipAddress?: string;
}
export type ResultBasePageLogInfoDTO = {
  code?: number;
  msg?: string;
  data?: BasePageLogInfoDTO;
}
export type BasePageFinanceCategoryDTO = {
  total?: number;
  list?: FinanceCategoryDTO[];
}
export type ResultBasePageFinanceCategoryDTO = {
  code?: number;
  msg?: string;
  data?: BasePageFinanceCategoryDTO;
}
export type ResultListFinanceCategoryDTO = {
  code?: number;
  msg?: string;
  data?: FinanceCategoryDTO[];
}
export type ResultListFinanceInfoDTO = {
  code?: number;
  msg?: string;
  data?: FinanceInfoDTO[];
}
export type ResultListFinanceAllocationDepartmentDTO = {
  code?: number;
  msg?: string;
  data?: FinanceAllocationDepartmentDTO[];
}
export type FinanceInfoPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  minTotal?: number;
  maxTotal?: number;
  minUsed?: number;
  maxUsed?: number;
  minSurplus?: number;
  maxSurplus?: number;
  minYear?: number;
  maxYear?: number;
  startAbortTime?: string;
  endAbortTime?: string;
  status?: "ENABLE" | "DISABLE";
}
export type ApprovalDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  type?: "CG";
  title?: string;
  status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  creator?: string;
  departmentId?: string;
  content?: string;
  remarks?: string;
  files?: string;
  approveAccountIds?: string;
  approveCondition?: "AND" | "OR";
  lot?: number;
  copyAccountIds?: string;
}
export type BasePageFinanceInfoDTO = {
  total?: number;
  list?: FinanceInfoDTO[];
}
export type ResultApprovalDTO = {
  code?: number;
  msg?: string;
  data?: ApprovalDTO;
}
export type ResultBasePageFinanceInfoDTO = {
  code?: number;
  msg?: string;
  data?: BasePageFinanceInfoDTO;
}
export type FinanceAllocationDepartmentPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  minTotal?: number;
  maxTotal?: number;
  minUsed?: number;
  maxUsed?: number;
  minSurplus?: number;
  maxSurplus?: number;
  financeId?: string;
  departmentId?: string;
  startAbortTime?: string;
  endAbortTime?: string;
  status?: "ENABLE" | "DISABLE";
  financeYear?: number;
}
export type ResultListFinanceAllocationCategoryDTO = {
  code?: number;
  msg?: string;
  data?: FinanceAllocationCategoryDTO[];
}
export type BasePageFinanceAllocationDepartmentDTO = {
  total?: number;
  list?: FinanceAllocationDepartmentDTO[];
}
export type FinanceAllocationDepartmentDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  financeId?: string;
  departmentId?: string;
  total?: number;
  used?: number;
  surplus?: number;
  abortTime?: string;
  status?: "ENABLE" | "DISABLE";
  files?: string;
  remarks?: string;
}
export type IMLinkDTO = {
  appId?: string;
  data?: string;
  key?: string;
  nonceStr?: string;
  sign?: string;
  timestamp?: string;
  appUserId?: string;
}
export type ResultBasePageFinanceAllocationDepartmentDTO = {
  code?: number;
  msg?: string;
  data?: BasePageFinanceAllocationDepartmentDTO;
}
export type ResultIMLinkDTO = {
  code?: number;
  msg?: string;
  data?: IMLinkDTO;
}
export type ResultListDepartmentDTO = {
  code?: number;
  msg?: string;
  data?: DepartmentDTO[];
}
export type ProjectStatusPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  projectId?: string;
  oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  startChangeTime?: string;
  endChangeTime?: string;
}
export type AllocationProjectCategoryPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  allocationCategoryId: string;
  projectCategoryId?: string;
}
export type BasePageProjectStatusChangeDTO = {
  total?: number;
  list?: ProjectStatusChangeDTO[];
}
export type AllocationProjectCategoryDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  allocationCategoryId: string;
  projectCategoryId: string;
}
export type ResultBasePageProjectStatusChangeDTO = {
  code?: number;
  msg?: string;
  data?: BasePageProjectStatusChangeDTO;
}
export type ResultListApprovalRecordDTO = {
  code?: number;
  msg?: string;
  data?: ApprovalRecordDTO[];
}
export type BasePageAllocationProjectCategoryDTO = {
  total?: number;
  list?: AllocationProjectCategoryDTO[];
}
export type ProjectPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  parentId?: string;
  creator?: string;
  departmentId?: string;
  financeId?: string;
  status?: "WKS" | "ZXZ" | "YWJ" | "YQX";
  minTotal?: number;
  maxTotal?: number;
  minUsed?: number;
  maxUsed?: number;
  minSurplus?: number;
  maxSurplus?: number;
  minProgress?: number;
  maxProgress?: number;
  categoryId?: string;
  startCreateTime?: string;
  endCreateTime?: string;
}
export type ResultListApprovalDTO = {
  code?: number;
  msg?: string;
  data?: ApprovalDTO[];
}
export type ResultBasePageAllocationProjectCategoryDTO = {
  code?: number;
  msg?: string;
  data?: BasePageAllocationProjectCategoryDTO;
}
export type BasePageProjectInfoDTO = {
  total?: number;
  list?: ProjectInfoDTO[];
}
export type ApprovalHistoryPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  approveAccountId?: string;
  approveCondition?: "AND" | "OR";
  lot?: number;
  copyAccountId?: string;
  approvalIds?: string[];
}
export type FinanceAllocationCategoryPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  minTotal?: number;
  maxTotal?: number;
  minUsed?: number;
  maxUsed?: number;
  minSurplus?: number;
  maxSurplus?: number;
  financeId?: string;
  departmentId?: string;
  financeCategoryId?: string;
  allocationDepartmentId?: string;
  startAbortTime?: string;
  endAbortTime?: string;
  status?: "ENABLE" | "DISABLE";
  financeYear?: number;
}
export type ResultBasePageProjectInfoDTO = {
  code?: number;
  msg?: string;
  data?: BasePageProjectInfoDTO;
}
export type ApprovalHistoryDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  approveAccountIds?: string;
  approveCondition?: "AND" | "OR";
  lot?: number;
  copyAccountIds?: string;
  approvalId?: string;
}
export type BasePageFinanceAllocationCategoryDTO = {
  total?: number;
  list?: FinanceAllocationCategoryDTO[];
}
export type ProjectLifeCyclePageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  creator?: string;
  departmentId?: string;
  parentId?: string;
  projectId?: string;
  runAccountId?: string;
  completeAccountId?: string;
  status?: "WKS" | "ZXZ" | "YWC";
  startCreateTime?: string;
  endCreateTime?: string;
}
export type BasePageApprovalHistoryDTO = {
  total?: number;
  list?: ApprovalHistoryDTO[];
}
export type ResultBasePageFinanceAllocationCategoryDTO = {
  code?: number;
  msg?: string;
  data?: BasePageFinanceAllocationCategoryDTO;
}
export type BasePageProjectLifeCycleDTO = {
  total?: number;
  list?: ProjectLifeCycleDTO[];
}
export type ResultBasePageApprovalHistoryDTO = {
  code?: number;
  msg?: string;
  data?: BasePageApprovalHistoryDTO;
}
export type ResultBasePageProjectLifeCycleDTO = {
  code?: number;
  msg?: string;
  data?: BasePageProjectLifeCycleDTO;
}
export type ApprovalRecordPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  approvalId?: string;
  approvalAccountId?: string;
  status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  lot?: number;
  isSubmit?: boolean;
  startCreateTime?: string;
  endCreateTime?: string;
  startSubmitTime?: string;
  endSubmitTime?: string;
}
export type ApprovalRecordDTO = {
  id?: string;
  createTime?: string;
  modifTime?: string;
  approvalId?: string;
  approvalAccountId?: string;
  status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  lot?: number;
  suggestion?: string;
  files?: string;
  isValid?: boolean;
  isSubmit?: boolean;
  submitTime?: string;
}
export type BasePageApprovalRecordDTO = {
  total?: number;
  list?: ApprovalRecordDTO[];
}
export type ResultBasePageApprovalRecordDTO = {
  code?: number;
  msg?: string;
  data?: BasePageApprovalRecordDTO;
}
export type ApprovalPageQuery = {
  page: number;
  size?: number;
  keyword?: string;
  creator?: string;
  departmentId?: string;
  status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
  startCreateTime?: string;
  endCreateTime?: string;
  approveAccountId?: string;
  copyAccountId?: string;
}
export type BasePageApprovalDTO = {
  total?: number;
  list?: ApprovalDTO[];
}
export type ResultBasePageApprovalDTO = {
  code?: number;
  msg?: string;
  data?: BasePageApprovalDTO;
}
export type ResultApprovalHistoryDTO = {
  code?: number;
  msg?: string;
  data?: ApprovalHistoryDTO;
}
}
