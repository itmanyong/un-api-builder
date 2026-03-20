// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "put": {
    "url": "/approval",
    "method": "PUT",
    "summary": "修改"
  },
  "post": {
    "url": "/approval",
    "method": "POST",
    "summary": "新增"
  },
  "postList": {
    "url": "/approval/list",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "deleteList": {
    "url": "/approval/list",
    "method": "DELETE",
    "summary": "批量删除"
  },
  "postHistoryPage": {
    "url": "/approval/history/page",
    "method": "POST",
    "summary": "分配历史记录分页查询"
  },
  "getPage": {
    "url": "/approval/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "getHistoryByApprovalIdByLot": {
    "url": "/approval/history/{approvalId}/{lot}",
    "method": "GET",
    "summary": "获取指定单子指定阶段最新的审批人知会人"
  },
  "deleteById": {
    "url": "/approval/{id}",
    "method": "DELETE",
    "summary": "删除"
  },
  "putRecord": {
    "url": "/approval/record",
    "method": "PUT",
    "summary": "修改"
  },
  "postRecord": {
    "url": "/approval/record",
    "method": "POST",
    "summary": "新增"
  },
  "putRecordBack": {
    "url": "/approval/record/back",
    "method": "PUT",
    "summary": "退回"
  },
  "postRecordList": {
    "url": "/approval/record/list",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "getRecordPage": {
    "url": "/approval/record/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "deleteRecordById": {
    "url": "/approval/record/{id}",
    "method": "DELETE",
    "summary": "删除"
  }
};
