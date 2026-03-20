import { defineConfig } from "tsdown";
export default defineConfig({
  exports: {
    devExports: false,
  },
  entry: {
    index: "src/index.ts",
    browser: "src/browser/index.ts",
  },
  target: "es2020",
  format: ["esm"],
  dts: {
    tsgo: true,
  },
  sourcemap: true,
  clean: true,
  minify: false,
  alias: {
    "@": "src",
  },
  deps: {
    skipNodeModulesBundle: true,
  },
});
