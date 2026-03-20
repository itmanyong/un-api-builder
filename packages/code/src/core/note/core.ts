import { type ApiParamsCtx } from '@/types';
import { type ParameterObject, type ReferenceObject, type SchemaObject } from 'openapi3-ts/oas31';


/** 表格头注释 */
const TABLE_HEADER = "| --- | --- | --- | --- | --- |";
const TABLE_COLUMNS = "| 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |";

/**
 * 构建 API 注释的表格行
 */
const buildApiRow = (module: string, name: string, url: string, method: string, summary: string): string => {
  return `| ${module} | ${name} | ${url} | ${method} | ${summary} |`;
};

/**
 * 获取单接口注释
 */
export const getApiNote = (apiConfig: Required<ApiParamsCtx>): string => {
  const { url, method, module, summary, name } = apiConfig.config ?? {};
  return [
    `/**`,
    ` * ${TABLE_COLUMNS}`,
    ` * ${TABLE_HEADER}`,
    ` * ${buildApiRow(module, name, url, method, summary)}`,
    ` */`,
  ].join("\n");
};

/**
 * 获取单接口注释行（无包裹语法）
 */
export const getApiNoteRow = (apiConfig: Required<ApiParamsCtx>): string => {
  const { url, method, module, summary, name } = apiConfig.config ?? {};
  return buildApiRow(module, name, url, method, summary);
};

/**
 * 获取单个模块注释
 */
export const getModuleNote = (moduleName: string, apiModuleList: Required<ApiParamsCtx>[]): string => {
  const rows = apiModuleList.map((apiConfig) => getApiNoteRow(apiConfig));
  return [
    `/**`,
    ` * ${TABLE_COLUMNS}`,
    ` * ${TABLE_HEADER}`,
    ` * ${rows.join("\n * ")}`,
    ` */`,
  ].join("\n");
};

/**
 * 获取单个模块注释行（无包裹语法）
 */
export const getModuleNoteRows = (moduleName: string, apiModuleList: Required<ApiParamsCtx>[]): string => {
  return apiModuleList.map((apiConfig) => getApiNoteRow(apiConfig)).join("\n * ");
};

/**
 * 获取文档注释
 */
export const getDocNote = (moduleMap: Map<string, Required<ApiParamsCtx>[]>): string => {
  const rows: string[] = [];
  moduleMap.forEach((apiModuleList, moduleName) => {
    rows.push(getModuleNoteRows(moduleName, apiModuleList));
  });
  return [
    `/**`,
    ` * ${TABLE_COLUMNS}`,
    ` * ${TABLE_HEADER}`,
    ` * ${rows.join("\n * ")}`,
    ` */`,
  ].join("\n");
};

/** =======================================================字段级别注释============================================================= */

/**
 * 生成字段的 TypeScript JSDoc 注释
 */
export const getFieldNote = (
  fieldName: string,
  schema: SchemaObject | ReferenceObject,
  required: boolean,
  globalPrefix?: string,
): string => {
  if ("$ref" in schema) {
    const refName = schema.$ref?.split("/").pop() ?? "any";
    const fieldType = globalPrefix ? `${globalPrefix}.${refName}` : refName;
    const typeDesc = required ? fieldType : `${fieldType} (可选)`;
    return `/** ${typeDesc} */`;
  }

  const sc = schema as SchemaObject;
  const descriptions: string[] = [];

  if (sc.title) {
    descriptions.push(sc.title);
  }

  if (sc.description) {
    descriptions.push(sc.description);
  }

  if (sc.example !== undefined) {
    descriptions.push(`示例: ${JSON.stringify(sc.example)}`);
  }

  if (sc.default !== undefined) {
    descriptions.push(`默认值: ${JSON.stringify(sc.default)}`);
  }

  if (sc.enum && Array.isArray(sc.enum)) {
    descriptions.push(`可选值: ${sc.enum.map((v) => JSON.stringify(v)).join(", ")}`);
  }

  if (sc.deprecated) {
    descriptions.push("@deprecated");
  }

  const constraints: string[] = [];

  if (sc.minimum !== undefined && sc.maximum !== undefined) {
    if (sc.exclusiveMinimum && sc.exclusiveMaximum) {
      constraints.push(`范围: (${sc.minimum}, ${sc.maximum})`);
    } else if (sc.exclusiveMinimum) {
      constraints.push(`范围: (${sc.minimum}, ${sc.maximum}]`);
    } else if (sc.exclusiveMaximum) {
      constraints.push(`范围: [${sc.minimum}, ${sc.maximum})`);
    } else {
      constraints.push(`范围: [${sc.minimum}, ${sc.maximum}]`);
    }
  } else if (sc.minimum !== undefined) {
    constraints.push(sc.exclusiveMinimum ? `最小值: >${sc.minimum}` : `最小值: >=${sc.minimum}`);
  } else if (sc.maximum !== undefined) {
    constraints.push(sc.exclusiveMaximum ? `最大值: <${sc.maximum}` : `最大值: <=${sc.maximum}`);
  }

  if (sc.minLength !== undefined && sc.maxLength !== undefined) {
    constraints.push(`长度: ${sc.minLength}-${sc.maxLength}字符`);
  } else if (sc.minLength !== undefined) {
    constraints.push(`最小长度: ${sc.minLength}字符`);
  } else if (sc.maxLength !== undefined) {
    constraints.push(`最大长度: ${sc.maxLength}字符`);
  }

  if (sc.pattern) {
    constraints.push(`正则: ${sc.pattern}`);
  }

  if (sc.minItems !== undefined && sc.maxItems !== undefined) {
    constraints.push(`数组长度: ${sc.minItems}-${sc.maxItems}`);
  } else if (sc.minItems !== undefined) {
    constraints.push(`最少${sc.minItems}项`);
  } else if (sc.maxItems !== undefined) {
    constraints.push(`最多${sc.maxItems}项`);
  }

  if (sc.uniqueItems) {
    constraints.push("不可重复");
  }

  if (sc.format) {
    constraints.push(`格式: ${sc.format}`);
  }

  const fieldType = getFieldType(schema, globalPrefix);
  const typeDesc = required ? fieldType : `${fieldType} (可选)`;

  const allDescriptions = [...descriptions, ...constraints].filter(Boolean);

  if (allDescriptions.length === 0) {
    return `/** ${typeDesc} */`;
  }

  const descText = allDescriptions.join(" | ");
  return `/** ${typeDesc} - ${descText} */`;
};

/**
 * 获取字段的 TypeScript 类型字符串
 */
export const getFieldType = (schema: SchemaObject | ReferenceObject, globalPrefix?: string): string => {
  if ("$ref" in schema && schema.$ref) {
    const refName = schema.$ref.split("/").pop() ?? "any";
    return refName === "any" ? "any" : globalPrefix ? `${globalPrefix}.${refName}` : refName;
  }

  const sc = schema as SchemaObject;

  if (sc.const !== undefined) {
    return typeof sc.const === "string" ? `"${sc.const}"` : String(sc.const);
  }

  if (sc.enum && Array.isArray(sc.enum)) {
    const enumStrs = sc.enum.map((v) => (typeof v === "string" ? `"${v}"` : String(v)));
    return [...new Set(enumStrs)].join(" | ");
  }

  if (sc.allOf) return "object";
  if (sc.anyOf) return "object";
  if (sc.oneOf) return "object";

  const types = Array.isArray(sc.type) ? sc.type : sc.type ? [sc.type] : [];
  const hasNull = types.includes("null");
  const nonNullTypes = types.filter((t) => t !== "null");

  if (nonNullTypes.includes("object") || (!nonNullTypes.length && sc.properties)) {
    return "object";
  }

  if (nonNullTypes.includes("array") || (!nonNullTypes.length && sc.items)) {
    return "array";
  }

  const typeMap: Record<string, string> = {
    string: "string",
    number: "number",
    integer: "number",
    boolean: "boolean",
    file: "File",
  };

  const mapped = nonNullTypes.map((t) => typeMap[t] ?? "any");
  const baseType = mapped.length === 1 ? mapped[0] : `(${mapped.join(" | ")})`;

  if (hasNull) return `${baseType} | null`;
  return baseType;
};

/**
 * 生成对象类型的字段注释映射
 */
export const getObjectFieldNotes = (
  properties: Record<string, SchemaObject | ReferenceObject> | undefined,
  required: string[] | undefined,
): Map<string, string> => {
  const notes = new Map<string, string>();

  if (!properties) return notes;

  for (const [fieldName, fieldSchema] of Object.entries(properties)) {
    const isRequired = required?.includes(fieldName) ?? false;
    notes.set(fieldName, getFieldNote(fieldName, fieldSchema, isRequired));
  }

  return notes;
};

/**
 * 生成带注释的 TypeScript 类型字段定义
 */
export const getTypedField = (
  fieldName: string,
  schema: SchemaObject | ReferenceObject,
  required: boolean,
  indent: string = "  ",
): string => {
  const safeName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(fieldName) ? fieldName : `"${fieldName}"`;
  const optionalMark = required ? "" : "?";
  const fieldType = getFieldType(schema);
  const note = getFieldNote(fieldName, schema, required);

  return `${indent}${note}\n${indent}${safeName}${optionalMark}: ${fieldType};`;
};

/**
 * 生成带注释的 TypeScript 接口类型
 */
export const getTypedObject = (
  typeName: string,
  properties: Record<string, SchemaObject | ReferenceObject> | undefined,
  required: string[] | undefined,
  indent: string = "  ",
): string => {
  if (!properties || Object.keys(properties).length === 0) {
    return `export type ${typeName} = Record<string, any>;`;
  }

  const fields = Object.entries(properties).map(([fieldName, fieldSchema]) => {
    const isRequired = required?.includes(fieldName) ?? false;
    return getTypedField(fieldName, fieldSchema, isRequired, indent);
  });

  return [
    `export interface ${typeName} {`,
    fields.join("\n\n"),
    `}`,
  ].join("\n");
};

/**
 * 判断参数项是否必填
 */
export const isParamsRequired = (apiConfig: ApiParamsCtx, type: keyof ApiParamsCtx): boolean => {
  const params = apiConfig[type];
  if (typeof params === "object" && params !== null && "required" in params && params?.required) return true;
  if (Array.isArray(params) && params.some((v) => v.required)) return true;
  return false;
};

/**
 * 生成带注释的 TypeScript 类型字段（支持嵌套类型）
 */
export const getTypedFieldWithNested = (
  fieldName: string,
  schema: SchemaObject | ReferenceObject,
  required: boolean,
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  globalPrefix?: string,
  indent: string = "  ",
): string => {
  const safeName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(fieldName) ? fieldName : `"${fieldName}"`;
  const optionalMark = required ? "" : "?";
  const fieldType = schemaToTs(schema, globalPrefix);
  const note = getFieldNote(fieldName, schema, required, globalPrefix);

  return `${indent}${note}\n${indent}${safeName}${optionalMark}: ${fieldType};`;
};

/**
 * 生成带注释的 TypeScript 对象类型字符串（支持嵌套类型）
 */
export const getTypedObjectWithNested = (
  typeName: string,
  properties: Record<string, SchemaObject | ReferenceObject> | undefined,
  required: string[] | undefined,
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  globalPrefix?: string,
  indent: string = "  ",
): string => {
  if (!properties || Object.keys(properties).length === 0) {
    return `Record<string, any>`;
  }

  const fields = Object.entries(properties).map(([fieldName, fieldSchema]) => {
    const isRequired = required?.includes(fieldName) ?? false;
    return getTypedFieldWithNested(fieldName, fieldSchema, isRequired, schemaToTs, globalPrefix, indent);
  });

  return [
    `{`,
    fields.join("\n\n"),
    `}`,
  ].join("\n");
};

/**
 * 生成带注释的 TypeScript 参数类型字符串
 */
export const getTypedParams = (
  params: ParameterObject[] | undefined,
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  globalPrefix?: string,
  indent: string = "  ",
): string => {
  if (!params || params.length === 0) return `Record<string, any>`;

  const props = params.map((param) => {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(param.name) ? param.name : `"${param.name}"`;
    const required = param.required ? "" : "?";
    const note = getFieldNote(param.name, param.schema as SchemaObject | ReferenceObject, !!param.required, globalPrefix);
    const fieldType = schemaToTs(param.schema as SchemaObject | ReferenceObject, globalPrefix);
    return `${indent}${note}\n${indent}${safeKey}${required}: ${fieldType};`;
  });

  return `{\n${props.join("\n\n")}\n}`;
};