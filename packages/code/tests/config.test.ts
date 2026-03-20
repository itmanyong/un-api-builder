import { describe, it, expect } from "vitest";
import { DEFAULT_DOC_CONFIG } from "../src/core/config";

describe("core/config - DEFAULT_DOC_CONFIG", () => {
  it("should have all required properties", () => {
    expect(DEFAULT_DOC_CONFIG.cache).toBeDefined();
    expect(DEFAULT_DOC_CONFIG.dts).toBeDefined();
    expect(DEFAULT_DOC_CONFIG.requestor).toBeDefined();
    expect(DEFAULT_DOC_CONFIG.fileHeader).toBeDefined();
    expect(DEFAULT_DOC_CONFIG.fileFooter).toBeDefined();
  });

  it("should have correct cache config structure", () => {
    expect(DEFAULT_DOC_CONFIG.cache.enable).toBe(true);
    expect(DEFAULT_DOC_CONFIG.cache.path).toBeDefined();
    expect(typeof DEFAULT_DOC_CONFIG.cache.enable).toBe("boolean");
  });

  it("should have correct dts config structure", () => {
    expect(DEFAULT_DOC_CONFIG.dts.enable).toBe(true);
    expect(DEFAULT_DOC_CONFIG.dts.path).toBeDefined();
    expect(DEFAULT_DOC_CONFIG.dts.typeConvert).toEqual({});
  });

  it("should have default content type settings", () => {
    expect(DEFAULT_DOC_CONFIG.apiResponseCode).toBe(200);
    expect(DEFAULT_DOC_CONFIG.apiRequestType).toBe("*/*");
    expect(DEFAULT_DOC_CONFIG.apiResponseType).toBe("*/*");
    expect(DEFAULT_DOC_CONFIG.enableMultiContentType).toBe(false);
  });
});
