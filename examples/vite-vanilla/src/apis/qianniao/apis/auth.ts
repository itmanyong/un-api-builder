// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "postValidate": {
    "url": "/auth/validate",
    "method": "POST",
    "summary": "验证Token",
    "description": "验证Token有效性，供业务系统调用"
  },
  "postRefresh": {
    "url": "/auth/refresh",
    "method": "POST",
    "summary": "刷新Token",
    "description": "使用RefreshToken获取新的AccessToken"
  },
  "postLogout": {
    "url": "/auth/logout",
    "method": "POST",
    "summary": "用户登出",
    "description": "登出当前用户，Token加入黑名单"
  },
  "postLogin": {
    "url": "/auth/login",
    "method": "POST",
    "summary": "用户登录",
    "description": "使用用户名密码登录，返回AccessToken和RefreshToken"
  },
  "getInfo": {
    "url": "/auth/info",
    "method": "GET",
    "summary": "获取当前用户信息",
    "description": "获取当前登录用户的详细信息"
  }
};
