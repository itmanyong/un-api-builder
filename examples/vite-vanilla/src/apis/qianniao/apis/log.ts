// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "getOperById": {
    "url": "/log/oper/{id}",
    "method": "GET",
    "summary": "获取操作日志详情",
    "description": "根据ID获取操作日志，包含请求参数和响应结果"
  },
  "getOperPage": {
    "url": "/log/oper/page",
    "method": "GET",
    "summary": "分页查询操作日志",
    "description": "支持按模块、用户名、状态筛选"
  },
  "getLoginById": {
    "url": "/log/login/{id}",
    "method": "GET",
    "summary": "获取登录日志详情",
    "description": "根据ID获取登录日志"
  },
  "getLoginPage": {
    "url": "/log/login/page",
    "method": "GET",
    "summary": "分页查询登录日志",
    "description": "支持按用户名、状态筛选"
  },
  "getExceptionById": {
    "url": "/log/exception/{id}",
    "method": "GET",
    "summary": "获取异常日志详情",
    "description": "根据ID获取异常日志，包含完整堆栈信息"
  },
  "getExceptionPage": {
    "url": "/log/exception/page",
    "method": "GET",
    "summary": "分页查询异常日志",
    "description": "支持按异常类型、用户名筛选"
  },
  "deleteOperClean": {
    "url": "/log/oper/clean",
    "method": "DELETE",
    "summary": "清理操作日志",
    "description": "清理指定天数之前的操作日志(body:{\"days\":10})"
  },
  "deleteLoginClean": {
    "url": "/log/login/clean",
    "method": "DELETE",
    "summary": "清理登录日志",
    "description": "清理指定天数之前的登录日志(body:{\"days\":10})"
  },
  "deleteExceptionClean": {
    "url": "/log/exception/clean",
    "method": "DELETE",
    "summary": "清理异常日志",
    "description": "清理指定天数之前的异常日志(body:{\"days\":10})"
  }
};
