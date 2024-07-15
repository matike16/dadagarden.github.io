import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { blogPlugin } from "@vuepress/plugin-blog";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/DadaGarden/",

  lang: "zh-CN",
  title: "哒哒的花园",
  description: "哒哒的数字花园文档",

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

  // plugins : [
  //   blogPlugin({

  //   })
  // ]
});
