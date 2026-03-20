import type { OpenAPIObject, OperationObject, SchemaObject, ReferenceObject, PathItemObject, ParameterObject } from "openapi3-ts/oas31";
import type { SchemaObject as SchemaObject30 } from "openapi3-ts/oas30";


export type SchemaJson = SchemaObject | SchemaObject30;

export type RecordType<V = any> = Record<string, V>;

export interface ApiRequesterOptions extends RecordType {
  url: string;
  method?: string;
  headers?: RecordType<string>;
  summary?: string;
  description?: string;
}

export type ApiRequesterType = (options: ApiRequesterOptions) => Promise<any>;

// 将接口的类型完全聚合成一个类型
export interface ApiGenericWithFlags {
  query: unknown;
  params: unknown;
  data: unknown;
  result: unknown;
  queryRequired?: boolean;
  paramsRequired?: boolean;
  dataRequired?: boolean;
}
// 生成接口函数类型
export type ApiFunctionGenerate<ApiOptions, ApiResult, G extends ApiGenericWithFlags> = (
  options: ApiOptions &
    (G["queryRequired"] extends true ? { query: G["query"] } : { query?: G["query"] }) &
    (G["paramsRequired"] extends true ? { params: G["params"] } : { params?: G["params"] }) &
    (G["dataRequired"] extends true ? { data: G["data"] } : { data?: G["data"] }) &
    RecordType,
) => ApiResult;
