import { defineConfig } from "un-api-builder";
// import { defineConfig } from "../../packages/code/dist";

export default defineConfig({
  docs: [
    {
      enable: true,
      url: "./api-docs/qingniao-openapi.json",
      name: "qianniao",
      apiRequestType: "application/json",
      exportMode: "default",
      codeMode: "memory",
      cache: {
        enable: false,
      }
    },
    {
      enable: true,
      url: "./api-docs/xinli-openapi.json",
      name: "xinli",
      apiRequestType: "application/json",
      exportMode: "module",
    },
    {
      enable: true,
      url: "./api-docs/yusuan-openapi.json",
      name: "yusuan",
      apiRequestType: "application/json",
      exportMode: "doc",
      codeMode: "memory",
    },
  ],
});
