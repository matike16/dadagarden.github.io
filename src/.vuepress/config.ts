import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
const base = (process.env.BASE_URL || "/") as "/" | `/${string}/`;
const InfoPanel = path.resolve(__dirname, './components/InfoPanel/index.vue');

// 动态设置 favicon 的路径
const faviconPath = `${base}favicon.ico`;

export default defineUserConfig({
  base,
  dest: "src/.vuepress/dist",

  lang: "zh-CN",
  title: "哒哒的花园",
  description: "哒哒的数字花园文档",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: faviconPath,
      },
    ],
    [
      "script",
      {
        src: "/JS/click.js",
      },
    ],
    [
      "script",
      {
        src: "/JS/Baidutongji.js",
      },
    ],
  ],
  
  port: 80,
  theme,
  plugins: [
    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
      components: {
        BlogClock: path.resolve(__dirname, "./components/BlogClock/index.vue"),
        Heatmap: path.resolve(__dirname, "./components/Heatmap/index.vue"),
      }
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
    '@theme-hope/modules/blog/components/InfoPanel': InfoPanel,
  },
});
