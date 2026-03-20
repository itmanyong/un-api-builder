import type { PluginOptions } from "@/types/platform";
import type { Plugin } from "vite";
import { defineRun } from "@/core";
import { LIB_NAME } from "@/shared";

export const vitePlugin = (options?: PluginOptions): Plugin => {
  return {
    name: `vite-plugin-${LIB_NAME}`,
    enforce: "pre",
    async configResolved() {
      await defineRun(options);
    },
  };
};
