import { describe, it, expect, beforeEach } from "vitest";
import {
  CONTENT_TYPE_MAP,
  resolveParameter,
  getApiParamList,
  getApiBodyJson,
  getApiResponseJson,
  generateApiConfig,
  flattenApiMap,
} from "../src/core/api/shared";
import type {
  ApiDocConfig,
  ApiParamsCtx,
  OpenAPIObject,
  ParameterObject,
} from "../src/types";

describe("api/shared - CONTENT_TYPE_MAP", () => {
  it("should have correct mappings", () => {
    expect(CONTENT_TYPE_MAP["text/html"]).toBe("html");
    expect(CONTENT_TYPE_MAP["text/plain"]).toBe("text");
    expect(CONTENT_TYPE_MAP["multipart/form-data"]).toBe("form");
    expect(CONTENT_TYPE_MAP["application/json"]).toBe("json");
    expect(CONTENT_TYPE_MAP["application/x-www-form-urlencoded"]).toBe("url");
    expect(CONTENT_TYPE_MAP["application/octet-stream"]).toBe("stream");
  });
});

describe("api/shared - resolveParameter", () => {
  it("should return null for undefined param", () => {
    expect(resolveParameter(undefined)).toBeNull();
  });

  it("should return null for null param", () => {
    expect(resolveParameter(null as any)).toBeNull();
  });

  it("should resolve simple parameter", () => {
    const param: ParameterObject = {
      name: "id",
      in: "path",
      required: true,
      schema: { type: "number" },
    };
    const result = resolveParameter(param);
    expect(result.name).toBe("id");
  });

  it("should resolve $ref parameter", () => {
    const apiDoc: OpenAPIObject = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
      components: {
        parameters: {
          UserId: {
            name: "userId",
            in: "path",
            required: true,
            schema: { type: "number" },
          },
        },
      },
    };

    const param = { $ref: "#/components/parameters/UserId" };
    const result = resolveParameter(param, apiDoc) as ParameterObject;
    expect(result.name).toBe("userId");
  });

  it("should resolve nested $ref", () => {
    const apiDoc: OpenAPIObject = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
      components: {
        parameters: {
          UserId: {
            name: "userId",
            in: "path",
            required: true,
            schema: { $ref: "#/components/schemas/IdSchema" },
          },
        },
        schemas: {
          IdSchema: {
            type: "object",
            properties: { value: { type: "number" } },
          },
        },
      },
    };

    const param = { $ref: "#/components/parameters/UserId" };
    const result = resolveParameter(param, apiDoc);
    expect(result).toBeDefined();
  });
});

describe("api/shared - getApiParamList", () => {
  let apiDoc: OpenAPIObject;
  let apiConfig: ApiParamsCtx;

  beforeEach(() => {
    apiDoc = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
      components: {
        parameters: {
          QueryPage: {
            name: "page",
            in: "query",
            schema: { type: "number" },
          },
          PathId: {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "number" },
          },
        },
      },
    };

    apiConfig = {
      path: "/users/{id}",
      method: "get",
      operation: {
        parameters: [
          { name: "page", in: "query", schema: { type: "number" } },
          { name: "id", in: "path", required: true, schema: { type: "number" } },
        ],
      },
    } as ApiParamsCtx;
  });

  it("should get query parameters", () => {
    const result = getApiParamList("query", apiConfig, apiDoc);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("page");
  });

  it("should get path parameters", () => {
    const result = getApiParamList("path", apiConfig, apiDoc);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("id");
  });

  it("should return empty array for non-existent parameters", () => {
    const result = getApiParamList("header", apiConfig, apiDoc);
    expect(result).toHaveLength(0);
  });

  it("should handle $ref parameters", () => {
    apiConfig.operation.parameters = [
      { $ref: "#/components/parameters/QueryPage" },
    ];
    const result = getApiParamList("query", apiConfig, apiDoc);
    expect(result).toHaveLength(1);
  });
});

describe("api/shared - getApiBodyJson", () => {
  let apiDoc: OpenAPIObject;
  let apiConfig: ApiParamsCtx;

  beforeEach(() => {
    apiDoc = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
    };

    apiConfig = {
      path: "/users",
      method: "post",
      operation: {
        requestBody: {
          content: {
            "application/json": {
              schema: { type: "object" },
            },
          },
        },
      },
    } as ApiParamsCtx;
  });

  it("should get body for application/json content type", () => {
    const result = getApiBodyJson("application/json", apiConfig, apiDoc);
    expect(result).toBeDefined();
    expect(result?.type).toBe("object");
  });

  it("should return null when no request body", () => {
    apiConfig.operation.requestBody = undefined;
    const result = getApiBodyJson("application/json", apiConfig, apiDoc);
    expect(result).toBeNull();
  });

  it("should return null for unsupported content type", () => {
    const result = getApiBodyJson("text/plain", apiConfig, apiDoc);
    expect(result).toBeNull();
  });
});

describe("api/shared - getApiResponseJson", () => {
  let apiDoc: OpenAPIObject;
  let apiConfig: ApiParamsCtx;

  beforeEach(() => {
    apiDoc = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {},
    };

    apiConfig = {
      path: "/users",
      method: "get",
      operation: {
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: { type: "array", items: { type: "object" } },
              },
            },
          },
        },
      },
    } as ApiParamsCtx;
  });

  it("should get response schema for 200", () => {
    const result = getApiResponseJson(200, "application/json", apiConfig, apiDoc);
    expect(result).toBeDefined();
    expect(result?.type).toBe("array");
  });

  it("should return null for non-existent response code", () => {
    const result = getApiResponseJson(404, "application/json", apiConfig, apiDoc);
    expect(result).toBeNull();
  });

  it("should return null for non-existent content type", () => {
    const result = getApiResponseJson(200, "text/plain", apiConfig, apiDoc);
    expect(result).toBeNull();
  });
});

describe("api/shared - generateApiConfig", () => {
  it("should generate API config with url, method, name, module", () => {
    const ctx: ApiParamsCtx = {
      path: "/api/v1/users",
      method: "get",
      operation: {
        summary: "Get users",
        description: "Get all users",
      },
    };

    const result = generateApiConfig(ctx);

    expect(result.url).toBeDefined();
    expect(result.method).toBe("GET");
    expect(result.name).toBeDefined();
    expect(result.module).toBeDefined();
    expect(result.summary).toBe("Get users");
    expect(result.description).toBe("Get all users");
  });

  it("should handle content type with headers", () => {
    const ctx: ApiParamsCtx = {
      path: "/api/users",
      method: "post",
      contentType: "multipart/form-data",
      operation: {},
    };

    const result = generateApiConfig(ctx);

    expect(result.options.headers).toEqual({ "Content-Type": "multipart/form-data" });
  });

  it("should generate API name for path with params", () => {
    const ctx: ApiParamsCtx = {
      path: "/api/users/{id}",
      method: "get",
      operation: {},
    };

    const result = generateApiConfig(ctx);

    expect(result.name).toBeDefined();
    expect(typeof result.name).toBe("string");
  });

  it("should handle nested path", () => {
    const ctx: ApiParamsCtx = {
      path: "/api/users/{userId}/posts/{postId}",
      method: "delete",
      operation: {},
    };

    const result = generateApiConfig(ctx);

    expect(result.url).toBe("/users/{userId}/posts/{postId}");
    expect(result.name).toBeDefined();
  });
});

describe("api/shared - flattenApiMap", () => {
  let apiDoc: OpenAPIObject;
  let docConfig: ApiDocConfig;

  beforeEach(() => {
    apiDoc = {
      openapi: "3.0.1",
      info: { title: "Test", version: "1.0.0" },
      paths: {
        "/api/users": {
          get: {
            summary: "Get users",
            parameters: [{ name: "page", in: "query", schema: { type: "number" } }],
          },
          post: {
            summary: "Create user",
            requestBody: {
              content: {
                "application/json": {
                  schema: { type: "object", properties: { name: { type: "string" } } },
                },
              },
            },
          },
        },
        "/api/users/{id}": {
          get: {
            summary: "Get user by id",
            parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
          },
          put: {
            summary: "Update user",
            parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
            requestBody: {
              content: {
                "application/json": {
                  schema: { type: "object", properties: { name: { type: "string" } } },
                },
              },
            },
          },
          delete: {
            summary: "Delete user",
            parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
          },
        },
      },
    };

    docConfig = {
      name: "test",
      url: "http://localhost:3000/api.json",
      output: ".",
      cache: { enable: true, path: ".cache", expireTime: 3600000 },
      dts: { enable: true, path: "types", apiOptions: "RequestInit", apiResult: "Response", fileHeader: [], fileFooter: [], typeConvert: {} },
      requestor: "",
      fileHeader: [],
      fileFooter: [],
      docParser: null,
      apiParser: null,
      apiResponseCode: 200,
      apiResponseType: "*/*",
      apiRequestType: "*/*",
      enableMultiContentType: false,
    } as ApiDocConfig;
  });

  it("should flatten API map by module", () => {
    const result = flattenApiMap(apiDoc, docConfig);

    expect(result.size).toBeGreaterThan(0);
  });

  it("should create correct module structure", () => {
    const result = flattenApiMap(apiDoc, docConfig);

    for (const [module, apis] of result) {
      expect(module).toBeDefined();
      expect(Array.isArray(apis)).toBe(true);
      for (const api of apis) {
        expect(api.config).toBeDefined();
        expect(api.config.name).toBeDefined();
        expect(api.config.method).toBeDefined();
      }
    }
  });
});
