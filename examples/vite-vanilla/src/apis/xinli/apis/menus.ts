// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "putItem": {
    "url": "/menus/item",
    "method": "PUT",
    "summary": "修改菜单"
  },
  "postItem": {
    "url": "/menus/item",
    "method": "POST",
    "summary": "新增菜单"
  },
  "postListQuery": {
    "url": "/menus/list/query",
    "method": "POST",
    "summary": "批量查询"
  },
  "getPage": {
    "url": "/menus/page",
    "method": "GET",
    "summary": "分页查询",
    "description": "菜单分页查询"
  },
  "getGetByRoleId": {
    "url": "/menus/getByRoleId",
    "method": "GET",
    "summary": "获取角色权限"
  },
  "getGetByAccountId": {
    "url": "/menus/getByAccountId",
    "method": "GET",
    "summary": "获取登录账号菜单功能权限"
  },
  "deleteList": {
    "url": "/menus/list",
    "method": "DELETE",
    "summary": "删除菜单"
  },
  "deleteItemById": {
    "url": "/menus/item/{id}",
    "method": "DELETE",
    "summary": "删除"
  }
};
