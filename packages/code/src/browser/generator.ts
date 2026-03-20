import { LIB_NAME } from "@/shared/constants";
import type { ApiRequesterType, ApiRequesterOptions, RecordType } from "@/types";

/** 标记属性键名 */
const API_BUILDER_KEY = "__un_api_builder" as const;
const API_DEFINE_KEY = "__un_api_builder_api_define" as const;

/** 属性描述符配置 */
interface PropertyDescriptorConfig {
  enumerable?: boolean;
  writable?: boolean;
  configurable?: boolean;
}

/**
 * 创建带有标记属性的对象
 */
const createObject = <T extends object>(
  value: T,
  propertyFields?: RecordType,
  propertyDescriptorMap?: RecordType<PropertyDescriptorConfig>,
): T => {
  const descriptorMap = Object.entries({
    [API_BUILDER_KEY]: true,
    ...(propertyFields ?? {}),
  }).reduce<Record<PropertyKey, PropertyDescriptor>>((acc, [prop, propValue]) => {
    acc[prop] = {
      value: propValue,
      enumerable: false,
      writable: false,
      configurable: false,
      ...(propertyDescriptorMap?.[prop] ?? {}),
    };
    return acc;
  }, {});
  Object.defineProperties(value, descriptorMap);
  return value;
};

/**
 * 生成单个 API 函数（内存模式）
 */
export const createMemoryApi = <T extends ApiRequesterOptions>(
  apiDefine: T,
  requestor: ApiRequesterType,
): ((config?: RecordType) => Promise<RecordType>) & RecordType & { [API_DEFINE_KEY]: T } => {
  const { path, method, headers, options } = apiDefine;
  const apiFn = (config?: RecordType): Promise<RecordType> => {
    return requestor({
      url: path,
      method,
      headers: { ...headers, ...config?.headers },
      ...options,
      ...config,
    } as ApiRequesterOptions);
  };
  return createObject(apiFn as RecordType, { [API_DEFINE_KEY]: apiDefine }) as typeof apiFn & RecordType & { [API_DEFINE_KEY]: T };
};

/**
 * 生成模块级 API 对象（内存模式）
 */
export const createMemoryModule = <T extends RecordType<ApiRequesterOptions>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): {
  [K in keyof T]: ReturnType<typeof createMemoryApi<T[keyof T]>>;
} & RecordType => {
  const moduleObj = {} as {
    [K in keyof T]: ReturnType<typeof createMemoryApi<T[K]>>;
  };
  for (const key of Object.keys(apiDefine) as (keyof T)[]) {
    moduleObj[key] = createMemoryApi(apiDefine[key], requestor);
  }
  return moduleObj as {
    [K in keyof T]: ReturnType<typeof createMemoryApi<T[K]>>;
  } & RecordType;
};

/**
 * 生成文档级 API 对象（内存模式）
 */
export const createMemoryDoc = <T extends RecordType<RecordType<ApiRequesterOptions>>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): {
  [K in keyof T]: ReturnType<typeof createMemoryModule<T[K]>>;
} & RecordType => {
  const docObj = {} as {
    [K in keyof T]: ReturnType<typeof createMemoryModule<T[K]>>;
  };
  for (const key of Object.keys(apiDefine) as (keyof T)[]) {
    docObj[key] = createMemoryModule(apiDefine[key], requestor);
  }
  return docObj as {
    [K in keyof T]: ReturnType<typeof createMemoryModule<T[K]>>;
  } & RecordType;
};

/**
 * 生成默认导出 API 对象（内存模式）
 */
export const createMemoryDefault = <T extends RecordType<RecordType<ApiRequesterOptions>>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): ReturnType<typeof createMemoryDoc<T>> => {
  return createMemoryDoc(apiDefine, requestor);
};

/** =======================================================代理模式============================================================= */

/**
 * 创建带有 Vue 代理标记的对象
 */
const createProxyObject = <T extends object>(
  value: T,
  propertyFields?: RecordType,
  propertyDescriptorMap?: RecordType<PropertyDescriptorConfig>,
): T => {
  return createObject(value, {
    __v_skip: true,
    __v_isRef: false,
    __v_isReadonly: false,
    __v_isShallow: false,
    __v_isReactive: false,
    __v_isProxy: true,
    __v_isVNode: false,
    ...(propertyFields ?? {}),
  }, propertyDescriptorMap);
};

/**
 * 生成单个 API 函数（代理模式）
 */
export const createProxyApi = <T extends ApiRequesterOptions>(
  apiDefine: T,
  requestor: ApiRequesterType,
): RecordType => {
  const target = createProxyObject({} as RecordType, { [API_DEFINE_KEY]: apiDefine } as RecordType);
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) return target[prop as keyof typeof target];
      if (Reflect.has(apiDefine, prop)) return Reflect.get(apiDefine, prop);
      return createProxyApi(apiDefine, requestor);
    },
    apply(_target, _thisArg, [config]) {
      return createMemoryApi(apiDefine, requestor)(config);
    },
  });
};

/**
 * 生成模块级 API 对象（代理模式）
 */
export const createProxyModule = <T extends RecordType<ApiRequesterOptions>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): {
  [K in keyof T]: ReturnType<typeof createProxyApi<T[K]>>;
} & RecordType => {
  const target = createProxyObject({} as RecordType, { [API_DEFINE_KEY]: apiDefine } as RecordType);
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) return target[prop as keyof typeof target];
      if (Reflect.has(apiDefine, String(prop))) {
        return createProxyApi(apiDefine[prop as keyof T], requestor);
      }
      console.warn(`[${LIB_NAME}] 获取 API 代理对象属性 "${String(prop)}" 失败, 该属性未定义`);
      return void 0;
    },
    set(_target, prop) {
      console.warn(`[${LIB_NAME}] 设置 API 代理对象属性 "${String(prop)}" 失败, 不允许修改 API 定义`);
      return false;
    },
  }) as {
    [K in keyof T]: ReturnType<typeof createProxyApi<T[K]>>;
  } & RecordType;
};

/**
 * 生成文档级 API 对象（代理模式）
 */
export const createProxyDoc = <T extends RecordType<RecordType<ApiRequesterOptions>>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): {
  [K in keyof T]: ReturnType<typeof createProxyModule<T[K]>>;
} & RecordType => {
  const target = createProxyObject({} as RecordType, { [API_DEFINE_KEY]: apiDefine } as RecordType);
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) return target[prop as keyof typeof target];
      if (Reflect.has(apiDefine, String(prop))) {
        return createProxyModule(apiDefine[prop as keyof T], requestor);
      }
      console.warn(`[${LIB_NAME}] 获取 API 代理对象属性 "${String(prop)}" 失败, 该属性未定义`);
      return void 0;
    },
    set(_target, prop) {
      console.warn(`[${LIB_NAME}] 设置 API 代理对象属性 "${String(prop)}" 失败, 不允许修改 API 定义`);
      return false;
    },
  }) as {
    [K in keyof T]: ReturnType<typeof createProxyModule<T[K]>>;
  } & RecordType;
};

/**
 * 生成默认导出 API 对象（代理模式）
 */
export const createProxyDefault = <T extends RecordType<RecordType<ApiRequesterOptions>>>(
  apiDefine: T,
  requestor: ApiRequesterType,
): ReturnType<typeof createProxyDoc<T>> => {
  return createProxyDoc(apiDefine, requestor);
};