// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "putById": {
    "url": "/user/{id}",
    "method": "PUT",
    "summary": "修改用户信息"
  },
  "post": {
    "url": "/user",
    "method": "POST",
    "summary": "新增用户信息"
  },
  "postList": {
    "url": "/user/list",
    "method": "POST",
    "summary": "根据userId集合获取用户列表"
  },
  "postListByAccount": {
    "url": "/user/listByAccount",
    "method": "POST",
    "summary": "根据accountId集合获取用户列表"
  },
  "getPage": {
    "url": "/user/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "getGetIMLink": {
    "url": "/user/getIMLink",
    "method": "GET",
    "summary": "获取IM连接加密信息"
  },
  "getGetAccountInfo": {
    "url": "/user/getAccountInfo",
    "method": "GET",
    "summary": "获取当前登录用户的信息"
  }
};
