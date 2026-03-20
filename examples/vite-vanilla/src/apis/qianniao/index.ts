// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
import * as apis from './apis/index.ts';
import { createMemoryDefault } from 'un-api-builder/browser';
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
export default createMemoryDefault(apis,({url,...ops})=>globalThis.fetch(url, ops));