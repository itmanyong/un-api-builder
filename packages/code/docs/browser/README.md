# Browser 模块

Browser 模块提供运行时 API 调用能力，支持在浏览器环境中调用生成的 API。

## 模块导出

```typescript
export {
  createMemoryApi,      // 创建内存模式 API
  createMemoryModule,   // 创建内存模式模块
  createMemoryDoc,      // 创建内存模式文档
  createMemoryDefault,  // 创建内存模式默认导出
  createProxyApi,       // 创建代理模式 API
  createProxyModule,    // 创建代理模式模块
  createProxyDoc,       // 创建代理模式文档
  createProxyDefault,   // 创建代理模式默认导出
};
```

## 两种代码模式

### Memory 模式

Memory 模式将 API 定义存储在内存中，返回普通函数对象，适用于测试和简单场景。

```typescript
import { createMemoryApi, createMemoryModule, createMemoryDoc } from "un-api-builder/browser";

// 创建单个 API
const api = createMemoryApi({
  path: "/api/users/{id}",
  method: "GET",
  headers: {},
  options: {},
}, requestor);

// 创建模块级 API
const userModule = createMemoryModule({
  getById: { path: "/api/users/{id}", method: "GET" },
  create: { path: "/api/users", method: "POST" },
}, requestor);

// 创建文档级 API
const apiDoc = createMemoryDoc({
  user: { getById: {...}, create: {...} },
  order: { list: {...}, getById: {...} },
}, requestor);
```

### Proxy 模式

Proxy 模式使用 JavaScript Proxy 动态生成 API 调用代码，支持 Vue 响应式跳过标记，适用于生产环境。

```typescript
import { createProxyApi, createProxyModule, createProxyDoc } from "un-api-builder/browser";

// 创建单个 API
const api = createProxyApi({
  path: "/api/users/{id}",
  method: "GET",
}, requestor);

// 创建模块级 API
const userModule = createProxyModule({
  getById: { path: "/api/users/{id}", method: "GET" },
  create: { path: "/api/users", method: "POST" },
}, requestor);

// 创建文档级 API
const apiDoc = createProxyDoc({
  user: { getById: {...}, create: {...} },
  order: { list: {...}, getById: {...} },
}, requestor);
```

## 四种导出模式

根据 `exportMode` 配置，生成的代码会使用不同的创建函数：

### `api` 模式

每个 API 单独导出一个函数：

```typescript
// 生成的代码
export const apiUserGetById = createProxyApi(apis.user.getById, requestor);
export const apiUserCreate = createProxyApi(apis.user.create, requestor);
export const apiUserList = createProxyApi(apis.user.list, requestor);
```

### `module` 模式（默认）

按模块导出对象：

```typescript
// 生成的代码
export const apiUser = createProxyModule(apis.user, requestor);
export const apiOrder = createProxyModule(apis.order, requestor);
```

### `doc` 模式

具名导出整个文档对象：

```typescript
// 生成的代码
export const apiMyApi = createProxyDoc(apis, requestor);
```

### `default` 模式

默认导出整个文档对象：

```typescript
// 生成的代码
export default createProxyDoc(apis, requestor);
```

## Generic 类型

所有生成的 API 都包含完整的 Generic 类型支持：

```typescript
export type AppGetPageGeneric = {
  query: AppGetPageQuery;      // 查询参数类型
  params: AppGetPageParams;    // 路径参数类型
  data: AppGetPageBody;        // 请求体类型
  result: AppGetPageResponse;  // 响应类型
  queryRequired: boolean;      // 查询参数是否必填
  paramsRequired: boolean;      // 路径参数是否必填
  dataRequired: boolean;        // 请求体是否必填
};
```

## 使用示例

### 基础用法

```typescript
import { apiMyApi } from "./src/apis/my-api";

// 获取数据
const response = await apiMyApi.getPage({
  query: { pageNum: 1, pageSize: 10 },
});

// 完整类型提示
const { data, success } = response;
if (success) {
  console.log(data);
}
```

### 路径参数

```typescript
// GET /api/users/{id}
const user = await apiMyApi.user.getById({
  params: { id: 1 },
});
```

### 请求体

```typescript
// POST /api/users
const newUser = await apiMyApi.user.create({
  data: {
    name: "John",
    email: "john@example.com",
  },
});
```

### 文件上传

```typescript
const formData = new FormData();
formData.append("file", file);

await apiMyApi.upload.uploadFile({
  data: formData,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
```

## Vue 响应式支持

Proxy 模式生成的 API 对象包含 Vue 响应式跳过标记：

```typescript
const proxyApi = createProxyApi(apiDefine, requestor);

// 包含以下 Vue 标记
proxyApi.__v_skip = true;        // 跳过响应式转换
proxyApi.__v_isRef = false;      // 不是 ref
proxyApi.__v_isReadonly = false; // 不是只读
proxyApi.__v_isShallow = false;  // 不是 shallow
proxyApi.__v_isReactive = false; // 不是响应式
proxyApi.__v_isProxy = true;     // 是代理对象
```

这使得 API 对象在 Vue 组件中使用时不会被响应式系统处理，避免不必要的性能开销。

## 注意事项

1. **无 Node.js 依赖** - Browser 模块不依赖任何 Node.js 特定模块，可直接在浏览器环境运行
2. **类型安全** - 所有 API 调用都经过完整的 TypeScript 类型检查
3. **泛型支持** - 支持通过 Generic 类型获取精确的输入输出类型
4. **不可修改** - Proxy 模式下，尝试修改 API 定义会触发警告并被阻止

## 相关文档

- [Core 模块](./core/README.md) - API 和类型生成详解
- [配置参考](../config.md) - 完整的配置项说明
