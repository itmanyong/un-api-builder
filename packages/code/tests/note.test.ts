import { describe, it, expect } from "vitest";
import {
  getFieldNote,
  getFieldType,
  getTypedField,
  getTypedObject,
  getObjectFieldNotes,
  isParamsRequired,
  getTypedParams,
  getTypedObjectWithNested,
} from "../src/core/note/core";
import type { SchemaObject, ReferenceObject, ParameterObject } from "openapi3-ts/oas31";

describe("note/core - getFieldNote", () => {
  it("should handle basic string field", () => {
    const schema: SchemaObject = { type: "string" };
    const result = getFieldNote("name", schema, true);
    expect(result).toBe("/** string */");
  });

  it("should handle optional string field", () => {
    const schema: SchemaObject = { type: "string" };
    const result = getFieldNote("name", schema, false);
    expect(result).toBe("/** string (可选) */");
  });

  it("should handle field with description", () => {
    const schema: SchemaObject = { type: "string", description: "用户名" };
    const result = getFieldNote("name", schema, true);
    expect(result).toContain("用户名");
  });

  it("should handle field with title", () => {
    const schema: SchemaObject = { type: "string", title: "用户名称" };
    const result = getFieldNote("name", schema, true);
    expect(result).toContain("用户名称");
  });

  it("should handle field with example", () => {
    const schema: SchemaObject = { type: "string", example: "john" };
    const result = getFieldNote("name", schema, true);
    expect(result).toContain("示例:");
    expect(result).toContain("john");
  });

  it("should handle field with default value", () => {
    const schema: SchemaObject = { type: "number", default: 0 };
    const result = getFieldNote("count", schema, true);
    expect(result).toContain("默认值:");
  });

  it("should handle field with enum", () => {
    const schema: SchemaObject = { type: "string", enum: ["A", "B", "C"] };
    const result = getFieldNote("status", schema, true);
    expect(result).toContain("可选值:");
    expect(result).toContain('"A"');
    expect(result).toContain('"B"');
  });

  it("should handle deprecated field", () => {
    const schema: SchemaObject = { type: "string", deprecated: true };
    const result = getFieldNote("oldField", schema, false);
    expect(result).toContain("@deprecated");
  });

  it("should handle field with minimum and maximum", () => {
    const schema: SchemaObject = { type: "number", minimum: 0, maximum: 100 };
    const result = getFieldNote("score", schema, true);
    expect(result).toContain("范围:");
  });

  it("should handle field with exclusiveMinimum", () => {
    const schema: SchemaObject = { type: "number", minimum: 0, exclusiveMinimum: true };
    const result = getFieldNote("value", schema, true);
    expect(result).toContain("最小值:");
    expect(result).toContain(">");
  });

  it("should handle field with exclusiveMaximum", () => {
    const schema: SchemaObject = { type: "number", maximum: 10, exclusiveMaximum: true };
    const result = getFieldNote("value", schema, true);
    expect(result).toContain("最大值:");
    expect(result).toContain("<");
  });

  it("should handle field with minLength and maxLength", () => {
    const schema: SchemaObject = { type: "string", minLength: 1, maxLength: 50 };
    const result = getFieldNote("username", schema, true);
    expect(result).toContain("长度:");
    expect(result).toContain("1-50字符");
  });

  it("should handle field with pattern", () => {
    const schema: SchemaObject = { type: "string", pattern: "^\\d+$" };
    const result = getFieldNote("code", schema, true);
    expect(result).toContain("正则:");
    expect(result).toContain("^\\d+$");
  });

  it("should handle field with minItems and maxItems", () => {
    const schema: SchemaObject = { type: "array", minItems: 1, maxItems: 10 };
    const result = getFieldNote("items", schema, true);
    expect(result).toContain("数组长度:");
  });

  it("should handle field with uniqueItems", () => {
    const schema: SchemaObject = { type: "array", uniqueItems: true };
    const result = getFieldNote("uniqueList", schema, true);
    expect(result).toContain("不可重复");
  });

  it("should handle field with format", () => {
    const schema: SchemaObject = { type: "string", format: "email" };
    const result = getFieldNote("email", schema, true);
    expect(result).toContain("格式:");
    expect(result).toContain("email");
  });

  it("should handle $ref field with globalPrefix", () => {
    const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
    const result = getFieldNote("user", schema, true, "QianniaoModels");
    expect(result).toContain("QianniaoModels.User");
  });

  it("should handle $ref field without globalPrefix", () => {
    const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
    const result = getFieldNote("user", schema, true);
    expect(result).toContain("User");
  });

  it("should combine multiple constraints", () => {
    const schema: SchemaObject = {
      type: "string",
      description: "用户名",
      minLength: 1,
      maxLength: 50,
      pattern: "^[a-z]+$",
    };
    const result = getFieldNote("username", schema, true);
    expect(result).toContain("用户名");
    expect(result).toContain("长度:");
    expect(result).toContain("正则:");
  });
});

describe("note/core - getFieldType", () => {
  it("should return string type", () => {
    const schema: SchemaObject = { type: "string" };
    expect(getFieldType(schema)).toBe("string");
  });

  it("should return number type for integer", () => {
    const schema: SchemaObject = { type: "integer" };
    expect(getFieldType(schema)).toBe("number");
  });

  it("should return boolean type", () => {
    const schema: SchemaObject = { type: "boolean" };
    expect(getFieldType(schema)).toBe("boolean");
  });

  it("should return array type", () => {
    const schema: SchemaObject = { type: "array" };
    expect(getFieldType(schema)).toBe("array");
  });

  it("should return object type", () => {
    const schema: SchemaObject = { type: "object" };
    expect(getFieldType(schema)).toBe("object");
  });

  it("should handle $ref correctly", () => {
    const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
    expect(getFieldType(schema)).toBe("User");
  });

  it("should handle $ref with globalPrefix", () => {
    const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
    expect(getFieldType(schema, "QianniaoModels")).toBe("QianniaoModels.User");
  });

  it("should handle const string value", () => {
    const schema: SchemaObject = { const: "active" };
    expect(getFieldType(schema)).toBe('"active"');
  });

  it("should handle const number value", () => {
    const schema: SchemaObject = { const: 1 };
    expect(getFieldType(schema)).toBe("1");
  });

  it("should handle enum values", () => {
    const schema: SchemaObject = { type: "string", enum: ["A", "B", "C"] };
    expect(getFieldType(schema)).toBe('"A" | "B" | "C"');
  });

  it("should handle enum with deduplication", () => {
    const schema: SchemaObject = { type: "string", enum: ["A", "A", "B"] };
    expect(getFieldType(schema)).toBe('"A" | "B"');
  });

  it("should handle nullable type", () => {
    const schema: SchemaObject = { type: ["string", "null"] };
    expect(getFieldType(schema)).toBe("string | null");
  });

  it("should handle allOf", () => {
    const schema: SchemaObject = { allOf: [] };
    expect(getFieldType(schema)).toBe("object");
  });

  it("should handle anyOf", () => {
    const schema: SchemaObject = { anyOf: [] };
    expect(getFieldType(schema)).toBe("object");
  });

  it("should handle oneOf", () => {
    const schema: SchemaObject = { oneOf: [] };
    expect(getFieldType(schema)).toBe("object");
  });

  it("should handle object with properties", () => {
    const schema: SchemaObject = { type: "object", properties: { name: { type: "string" } } };
    expect(getFieldType(schema)).toBe("object");
  });

  it("should handle array with items", () => {
    const schema: SchemaObject = { type: "array", items: { type: "string" } };
    expect(getFieldType(schema)).toBe("array");
  });
});

describe("note/core - getTypedField", () => {
  it("should generate typed field with comment", () => {
    const schema: SchemaObject = { type: "string", description: "用户名" };
    const result = getTypedField("name", schema, true);
    expect(result).toContain("/**");
    expect(result).toContain("name:");
    expect(result).toContain("string");
  });

  it("should handle optional field", () => {
    const schema: SchemaObject = { type: "string" };
    const result = getTypedField("name", schema, false);
    expect(result).toContain("name?:");
  });

  it("should handle non-standard field name with quotes", () => {
    const schema: SchemaObject = { type: "string" };
    const result = getTypedField("my-field", schema, true);
    expect(result).toContain('"my-field"');
  });

  it("should use custom indent", () => {
    const schema: SchemaObject = { type: "number" };
    const result = getTypedField("count", schema, true, "    ");
    expect(result).toContain("    /**");
    expect(result).toContain("    count:");
  });
});

describe("note/core - getTypedObject", () => {
  it("should generate typed object", () => {
    const properties: Record<string, SchemaObject> = {
      name: { type: "string", description: "名称" },
      age: { type: "number", description: "年龄" },
    };
    const result = getTypedObject("User", properties, ["name"]);
    expect(result).toContain("export interface User");
    expect(result).toContain("name:");
    expect(result).toContain("age?:");
  });

  it("should return Record<string, any> for empty properties", () => {
    const result = getTypedObject("Empty", {}, []);
    expect(result).toContain("Record<string, any>");
  });

  it("should handle required fields", () => {
    const properties: Record<string, SchemaObject> = {
      id: { type: "number" },
      name: { type: "string" },
    };
    const result = getTypedObject("Entity", properties, ["id"]);
    expect(result).toContain("id:");
    expect(result).toContain("name?:");
  });
});

describe("note/core - getObjectFieldNotes", () => {
  it("should generate field notes map", () => {
    const properties: Record<string, SchemaObject> = {
      name: { type: "string", description: "名称" },
      age: { type: "number", description: "年龄" },
    };
    const result = getObjectFieldNotes(properties, ["name"]);
    expect(result).toBeInstanceOf(Map);
    expect(result.get("name")).toBeDefined();
    expect(result.get("age")).toBeDefined();
  });

  it("should return empty Map for undefined properties", () => {
    const result = getObjectFieldNotes(undefined, []);
    expect(result.size).toBe(0);
  });

  it("should handle required field correctly", () => {
    const properties: Record<string, SchemaObject> = {
      name: { type: "string" },
    };
    const result = getObjectFieldNotes(properties, ["name"]);
    expect(result.get("name")).toContain("string");
  });
});

describe("note/core - isParamsRequired", () => {
  it("should return true for single required param", () => {
    const ctx = {
      query: { required: true } as ParameterObject,
    };
    expect(isParamsRequired(ctx, "query")).toBe(true);
  });

  it("should return false for single optional param", () => {
    const ctx = {
      query: { required: false } as ParameterObject,
    };
    expect(isParamsRequired(ctx, "query")).toBe(false);
  });

  it("should return true if any param in array is required", () => {
    const ctx = {
      query: [{ required: false }, { required: true }] as ParameterObject[],
    };
    expect(isParamsRequired(ctx, "query")).toBe(true);
  });

  it("should return false if no params", () => {
    const ctx = {};
    expect(isParamsRequired(ctx, "query")).toBe(false);
  });
});

describe("note/core - getTypedParams", () => {
  const mockSchemaToTs = (schema: SchemaObject | ReferenceObject) => {
    if ("$ref" in schema) return schema.$ref!.split("/").pop()!;
    return schema.type || "any";
  };

  it("should return Record<string, any> for undefined params", () => {
    const result = getTypedParams(undefined, mockSchemaToTs);
    expect(result).toBe("Record<string, any>");
  });

  it("should return Record<string, any> for empty params", () => {
    const result = getTypedParams([], mockSchemaToTs);
    expect(result).toBe("Record<string, any>");
  });

  it("should generate typed params", () => {
    const params: ParameterObject[] = [
      { name: "id", required: true, schema: { type: "number" } },
      { name: "name", required: false, schema: { type: "string" } },
    ];
    const result = getTypedParams(params, mockSchemaToTs);
    expect(result).toContain("id:");
    expect(result).toContain("name?:");
  });

  it("should handle params with $ref", () => {
    const params: ParameterObject[] = [
      { name: "userId", required: true, schema: { $ref: "#/components/schemas/UserId" } },
    ];
    const result = getTypedParams(params, mockSchemaToTs, "Models");
    expect(result).toContain("UserId");
  });
});

describe("note/core - getTypedObjectWithNested", () => {
  const mockSchemaToTs = (schema: SchemaObject | ReferenceObject, prefix?: string) => {
    if ("$ref" in schema) {
      const name = schema.$ref!.split("/").pop()!;
      return prefix ? `${prefix}.${name}` : name;
    }
    if (schema.type === "array" && "items" in schema) return "array";
    return schema.type || "any";
  };

  it("should return Record<string, any> for empty properties", () => {
    const result = getTypedObjectWithNested("", {}, [], mockSchemaToTs);
    expect(result).toBe("Record<string, any>");
  });

  it("should generate nested object", () => {
    const properties: Record<string, SchemaObject> = {
      name: { type: "string", description: "名称" },
    };
    const result = getTypedObjectWithNested("", properties, ["name"], mockSchemaToTs);
    expect(result).toContain("{");
    expect(result).toContain("name:");
    expect(result).toContain("string");
  });
});
