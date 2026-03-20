# Core 模块详解

Core 模块是 un-api-builder 的核心代码生成引擎，负责从 OpenAPI 规范文档生成 API 代码和 TypeScript 类型定义。

## 模块结构

```
core/
├── api/           # API 代码生成模块
│   ├── core.ts    # API 生成核心逻辑
│   ├── shared.ts   # API 共享工具函数
│   └── index.ts   # 模块导出
├── ts/            # TypeScript 类型生成模块
│   ├── core.ts    # 类型生成核心逻辑
│   ├── shared.ts  # Schema 转 TypeScript 工具
│   └── index.ts   # 模块导出
├── note/          # 文档注释生成模块
│   ├── core.ts    # 注释生成核心逻辑
│   └── index.ts   # 模块导出
├── config.ts      # 配置管理
├── doc.ts         # 文档处理入口
└── run.ts         # 运行入口
```

## 工作流程

```
OpenAPI Document (JSON)
        │
        ▼
┌───────────────────────────────────────┐
│              doc.ts                    │
│  - fetchApiDoc()  获取文档            │
│  - flattenApiMap() 扁平化接口映射     │
└───────────────────────────────────────┘
        │
        ▼
┌──────────────────┐  ┌──────────────────┐
│    api/core      │  │     ts/core      │
│  - generateApi() │  │ - generateTsType()│
│  生成API请求代码  │  │ 生成TS类型定义   │
└──────────────────┘  └──────────────────┘
        │                      │
        ▼                      ▼
┌──────────────────┐  ┌──────────────────┐
│    note/core      │  │    note/core      │
│  生成API注释      │  │  生成字段注释     │
└──────────────────┘  └──────────────────┘
        │                      │
        ▼                      ▼
   API 代码文件          TypeScript 类型文件
```

## API 模块 (api/)

### 核心函数

#### `generateApi(apiDoc, apiModuleMap, docConfig)`

生成 API 请求代码。

**参数：**
- `apiDoc: OpenAPIObject` - OpenAPI 文档对象
- `apiModuleMap: Map<string, Required<ApiParamsCtx>[]>` - 扁平化的接口映射
- `docConfig: ApiDocConfig` - 文档配置

**返回：** `DocResultApi`

### 共享函数 (api/shared.ts)

| 函数 | 说明 |
|------|------|
| `CONTENT_TYPE_MAP` | 内容类型映射表 |
| `API_DEFINE_DIR_NAME` | API 定义目录名 (`apis`) |
| `API_DEFINE_CORE_NAME` | API 定义核心文件名 (`core`) |
| `resolveParameter()` | 解析参数（支持 $ref） |
| `getApiParamList()` | 获取接口参数列表 |
| `getApiBodyJson()` | 获取请求体 JSON Schema |
| `getApiResponseJson()` | 获取响应体 JSON Schema |
| `generateApiConfig()` | 生成 API 配置 |
| `flattenApiMap()` | 将 OpenAPI 文档扁平化为模块-接口映射 |

## TS 模块 (ts/)

### 核心函数

#### `generateTsType(apiDoc, apiModuleMap, docConfig)`

生成 TypeScript 类型定义。

**参数：**
- `apiDoc: OpenAPIObject` - OpenAPI 文档对象
- `apiModuleMap: Map<string, Required<ApiParamsCtx>[]>` - 扁平化的接口映射
- `docConfig: ApiDocConfig` - 文档配置

**返回：** `DocResultTs`

### 共享函数 (ts/shared.ts)

#### `createSchemaToTs(typeConvert?)`

创建 Schema 转 TypeScript 类型转换器。

```typescript
const schemaToTs = createSchemaToTs({
  enum: (schema) => "CustomEnum",  // 自定义枚举转换
  properties: (schema) => "CustomObject", // 自定义属性转换
});
```

#### `resolveRefTypeName(ref, prefix?)`

解析 $ref 引用类型名。

```typescript
resolveRefTypeName("#/components/schemas/User");  // "User"
resolveRefTypeName("#/components/schemas/User", "Models");  // "Models.User"
```

## Note 模块 (note/)

文档注释生成模块，提供完整的 JSDoc 注释支持。

### 核心函数

#### `getFieldNote(fieldName, schema, required, globalPrefix?)`

生成字段的 JSDoc 注释。

**支持的 Schema 字段：**

| 分类 | 字段 | 说明 |
|------|------|------|
| 描述 | `title` | 字段标题 |
| 描述 | `description` | 字段描述 |
| 示例 | `example` | 示例值 |
| 默认值 | `default` | 默认值 |
| 枚举 | `enum` | 枚举可选值 |
| 弃用 | `deprecated` | 弃用标记 |
| 范围 | `minimum/maximum` | 数值范围 |
| 范围 | `exclusiveMinimum/exclusiveMaximum` | 排除性边界 |
| 长度 | `minLength/maxLength` | 字符串长度限制 |
| 正则 | `pattern` | 正则表达式 |
| 数组 | `minItems/maxItems` | 数组长度限制 |
| 唯一 | `uniqueItems` | 唯一性约束 |
| 格式 | `format` | 数据格式 |

**示例输出：**

```typescript
/**
 * string - 用户名 | 示例: "john" | 长度: 1-50字符
 */
username: string;

/**
 * number (可选) - 年龄 | 示例: 25 | 范围: [0, 150]
 */
age?: number;

/**
 * "WEB" | "MINIAPP" (可选) - 应用类型 | 可选值: "WEB", "MINIAPP" | @deprecated
 */
appType?: "WEB" | "MINIAPP";
```

#### `getFieldType(schema, globalPrefix?)`

获取字段的 TypeScript 类型字符串。

#### `getTypedObject(typeName, properties, required)`

生成带注释的 TypeScript 接口定义。

```typescript
const result = getTypedObject("User", {
  name: { type: "string", description: "用户名称" },
  age: { type: "number", description: "用户年龄" },
}, ["name"]);
```

#### `getTypedParams(params, schemaToTs, globalPrefix?)`

生成带注释的参数类型。

#### `getTypedObjectWithNested(properties, required, schemaToTs, globalPrefix?)`

生成带注释的嵌套对象类型。

## 配置管理 (config.ts)

### `DEFAULT_DOC_CONFIG`

默认文档配置，包含：
- `prefix` - API 前缀
- `output` - 输出路径 (`src/apis/${name}`)
- `outputType` - 输出文件类型 (`ts`)
- `codeMode` - 代码模式 (`proxy` | `memory`)
- `exportMode` - 导出模式 (`module` | `default` | `doc`)
- `dts` - 类型生成配置
- `cache` - 缓存配置

### `defineConfig(config)`

定义配置，返回合并后的配置数组。

### `loadConfig(configPath?)`

从配置文件加载配置，支持多种格式：
- `un-api-builder.config.ts`
- `un-api-builder.config.js`
- `package.json` 中的 `un-api-builder` 字段

## 运行入口 (run.ts)

### `defineRun(options?)`

运行主入口函数：

1. 加载配置
2. 检查缓存（如果启用）
3. 执行文档生成
4. 更新缓存
5. 打印生成摘要表格

**选项：**
```typescript
interface PluginOptions {
  configPath?: string;  // 自定义配置路径
}
```

## 生成的文件结构

```
output/
├── apis/
│   ├── index.ts           # API 导出入口
│   ├── core.ts             # API 核心定义
│   └── [module]/
│       └── index.ts        # 模块 API 定义
└── types/
    ├── index.ts           # 类型导出入口
    ├── models.d.ts        # 全局类型定义
    └── [module]/
        └── index.ts        # 模块类型定义
```

## 代码格式化

生成完成后，自动使用 [oxfmt](https://github.com/oxfmt/oxfmt) 对生成的文件进行格式化，确保代码风格一致。

## 相关文档

- [配置参考](../config.md) - 完整的配置项说明
- [Browser 模块](../browser/README.md) - 运行时 API 调用
