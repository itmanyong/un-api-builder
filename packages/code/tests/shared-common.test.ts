import { describe, it, expect } from "vitest";
import {
  toValue,
  capitalizeUpper,
  toVariableNameCamelCase,
} from "../src/shared/common";

describe("shared/common - toValue", () => {
  it("should return value directly if not a function", () => {
    expect(toValue("hello")).toBe("hello");
    expect(toValue(123)).toBe(123);
    expect(toValue({ a: 1 })).toEqual({ a: 1 });
  });

  it("should call function if source is a function", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    expect(toValue(fn, 1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  it("should pass multiple arguments to function", () => {
    const fn = vi.fn((...args: number[]) => args.reduce((a, b) => a + b, 0));
    expect(toValue(fn, 1, 2, 3, 4)).toBe(10);
  });

  it("should handle function returning undefined", () => {
    const fn = vi.fn(() => undefined);
    expect(toValue(fn)).toBe(undefined);
  });

  it("should handle function returning null", () => {
    const fn = vi.fn(() => null);
    expect(toValue(fn)).toBe(null);
  });

  it("should handle function returning object", () => {
    const fn = vi.fn(() => ({ name: "test" }));
    expect(toValue(fn)).toEqual({ name: "test" });
  });

  it("should handle function returning array", () => {
    const fn = vi.fn(() => [1, 2, 3]);
    expect(toValue(fn)).toEqual([1, 2, 3]);
  });
});

describe("shared/common - capitalizeUpper", () => {
  it("should capitalize first letter of lowercase string", () => {
    expect(capitalizeUpper("hello")).toBe("Hello");
  });

  it("should not modify already capitalized string", () => {
    expect(capitalizeUpper("Hello")).toBe("Hello");
  });

  it("should handle string starting with number", () => {
    expect(capitalizeUpper("123abc")).toBe("123abc");
  });

  it("should handle empty string", () => {
    expect(capitalizeUpper("")).toBe("");
  });

  it("should handle single character lowercase", () => {
    expect(capitalizeUpper("a")).toBe("A");
  });

  it("should handle single character uppercase", () => {
    expect(capitalizeUpper("A")).toBe("A");
  });

  it("should handle string with special characters", () => {
    expect(capitalizeUpper("hello_world")).toBe("Hello_world");
  });

  it("should handle camelCase string", () => {
    expect(capitalizeUpper("camelCase")).toBe("CamelCase");
  });

  it("should handle snake_case string", () => {
    expect(capitalizeUpper("snake_case")).toBe("Snake_case");
  });
});

describe("shared/common - toVariableNameCamelCase", () => {
  it("should convert single word to camelCase", () => {
    expect(toVariableNameCamelCase("hello")).toBe("hello");
  });

  it("should convert two words with second word capitalized", () => {
    expect(toVariableNameCamelCase("hello", "world")).toBe("helloWorld");
  });

  it("should convert multiple words", () => {
    expect(toVariableNameCamelCase("hello", "world", "foo")).toBe("helloWorldFoo");
  });

  it("should handle prefix arguments", () => {
    expect(toVariableNameCamelCase("api", "user", "get")).toBe("apiUserGet");
  });

  it("should handle single prefix argument", () => {
    expect(toVariableNameCamelCase("api")).toBe("api");
  });

  it("should handle numbers in string", () => {
    expect(toVariableNameCamelCase("user123")).toBe("user123");
  });

  it("should remove special characters", () => {
    expect(toVariableNameCamelCase("hello-world")).toBe("helloworld");
    expect(toVariableNameCamelCase("hello.world")).toBe("helloworld");
    expect(toVariableNameCamelCase("hello/world")).toBe("helloworld");
  });

  it("should handle string starting with number by prepending underscore", () => {
    expect(toVariableNameCamelCase("123abc")).toBe("_123abc");
  });

  it("should handle empty string", () => {
    expect(toVariableNameCamelCase("")).toBe("");
  });

  it("should combine multiple arguments correctly", () => {
    expect(toVariableNameCamelCase("api", "v2", "user")).toBe("apiV2User");
  });

  it("should lowercase first letter if it starts with uppercase", () => {
    expect(toVariableNameCamelCase("API", "USER", "GET")).toBe("aPIUSERGET");
  });

  it("should handle kebab-case input", () => {
    expect(toVariableNameCamelCase("get-user-by-id")).toBe("getuserbyid");
  });

  it("should lowercase first word but capitalize subsequent words", () => {
    expect(toVariableNameCamelCase("GetUserById")).toBe("getUserById");
  });
});
