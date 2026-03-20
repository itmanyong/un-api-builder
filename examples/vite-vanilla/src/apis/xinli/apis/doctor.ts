// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "putItem": {
    "url": "/doctor/item",
    "method": "PUT",
    "summary": "修改"
  },
  "postItem": {
    "url": "/doctor/item",
    "method": "POST",
    "summary": "新增"
  },
  "postPutStatusByIdByStatus": {
    "url": "/doctor/putStatus/{id}/{status}",
    "method": "POST",
    "summary": "修改状态"
  },
  "postEnterAudit": {
    "url": "/doctor/enterAudit",
    "method": "POST",
    "summary": "医生入驻审核"
  },
  "getPage": {
    "url": "/doctor/page",
    "method": "GET",
    "summary": "多条件组合分页查询"
  },
  "deleteList": {
    "url": "/doctor/list",
    "method": "DELETE",
    "summary": "批量删除"
  },
  "deleteItemById": {
    "url": "/doctor/item/{id}",
    "method": "DELETE",
    "summary": "删除"
  }
};
