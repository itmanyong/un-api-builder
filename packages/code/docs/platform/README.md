# Platform 模块

Platform 模块提供与 Vite 的集成，通过 Vite 插件方式无缝接入项目。

## 模块导出

```typescript
export { vitePlugin } from "./platform/vite";
```

## Vite 插件

### `vitePlugin(options?)`

创建 Vite 插件实例。

```typescript
import { defineConfig } from "vite";
import { unApiBuilder } from "un-api-builder";

export default defineConfig({
  plugins: [
    unApiBuilder(),
  ],
});
```

## 配置方式

### 方式一：使用默认配置

```typescript
import { defineConfig } from "vite";
import { unApiBuilder } from "un-api-builder";

export default defineConfig({
  plugins: [
    unApiBuilder(),
  ],
});
```

### 方式二：自定义配置路径

```typescript
import { defineConfig } from "vite";
import { unApiBuilder } from "un-api-builder";

export default defineConfig({
  plugins: [
    unApiBuilder({
      configPath: "./my-api-config.ts",
    }),
  ],
});
```

### 方式三：在配置文件中声明

创建 `un-api-builder.config.ts` 或在 `package.json` 中声明配置：

```typescript
// un-api-builder.config.ts
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

## 插件选项

```typescript
interface PluginOptions {
  /** 自定义配置路径 */
  configPath?: string;
  /** 是否启用 */
  enable?: boolean;
  /** 自定义日志输出 */
  logLevel?: "info" | "warn" | "error" | "silent";
}
```

## 工作原理

1. **配置加载** - 插件启动时加载 `un-api-builder.config.ts` 配置文件
2. **文档获取** - 从配置的 URL 获取 OpenAPI 规范文档
3. **代码生成** - 调用 core 模块生成 API 代码和类型定义
4. **文件写入** - 将生成的代码写入配置的输出目录
5. **类型更新** - Vite 自动识别新生成的文件并进行 HMR

## 开发体验

### 热更新支持

生成的 API 文件支持 Vite 的热更新：
- 修改 OpenAPI 文档后重新生成
- 自动更新相关模块
- 保持开发服务器运行

### 缓存机制

- 内置缓存机制，避免重复生成
- 可配置缓存过期时间
- 支持手动清除缓存

## 相关文档

- [Core 模块](./core/README.md) - API 和类型生成详解
- [Browser 模块](./browser/README.md) - 运行时 API 调用
- [配置参考](../config.md) - 完整的配置项说明
