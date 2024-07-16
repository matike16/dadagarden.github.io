import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/matike16.github.io/",

  lang: "zh-CN",
  title: "哒哒的花园",
  description: "哒哒的数字花园文档",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/matike16.github.io/favicon.ico",
      },
    ],
  ],

  port: 80,
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
