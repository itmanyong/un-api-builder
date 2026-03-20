// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "getById": {
    "url": "/app/{id}",
    "method": "GET",
    "summary": "获取应用详情",
    "description": "根据ID获取应用信息"
  },
  "putById": {
    "url": "/app/{id}",
    "method": "PUT",
    "summary": "更新应用",
    "description": "修改应用基本信息"
  },
  "deleteById": {
    "url": "/app/{id}",
    "method": "DELETE",
    "summary": "删除应用",
    "description": "逻辑删除应用"
  },
  "post": {
    "url": "/app",
    "method": "POST",
    "summary": "创建应用",
    "description": "新增应用，自动生成AppKey和AppSecret"
  },
  "postByIdStatus": {
    "url": "/app/{id}/status",
    "method": "POST",
    "summary": "修改状态",
    "description": "启用或停用应用（body:{\"status\":\"ENABLE\"}）"
  },
  "postByIdRegenerateSecret": {
    "url": "/app/{id}/regenerate-secret",
    "method": "POST",
    "summary": "重新生成密钥",
    "description": "重新生成应用的AppSecret"
  },
  "getPage": {
    "url": "/app/page",
    "method": "GET",
    "summary": "分页查询应用",
    "description": "支持按应用名称、类型、状态筛选"
  }
};
