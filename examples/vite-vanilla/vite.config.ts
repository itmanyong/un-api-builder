import { defineConfig } from "vite";
import { vitePlugin as VitePluginUnApiBuilder } from "un-api-builder";
// import { vitePlugin as VitePluginUnApiBuilder } from "../../packages/code/dist";

export default defineConfig({
  plugins: [VitePluginUnApiBuilder()],
  resolve: {
    alias: {
      "@qianniao": "/src/apis/qianniao",
      "@xinli": "/src/apis/xinli",
      "@yusuan": "/src/apis/yusuan",
      "@": "/src",
    },
  },
  server: {
    port: 5173,
  },
});
