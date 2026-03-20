// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "getById": {
    "url": "/permissionMenus/{id}",
    "method": "GET",
    "summary": "根据ID查询一条数据"
  },
  "putById": {
    "url": "/permissionMenus/{id}",
    "method": "PUT",
    "summary": "根据id修改一条数据"
  },
  "deleteById": {
    "url": "/permissionMenus/{id}",
    "method": "DELETE",
    "summary": "根据id删除数据"
  },
  "putList": {
    "url": "/permissionMenus/list",
    "method": "PUT",
    "summary": "批量修改数据"
  },
  "postList": {
    "url": "/permissionMenus/list",
    "method": "POST",
    "summary": "批量添加数据"
  },
  "deleteList": {
    "url": "/permissionMenus/list",
    "method": "DELETE",
    "summary": "根据id集合批量删除数据"
  },
  "post": {
    "url": "/permissionMenus",
    "method": "POST",
    "summary": "添加一条数据"
  },
  "postListQuery": {
    "url": "/permissionMenus/list/query",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "getPage": {
    "url": "/permissionMenus/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "getCurrent": {
    "url": "/permissionMenus/current",
    "method": "GET",
    "summary": "获取当前登录用户拥有的菜单功能权限"
  }
};
