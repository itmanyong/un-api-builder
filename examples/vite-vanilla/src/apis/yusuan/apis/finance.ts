// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
export default {
  "putById": {
    "url": "/finance/{id}",
    "method": "PUT",
    "summary": "修改资金批次"
  },
  "putStatus": {
    "url": "/finance/status",
    "method": "PUT",
    "summary": "批量修改状态"
  },
  "post": {
    "url": "/finance",
    "method": "POST",
    "summary": "新增资金批次"
  },
  "postList": {
    "url": "/finance/list",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "getPage": {
    "url": "/finance/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "putDepartmentById": {
    "url": "/finance/department/{id}",
    "method": "PUT",
    "summary": "修改分配给部门的资金"
  },
  "putDepartmentStatus": {
    "url": "/finance/department/status",
    "method": "PUT",
    "summary": "批量修改状态"
  },
  "postDepartment": {
    "url": "/finance/department",
    "method": "POST",
    "summary": "新增资金分配给部门（从批次上分配给顶级部门）"
  },
  "postDepartmentList": {
    "url": "/finance/department/list",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "postDepartmentChild": {
    "url": "/finance/department/child",
    "method": "POST",
    "summary": "新增资金分配给部门（分配给子部门）"
  },
  "getDepartmentPage": {
    "url": "/finance/department/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "putCategoryById": {
    "url": "/finance/category/{id}",
    "method": "PUT",
    "summary": "修改部门分配资金类目"
  },
  "putCategoryStatus": {
    "url": "/finance/category/status",
    "method": "PUT",
    "summary": "批量修改状态"
  },
  "postCategory": {
    "url": "/finance/category",
    "method": "POST",
    "summary": "新增部门下资金分配给类目"
  },
  "postCategoryList": {
    "url": "/finance/category/list",
    "method": "POST",
    "summary": "根据id集合获取列表"
  },
  "getCategoryPage": {
    "url": "/finance/category/page",
    "method": "GET",
    "summary": "分页查询"
  },
  "postCategoryProjectByAllocationCategoryId": {
    "url": "/finance/category/project/{allocationCategoryId}",
    "method": "POST",
    "summary": "批量关联项目类目id"
  },
  "getCategoryProjectPage": {
    "url": "/finance/category/project/page",
    "method": "GET",
    "summary": "分页查询"
  }
};
