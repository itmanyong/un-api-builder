# un-api-builder

OpenAPI 3 规范 API 构建器 - 自动从 OpenAPI 文档生成类型安全的 API 代码和 TypeScript 类型定义。

## 功能特性

- **自动代码生成** - 从 OpenAPI 3.x 规范自动生成 API 请求代码
- **完整的类型支持** - 自动生成精确的 TypeScript 类型定义
- **两种代码模式** - 支持 Proxy 和 Memory 两种 API 调用模式
- **四种导出方式** - 支持 `api`、`module`、`doc`、`default` 四种导出模式
- **完整的注释文档** - 自动生成 JSDoc 注释，包含字段说明、约束条件、示例值等
- **代码格式化** - 生成后自动使用 oxfmt 格式化代码
- **Vite 插件支持** - 提供官方 Vite 插件，- **Vue 响应式支持** - Proxy 模式自动添加 Vue 响应式跳过标记

## 模块结构

```
src/
├── core/          # 核心模块 - 代码生成逻辑
│   ├── api/       # API 代码生成
│   ├── ts/        # TypeScript 类型生成
│   ├── note/      # 文档注释生成
│   ├── config.ts  # 配置管理
│   ├── doc.ts     # 文档处理
│   └── run.ts     # 运行入口
├── browser/       # 浏览器端 - 运行时 API 调用
├── platform/      # 平台集成 - Vite 插件
├── shared/        # 共享工具函数
└── types/         # TypeScript 类型定义
```

## 快速开始

### 安装

```bash
pnpm add un-api-builder
```

### 配置

创建 `un-api-builder.config.ts` 配置文件：

```typescript
import { defineConfig } from "un-api-builder";

export default defineConfig({
  docs: [
    {
      name: "my-api",
      url: "https://api.example.com/openapi.json",
      output: "src/apis/my-api",
    },
  ],
});
```

### 使用 Vite 插件（推荐）

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { unApiBuilder } from "un-api-builder";

export default defineConfig({
  plugins: [
    unApiBuilder(),
  ],
});
```

### API 调用示例

#### `module` 导出模式（默认）

```typescript
import { apiMyApi } from "./src/apis/my-api";

// 按模块调用
const response = await apiMyApi.user.getById({ params: { id: 1 } });
```

#### `api` 导出模式

```typescript
import { apiUserGetById } from "./src/apis/my-api";

// 直接调用
const response = await apiUserGetById({ params: { id: 1 } });
```

#### `doc` 导出模式

```typescript
import { apiMyApi } from "./src/apis/my-api";

// 文档级调用
const response = await apiMyApi.user.getById({ params: { id: 1 } });
```

#### `default` 导出模式

```typescript
import apiMyApi from "./src/apis/my-api";

// 默认导出调用
const response = await apiMyApi.user.getById({ params: { id: 1 } });
```

## 文档

- [Core 模块详解](./docs/core/README.md) - 深入了解 API 和 TypeScript 生成逻辑
- [Browser 模块](./docs/browser/README.md) - 运行时 API 调用
- [Platform 模块](./docs/platform/README.md) - Vite 插件配置
- [配置参考](./docs/config.md) - 完整的配置项说明

## 生成的代码示例

### API 代码

```typescript
// API 定义示例 (module 导出模式)
export const apiApp = createProxyModule({
  getPage: {
    path: "/api/v1/app/page",
    method: "GET",
    headers: {},
    options: {},
  },
  getById: {
    path: "/api/v1/app/{id}",
    method: "GET",
    headers: {},
    options: {},
  },
}, requestor);
```

### 类型定义

```typescript
// 生成的类型定义
export type AppGetPageQuery = {
  /** 页码 | 示例: 1 | 默认值: 1 */
  pageNum?: number;
  /** 每页数量 | 示例: 10 | 最大长度: 100 */
  pageSize?: number;
};

export type AppGetPageResponse = {
  /** 状态码 | 示例: 200 */
  code?: number;
  /** 消息 | 示例: "success" */
  message?: string;
  /** 分页数据 */
  data?: QianniaoModels.PageResultSysApp;
  /** 时间戳 | 示例: 1704067200000 */
  timestamp?: number;
  /** 是否成功 | 示例: true */
  success?: boolean;
};

export type AppGetPageGeneric = {
  query: AppGetPageQuery;
  params: AppGetPageParams;
  data: AppGetPageBody;
  result: AppGetPageResponse;
  queryRequired: false;
  paramsRequired: false;
  dataRequired: false;
};
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 测试
pnpm test

# 类型检查
pnpm typecheck

# 开发模式
pnpm dev
```

## 许可证

MIT
