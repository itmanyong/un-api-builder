import { describe, it, expect } from "vitest";
import {
  resolveRefTypeName,
  createSchemaToTs,
} from "../src/core/ts/shared";
import type { SchemaObject, ReferenceObject } from "openapi3-ts/oas31";

describe("ts/shared - resolveRefTypeName", () => {
  it("should resolve simple ref name", () => {
    expect(resolveRefTypeName("#/components/schemas/User")).toBe("User");
  });

  it("should resolve ref name with prefix", () => {
    expect(resolveRefTypeName("#/components/schemas/User", "Models")).toBe("Models.User");
  });

  it("should handle ref with special characters", () => {
    expect(resolveRefTypeName("#/components/schemas/User123")).toBe("User123");
  });

  it("should return 'any' for empty ref", () => {
    expect(resolveRefTypeName("")).toBe("any");
  });
});

describe("ts/shared - createSchemaToTs", () => {
  const schemaToTs = createSchemaToTs();

  it("should return 'any' for null schema", () => {
    expect(schemaToTs(null as any)).toBe("any");
  });

  it("should return 'any' for undefined schema", () => {
    expect(schemaToTs(undefined as any)).toBe("any");
  });

  describe("primitive types", () => {
    it("should handle string type", () => {
      expect(schemaToTs({ type: "string" })).toBe("string");
    });

    it("should handle number type", () => {
      expect(schemaToTs({ type: "number" })).toBe("number");
    });

    it("should handle integer type as number", () => {
      expect(schemaToTs({ type: "integer" })).toBe("number");
    });

    it("should handle boolean type", () => {
      expect(schemaToTs({ type: "boolean" })).toBe("boolean");
    });

    it("should handle unknown type as any", () => {
      expect(schemaToTs({ type: "file" })).toBe("any");
    });
  });

  describe("$ref handling", () => {
    it("should resolve $ref", () => {
      const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
      expect(schemaToTs(schema)).toBe("User");
    });

    it("should resolve $ref with prefix", () => {
      const schema: ReferenceObject = { $ref: "#/components/schemas/User" };
      expect(schemaToTs(schema, "Models")).toBe("Models.User");
    });
  });

  describe("enum handling", () => {
    it("should handle enum with object values containing 'name' property", () => {
      const schema: SchemaObject = { type: "string", enum: [{ name: "WEB" }, { name: "MINIAPP" }] };
      expect(schemaToTs(schema)).toBe('"WEB" | "MINIAPP"');
    });

    it("should handle enum with object values containing 'value' property", () => {
      const schema: SchemaObject = { type: "number", enum: [{ value: 1 }, { value: 2 }] };
      expect(schemaToTs(schema)).toBe("1 | 2");
    });

    it("should return 'any' for simple string enum values", () => {
      const schema: SchemaObject = { type: "string", enum: ["A", "B", "C"] };
      expect(schemaToTs(schema)).toBe("any");
    });

    it("should deduplicate enum values", () => {
      const schema: SchemaObject = { type: "string", enum: [{ name: "A" }, { name: "A" }, { name: "B" }] };
      expect(schemaToTs(schema)).toBe('"A" | "B"');
    });
  });

  describe("const handling", () => {
    it("should handle const string", () => {
      const schema: SchemaObject = { const: "active" };
      expect(schemaToTs(schema)).toBe('"active" & "active"');
    });

    it("should handle const number", () => {
      const schema: SchemaObject = { const: 42 };
      expect(schemaToTs(schema)).toBe("42 & 42");
    });
  });

  describe("combination types", () => {
    it("should handle allOf", () => {
      const schema: SchemaObject = {
        allOf: [{ type: "string" }, { type: "number" }],
      };
      expect(schemaToTs(schema)).toBe("(string & number)");
    });

    it("should handle anyOf", () => {
      const schema: SchemaObject = {
        anyOf: [{ type: "string" }, { type: "number" }],
      };
      expect(schemaToTs(schema)).toBe("(string | number)");
    });

    it("should handle oneOf", () => {
      const schema: SchemaObject = {
        oneOf: [{ type: "string" }, { type: "number" }],
      };
      expect(schemaToTs(schema)).toBe("(string | number)");
    });

    it("should handle not", () => {
      const schema: SchemaObject = { not: { type: "string" } };
      expect(schemaToTs(schema)).toBe("Exclude<any, string>");
    });
  });

  describe("object type", () => {
    it("should handle object with properties", () => {
      const schema: SchemaObject = {
        type: "object",
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
      };
      const result = schemaToTs(schema);
      expect(result).toContain("name?: string");
      expect(result).toContain("age?: number");
    });

    it("should handle required properties", () => {
      const schema: SchemaObject = {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
        },
        required: ["id"],
      };
      const result = schemaToTs(schema);
      expect(result).toContain("id: number");
      expect(result).toContain("name?: string");
    });

    it("should handle optional properties", () => {
      const schema: SchemaObject = {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
        },
      };
      const result = schemaToTs(schema);
      expect(result).toContain("id?:");
      expect(result).toContain("name?:");
    });

    it("should handle additionalProperties as true", () => {
      const schema: SchemaObject = {
        type: "object",
        additionalProperties: true,
      };
      const result = schemaToTs(schema);
      expect(result).toContain("Record<string, any>");
    });

    it("should handle additionalProperties as schema", () => {
      const schema: SchemaObject = {
        type: "object",
        additionalProperties: { type: "string" },
      };
      const result = schemaToTs(schema);
      expect(result).toContain("Record<string, string>");
    });

    it("should handle non-standard property names", () => {
      const schema: SchemaObject = {
        type: "object",
        properties: {
          "my-property": { type: "string" },
          "123start": { type: "number" },
        },
      };
      const result = schemaToTs(schema);
      expect(result).toContain('"my-property"');
      expect(result).toContain('"123start"');
    });

    it("should handle nested object properties", () => {
      const schema: SchemaObject = {
        type: "object",
        properties: {
          user: {
            type: "object",
            properties: {
              name: { type: "string" },
            },
          },
        },
      };
      const result = schemaToTs(schema);
      expect(result).toContain("user?:");
    });
  });

  describe("array type", () => {
    it("should handle simple array", () => {
      const schema: SchemaObject = {
        type: "array",
        items: { type: "string" },
      };
      expect(schemaToTs(schema)).toBe("string[]");
    });

    it("should handle tuple with prefixItems", () => {
      const schema: SchemaObject = {
        prefixItems: [{ type: "string" }, { type: "number" }],
      };
      expect(schemaToTs(schema)).toBe("[string, number]");
    });

    it("should wrap complex item types in parentheses", () => {
      const schema: SchemaObject = {
        type: "array",
        items: {
          anyOf: [{ type: "string" }, { type: "number" }],
        },
      };
      const result = schemaToTs(schema);
      expect(result).toBe("((string | number))[]");
    });
  });

  describe("nullable handling", () => {
    it("should handle nullable string via type array", () => {
      const schema: SchemaObject = { type: ["string", "null"] };
      expect(schemaToTs(schema)).toBe("string | null");
    });

    it("should not handle nullable property separately", () => {
      const schema: SchemaObject = { type: "string", nullable: true };
      expect(schemaToTs(schema)).toBe("string");
    });
  });

  describe("format handling", () => {
    it("should preserve format but not change type", () => {
      const schema: SchemaObject = { type: "string", format: "email" };
      expect(schemaToTs(schema)).toBe("string");
    });
  });
});

describe("ts/shared - createSchemaToTs with custom typeConvert", () => {
  it("should use custom typeConvert for enum", () => {
    const customEnum = (schema: SchemaObject) => "CustomEnum";
    const schemaToTs = createSchemaToTs({ enum: customEnum });

    const schema: SchemaObject = { type: "string", enum: ["A", "B"] };
    expect(schemaToTs(schema)).toBe("CustomEnum");
  });

  it("should use custom typeConvert for properties", () => {
    const customProperties = (schema: SchemaObject) => "CustomObject";
    const schemaToTs = createSchemaToTs({ properties: customProperties });

    const schema: SchemaObject = {
      type: "object",
      properties: { name: { type: "string" } },
    };
    expect(schemaToTs(schema)).toBe("CustomObject");
  });
});
