import type { OpenAPIObject, OperationObject, SchemaObject, ReferenceObject, PathItemObject, ParameterObject } from "openapi3-ts/oas31";
import type { RecordType } from "./common";

export interface ApiParamsCtx extends RecordType {
  path: string;
  method: string;
  pathItem: PathItemObject;
  operation: OperationObject;
  contentType?: string;
  body?: SchemaObject | ReferenceObject | null;
  header?: ParameterObject[];
  cookie?: ParameterObject[];
  query?: ParameterObject[];
  params?: ParameterObject[];
  response?: SchemaObject | ReferenceObject | null;
  config?: Required<DocApiConfig>;
}

export type FileCodeType = string[] | ((filename: string, ...args: any[]) => string[]);

export interface DocApiConfig {
  /**
   * 接口路径
   * @description 实际请求的接口路径-即`requestor`参数对象中的`url`
   */
  url?: string;
  /**
   * 接口方法
   * @description 实际请求的接口方法-即`requestor`参数对象中的`method`
   */
  method?: string;
  /**
   * 接口函数名称
   * @description 默认根据“接口类型+接口路径”生成一个小驼峰函数名
   */
  name?: string;
  /**
   * 接口模块名
   * @description 所属模块的接口会被分类到该模块下，默认根据“接口路径”的第一部分生成一个小驼峰模块名
   */
  module?: string;
  /**
   * 接口额外参数
   * @description 额外的参数，会被添加到接口函数的参数列表中
   */
  options?: RecordType;
  /**
   * 接口摘要
   * @description 来自于 openapi 文档中的 summary 字段
   */
  summary?: string;
  /**
   * 接口描述
   * @description 来自于 openapi 文档中的 description 字段
   */
  description?: string;
}

export interface DocDtsObjConfig {
  /**
   * 是否启用TS类型
   * @default true
   * @description 关闭每次都会重新生成-默认启用
   */
  enable?: boolean;
  /**
   * 类型文件输出路径
   * @default "types"
   * @description 默认`types`目录
   */
  path?: string;
  /**
   * 接口参数泛型
   * @default "apiOptions"
   * @description 接收 Query、Params、Data三个泛型
   * @description apiOptions应通过`dts.fileHeader`定义
   */
  apiOptions?: string;
  /**
   * 接口结果泛型
   * @default "ApiResult"
   * @description 接收 Data、Result 两个泛型
   * @description ApiResult应通过`dts.fileHeader`定义
   */
  apiResult?: string;
  /**
   * 文件前置代码
   * @default
   * @description 生成的文件顶部添加的自定义代码
   */
  fileHeader?: FileCodeType;
  /**
   * 文件后置代码
   * @default []
   * @description 生成的文件底部添加的自定义代码
   */
  fileFooter?: FileCodeType;
  /**
   * 类型转换定义
   * @description 根据openapi的SchemaObject键定义
   * @description 对应类型转换不满意、不符合要求均可通过此配置自定义实现
   */
  typeConvert?: Partial<Record<keyof SchemaObject, (value: SchemaObject | ReferenceObject) => string>>;
  /**
   * 路径别名
   * @default `@${name}`
   * @description 生成的接口文件的引用别名 主要是为了激活全局的ts类型匹配 - 如果使用相对路径则ts类型会被模块类型覆盖导致匹配不上全局类型
   */
  pathAlias?: string;
}

export interface DocCacheObjConfig {
  /**
   * 缓存路径
   * @default `.${LIB_NAME}`
   * @description 用于保存配置、文档-默认`.${LIB_NAME}`
   */
  path?: string;
  /**
   * 是否启用缓存
   * @default true
   * @description 关闭每次都会重新生成-默认启用
   */
  enable?: boolean;
  /**
   * 缓存有效时长
   * @default 600000
   * @description 单位`ms`-默认`600000`=10分钟
   */
  expireTime?: number;
}

export interface DocConfig {
  /**
   * 文档标识
   * @description 保持唯一性-将在生成代码中的`模块`/`函数名`/`路径别名`等地方使用
   */
  name: string;
  /**
   * 文档 URL
   * @description 用于获取文档内的接口定义-支持 `远程地址`/`本地文件路径`
   */
  url: string;
  /**
   * 文档前缀
   * @default "api"
   * @description 导出变量名的前缀-默认`api`
   */
  prefix?: string;
  /**
   * 是否启用
   * @default true
   * @description 是否启用当前文档的接口定义解析和生成
   */
  enable?: boolean;
  /**
   * 输出路径
   * @default "src/apis/${name}"
   * @description 从cwd开始 默认`src/apis/${name}`
   */
  output?: string;
  /**
   * 文件输出类型
   * @default "ts"
   * @description 决定生成文件的后缀名，默认`ts`
   */
  outputType?: "ts" | "js";
  /**
   * 缓存配置
   * @description 用于临时保存获取到的文档内容-默认path=`.${LIB_NAME}` 目录
   */
  cache?: DocCacheObjConfig;
  /**
   * 生成代码模式
   * @default "proxy"
   * @description 兼容不同环境对于代码包装API的支持-默认`proxy`
   * @description `proxy` 模式下-会生成一个Proxy代理对象-调用时才会根据读取属性动态生成代码并执行
   * @description `memory` 模式下-会直接将代码缓存到内存中-调用时直接执行生成的代码
   */
  codeMode?: "proxy" | "memory";
  /**
   * 代码导出模式
   * @default "module"
   * @description 决定外部如何导入使用、生成的代码导出方式-默认`module`
   * @description `api` 模式下-每一个导出语句就是一个接口函数
   * @description `module` 模式下-每一个导出语句就是一个对象-对象的属性就是接口函数
   * @description `doc` 模式下-只会具名导出一个对象-对象内包含所有模块对象-每个模块对象的属性就是接口函数
   * @description `default` 模式下-等同于 `doc` 模式-只是是默认导出而非具名导出
   */
  exportMode?: "doc" | "module" | "api" | "default";
  /**
   * 请求器
   * @default "({url,...ops})=>globalThis.fetch(url, ops)"
   * @description 实际发送请求的函数-只能接收一个对象参数-至少包含`url`/`method`/`headers`属性-默认`({url,...ops})=>globalThis.fetch(url, ops)`
   */
  requestor?: string;
  /**
   * 文件前置代码
   * @default []
   * @description 生成的文件顶部添加的自定义代码
   */
  fileHeader?: FileCodeType;
  /**
   * 文件后置代码
   * @default []
   * @description 生成的文件底部添加的自定义代码
   */
  fileFooter?: FileCodeType;
  /**
   * 文档解析器
   * @description 用于支持其他协议格式的文档转为`openapi v3+` 规范
   */
  docParser?: ((doc: any) => OpenAPIObject) | null;
  /**
   * 接口解析器
   * @description 用于完全把控每个接口的生成参数-返回的配置对象将会合并到`ctx.config`中
   */
  apiParser?: ((ctx: ApiParamsCtx) => DocApiConfig) | null;
  /**
   * 接口结果取用状态码
   * @default 200
   * @description 根据码从接口responses的定义中取成功的类型定义-默认`200`
   */
  apiResponseCode?: number | string | ((ctx: ApiParamsCtx) => number | string);
  /**
   * 接口结果取用类型
   * @default "*\/*"
   * @description 根据类型从接口responses的定义中取成功的类型定义-默认`*\/*`
   * @description 如果开启了`enableMultiContentType`-则会根据`Content-Type`取不同的类型定义
   */
  apiResponseType?: string | ((ctx: ApiParamsCtx) => string);
  /**
   * 接口请求体取用类型
   * @default "*\/*"
   * @description 根据类型从接口requestBody的定义中取请求体的类型定义，默认`*\/*`
   * @description 如果开启了`enableMultiContentType`-此配置将不生效
   */
  apiRequestType?: string | ((ctx: ApiParamsCtx) => string);
  /**
   * ts生成配置
   * @default true
   * @description 用于配置生成的 TypeScript 类型文件的一些选项-默认path=`types`
   */
  dts?: DocDtsObjConfig;
  /**
   * 是否开启多请求体类型支持
   * @default false
   * @description 开启后同一个接口会根据不同的`Content-Type`类型生成不同的请求函数
   * @description 开启后 `apiRequestBodyType` 配置将会失效
   */
  enableMultiContentType?: boolean;
}

export type ApiDocConfig = Required<DocConfig> & {
  cache: Required<DocCacheObjConfig>;
  dts: Required<DocDtsObjConfig>;
};

export interface Config extends Omit<DocConfig, "name" | "url"> {
  /** 文档配置 */
  docs?: DocConfig[];
}
