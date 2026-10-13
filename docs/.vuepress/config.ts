import { createRequire } from "node:module";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const require = createRequire(import.meta.url);
const mermaidComponentPath = require.resolve(
  "@vuepress/plugin-markdown-chart/client/components/Mermaid.js",
);

export default defineUserConfig({
  // Leon TIP 200261013 根据项目名来设置 base 路径，如果部署在nginx就不需要这个路径，直接去掉
  base : "/JSLearn-web/" ,
  dest: "./dist",

  title: "LeonLearn JS",
  description:
    "LeonLearn 是一份面向后端开发/后端面试的学习与复习指南，覆盖 前端、JS、TS、Vue React等系统设计等核心知识。",
  lang: "zh-CN",

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Leon" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计 - 异步加载避免阻塞渲染
    [
      "script",
      { defer: true },
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
          hm.async = true;
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
  ],

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@vuepress/plugin-markdown-chart/client/components/Mermaid.js":
            mermaidComponentPath,
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ["if-function"],
          },
        },
      },
    },
  }),

  theme,

  pagePatterns: [
    "**/*.md",
    "!**/*.snippet.md",
    "!**/TODO.md",
    "!.vuepress",
    "!node_modules",
  ],

  shouldPrefetch: false,
  shouldPreload: false,
});
