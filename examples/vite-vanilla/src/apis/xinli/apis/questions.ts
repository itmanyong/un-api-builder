// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "putUpdateStatusById": {
    "url": "/questions/updateStatus/{id}",
    "method": "PUT",
    "summary": "修改状态"
  },
  "putList": {
    "url": "/questions/list",
    "method": "PUT",
    "summary": "批量修改（量表的题）",
    "description": "量表的题批量修改"
  },
  "postList": {
    "url": "/questions/list",
    "method": "POST",
    "summary": "批量新增"
  },
  "deleteList": {
    "url": "/questions/list",
    "method": "DELETE",
    "summary": "批量删除"
  },
  "putItem": {
    "url": "/questions/item",
    "method": "PUT",
    "summary": "修改（题库的题）",
    "description": "题库的题单个修改"
  },
  "postItem": {
    "url": "/questions/item",
    "method": "POST",
    "summary": "新增"
  },
  "postListQuery": {
    "url": "/questions/list/query",
    "method": "POST",
    "summary": "批量查询"
  },
  "getPage": {
    "url": "/questions/page",
    "method": "GET",
    "summary": "多条件组合分页查询"
  },
  "getItemById": {
    "url": "/questions/item/{id}",
    "method": "GET",
    "summary": "查询"
  },
  "deleteItemById": {
    "url": "/questions/item/{id}",
    "method": "DELETE",
    "summary": "删除"
  }
};
