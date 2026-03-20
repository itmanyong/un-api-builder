import type { DocDtsObjConfig, SchemaJson } from "@/types";
import type { SchemaObject, ReferenceObject } from "openapi3-ts/oas31";

/** 支持自定义类型转换的 schema 键名列表 */
const TYPE_CONVERT_KEYS: (keyof SchemaObject)[] = [
  "const",
  "enum",
  "allOf",
  "anyOf",
  "oneOf",
  "not",
  "type",
  "items",
  "prefixItems",
  "properties",
  "additionalProperties",
];

/**
 * 返回指定$ref引用的类型名称
 * @param ref $ref引用字符串
 * @param prefix 前缀，用于生成全路径类型名
 * @returns 类型名
 */
export const resolveRefTypeName = (ref: string, prefix?: string) => {
  const name =
    ref
      .split("/")
      .pop()
      ?.replace(/[^a-zA-Z0-9_]/g, "") || "any";
  return name === "any" ? name : prefix ? `${prefix}.${name}` : name;
};

/**
 * 安全地解析枚举值
 * @param item 枚举项（可能是 JSON 字符串或原始值）
 * @returns 解析后的枚举值，解析失败返回null
 */
const parseEnumValue = (item: unknown): string | number | boolean | null => {
  try {
    const parseItem = typeof item === "string" ? JSON.parse(item) : item;
    const enumValue = parseItem?.name ?? parseItem?.value ?? parseItem?.key ?? parseItem?.id ?? null;
    return enumValue ?? null;
  } catch {
    return null;
  }
};

/**
 * 将 OAS 枚举值转换为 TypeScript 类型字符串
 * @param schema 包含enum属性的schema对象
 * @returns TypeScript 枚举类型字符串
 */
const enumToTsType = (schema: SchemaObject): string => {
  if (!schema.enum || !Array.isArray(schema.enum)) return `any`;

  const uniqueValues = [...new Set(schema.enum.map((item) => {
    const enumValue = parseEnumValue(item);
    if (enumValue === null) return "any";

    switch (schema.type) {
      case "string":
        return `"${enumValue}"`;
      case "number":
      case "integer":
        return Number(enumValue) || "any";
      case "boolean":
        return Boolean(enumValue) || "any";
      default:
        return "any";
    }
  }))];

  const enumTypeStr = uniqueValues.join(" | ");
  return enumTypeStr === "any" ? `any` : enumTypeStr;
};

/**
 * 将组合类型（allOf/anyOf/oneOf）schema 转换为 TypeScript 类型字符串
 * @param schemas schema对象数组
 * @param separator 连接符，"&"表示allOf，"|"表示anyOf/oneOf
 * @param schemaToTs 递归转换函数
 * @param prefix 类型前缀
 * @returns TypeScript 类型字符串
 */
const combineSchemaTypes = (
  schemas: (SchemaObject | ReferenceObject)[],
  separator: "&" | "|",
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  prefix?: string,
): string => {
  const parts = schemas.map((s) => schemaToTs(s, prefix));
  if (parts.length === 1) return parts[0];
  return `(${parts.join(` ${separator} `)})`;
};

/**
 * 将 OAS object 类型 schema 转换为 TypeScript 类型字符串
 * @param schema schema对象
 * @param schemaToTs 递归转换函数
 * @param prefix 类型前缀
 * @returns TypeScript 对象类型字符串
 */
const objectToTsType = (
  schema: SchemaObject,
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  prefix?: string,
): string => {
  const hasProps = schema.properties && Object.keys(schema.properties).length > 0;
  const hasAdditionalProps = schema.additionalProperties !== undefined && schema.additionalProperties !== false;

  if (hasProps) {
    const props = Object.keys(schema.properties!).map((key) => {
      const propSchema = schema.properties![key];
      const isRequired = schema.required?.includes(key);
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
      return `  ${safeKey}${isRequired ? "" : "?"}: ${schemaToTs(propSchema, prefix)};`;
    });

    if (hasAdditionalProps && schema.additionalProperties !== false) {
      const addType = schema.additionalProperties === true ? "any" : schemaToTs(schema.additionalProperties as SchemaObject | ReferenceObject, prefix);
      props.push(`  [key: string]: ${addType};`);
    }
    return `{\n${props.join("\n")}\n}`;
  }

  if (hasAdditionalProps && schema.additionalProperties !== false) {
    const addType = schema.additionalProperties === true ? "any" : schemaToTs(schema.additionalProperties as SchemaObject | ReferenceObject, prefix);
    return `Record<string, ${addType}>`;
  }

  return `Record<string, any>`;
};

/**
 * 将 OAS array 类型 schema 转换为 TypeScript 类型字符串
 * @param schema schema对象
 * @param schemaToTs 递归转换函数
 * @param prefix 类型前缀
 * @returns TypeScript 数组类型字符串
 */
const arrayToTsType = (
  schema: SchemaObject,
  schemaToTs: (schema: SchemaObject | ReferenceObject, prefix?: string) => string,
  prefix?: string,
): string => {
  if (schema.prefixItems && schema.prefixItems.length > 0) {
    const tupleTypes = schema.prefixItems.map((s) => schemaToTs(s, prefix));
    return `[${tupleTypes.join(", ")}]`;
  }

  let itemType = schemaToTs(schema.items!, prefix);
  if (itemType.includes("|") || itemType.includes("&")) {
    itemType = `(${itemType})`;
  }
  return `${itemType}[]`;
};

/**
 * 将 OAS 基础类型转换为 TypeScript 类型字符串
 * @param types OAS 类型数组
 * @returns TypeScript 基础类型字符串
 */
const basicTypeToTs = (types: string[]): string => {
  const mappedTypes = types.map((t) => {
    switch (t) {
      case "string":
        return "string";
      case "number":
      case "integer":
        return "number";
      case "boolean":
        return "boolean";
      default:
        return "any";
    }
  });

  if (mappedTypes.length === 1) return mappedTypes[0];
  return `(${mappedTypes.join(" | ")})`;
};

/**
 * 处理 nullable 和 const 属性
 * @param schema schema对象
 * @param baseType 基础类型字符串
 * @returns 添加nullable/const后的类型字符串
 */
const applyModifiers = (schema: SchemaObject, baseType: string): string => {
  let typeStr = baseType;

  if ("nullable" in schema && schema.nullable !== undefined) {
    typeStr += " | null";
  }

  if (schema.const !== undefined) {
    const constValue = typeof schema.const === "string" ? `"${schema.const}"` : String(schema.const);
    return `${constValue}${typeStr ? ` & ${typeStr}` : ""}`;
  }

  return typeStr;
};

/**
 * 创建一个SchemaObject类型转换为TypeScript类型的公共函数
 * @param typeConvert 自定义类型转换器
 * @returns schemaToTs转换函数
 */
export const createSchemaToTs = (typeConvert?: DocDtsObjConfig["typeConvert"]) => {
  const schemaToTs = (schemaJson: SchemaObject | ReferenceObject, prefix?: string): string => {
    if (!schemaJson) return "any";

    if ("$ref" in schemaJson && schemaJson.$ref) {
      return resolveRefTypeName(schemaJson.$ref, prefix);
    }

    const sc = schemaJson as SchemaObject;

    if (typeConvert) {
      for (const key of TYPE_CONVERT_KEYS) {
        if (sc[key] !== undefined && typeConvert[key]) {
          return typeConvert[key]!(sc);
        }
      }
    }

    let baseType = "";

    if (sc.const !== undefined) {
      const constType = typeof sc.const === "string" ? `"${sc.const}"` : String(sc.const);
      return applyModifiers(sc, constType);
    }

    if (sc.enum) {
      baseType = enumToTsType(sc);
      return applyModifiers(sc, baseType);
    }

    if (sc.allOf) {
      baseType = combineSchemaTypes(sc.allOf, "&", schemaToTs, prefix);
      return applyModifiers(sc, baseType);
    }

    if (sc.anyOf) {
      baseType = combineSchemaTypes(sc.anyOf, "|", schemaToTs, prefix);
      return applyModifiers(sc, baseType);
    }

    if (sc.oneOf) {
      baseType = combineSchemaTypes(sc.oneOf, "|", schemaToTs, prefix);
      return applyModifiers(sc, baseType);
    }

    if (sc.not) {
      baseType = `Exclude<any, ${schemaToTs(sc.not, prefix)}>`;
      return applyModifiers(sc, baseType);
    }

    const types = Array.isArray(sc.type) ? sc.type : sc.type ? [sc.type] : [];
    const hasNull = types.includes("null");
    const nonNullTypes = types.filter((t) => t !== "null");

    const isObject = nonNullTypes.includes("object") || (!nonNullTypes.length && (sc.properties || sc.additionalProperties !== undefined));
    if (isObject || sc.properties) {
      baseType = objectToTsType(sc, schemaToTs, prefix);
      return hasNull ? `${baseType} | null` : baseType;
    }

    const isArray = nonNullTypes.includes("array") || (!nonNullTypes.length && (sc.items || sc.prefixItems));
    if (isArray) {
      baseType = arrayToTsType(sc, schemaToTs, prefix);
      return hasNull ? `${baseType} | null` : baseType;
    }

    if (nonNullTypes.length > 0) {
      baseType = basicTypeToTs(nonNullTypes);
      return hasNull ? `${baseType} | null` : baseType;
    }

    return "any";
  };

  return schemaToTs;
};