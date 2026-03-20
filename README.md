# un-api-builder

OpenAPI 3 规范 API 构建器 - 自动从 OpenAPI 文档生成类型安全的 API 代码和 TypeScript 类型定义。

`文档目前为AI生成，后续会完善文档`



## 概述

`un-api-builder` 是一个基于 OpenAPI 3.x 规范的 API 代码生成工具。它可以自动从 OpenAPI 文档生成：

- **类型安全的 API 请求代码** - 支持 Proxy 和 Memory 两种调用模式
- **完整的 TypeScript 类型定义** - 包含字段注释、约束条件、示例值等
- **四种导出方式** - `api`、`module`、`doc`、`default` 四种导出模式
- **开箱即用的 Vite 插件** - 无缝集成到现代前端项目

## 核心特性

- 🎯 **完整的类型安全** - 自动生成精确的 TypeScript 类型，告别 any 类型
- 📝 **丰富的字段注释** - 自动从 Schema 生成 JSDoc 注释，包含描述、示例、约束等
- 🔧 **灵活的代码生成** - 支持自定义请求器、解析器、类型转换
- 📦 **零运行时依赖** - Browser 模块无任何 Node.js 依赖
- 🚀 **Vite 插件支持** - 一行配置即可集成
- 🎨 **Vue 响应式支持** - Proxy 模式自动添加 Vue 响应式跳过标记

## 项目结构

```
un-api-builder/
├── packages/
│   └── code/                 # 主包
│       ├── src/
│       │   ├── core/         # 核心代码生成模块
│       │   ├── browser/      # 浏览器端运行时
│       │   ├── platform/     # Vite 插件
│       │   ├── shared/       # 共享工具
│       │   └── types/        # 类型定义
│       ├── docs/             # 详细文档
│       └── tests/            # 测试用例
└── examples/                 # 使用示例
```

## 快速开始

### 安装

```bash
pnpm add un-api-builder
```

### 配置

创建 `un-api-builder.config.ts`：

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

### 使用 Vite 插件

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { vitePlugin } from "un-api-builder";

export default defineConfig({
  plugins: [vitePlugin()],
});
```

### 调用 API

```typescript
import { apiMyApi } from "./src/apis/my-api";

// 获取数据
const response = await apiMyApi.user.getById({
  params: { id: 1 },
});
```

## 文档导航

- **[packages/code/README.md](packages/code/README.md)** - 包的整体介绍和快速开始
- **[packages/code/docs/core/README.md](packages/code/docs/core/README.md)** - Core 模块详解（API 和类型生成逻辑）
- [packages/code/docs/browser/README.md](packages/code/docs/browser/README.md) - Browser 模块（运行时 API 调用）
- [packages/code/docs/platform/README.md](packages/code/docs/platform/README.md) - Platform 模块（Vite 插件）
- [packages/code/docs/config.md](packages/code/docs/config.md) - 完整配置参考

## 导出模式说明

| 模式 | 说明 | 示例 |
|------|------|------|
| `api` | 每个 API 单独导出 | `export const apiUserGetById = ...` |
| `module` | 按模块导出（默认） | `export const apiUser = { getById, create }` |
| `doc` | 具名导出整个文档 | `export const apiMyApi = { user, order }` |
| `default` | 默认导出整个文档 | `export default { user, order }` |

## 生成的代码示例

```typescript
// API 定义
export const apiAppGetById = (options: RequestInit, params: { id: number }) => {
  const url = `/api/v1/app/${params.id}`;
  return globalThis.fetch(url, options);
};

// 生成的类型定义
export type AppGetByIdResponse = {
  /** 状态码 */
  code?: number;
  /** 消息 */
  message?: string;
  /** 应用数据 */
  data?: {
    /** 应用ID */
    id?: number;
    /** 应用名称 */
    appName?: string;
    /** 应用编码 */
    appCode?: string;
  };
  /** 时间戳 */
  timestamp?: number;
  /** 是否成功 */
  success?: boolean;
};
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建包
pnpm build

# 运行测试
pnpm test

# 类型检查
pnpm typecheck
```

## 许可证

MIT
