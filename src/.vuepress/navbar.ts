import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "导航",
    link: "/quick-nav/",
    icon: "link",
  },
  {
    text: "后端",
    prefix: "/backend-dev/",
    icon: "laptop-code",
    children: [
      {
        text: "后端框架",
        icon: "file-code",
        link: "后端框架/",
      }
    ]
  },
  {
    text: "关于",
    icon: "circle-info",
    prefix: "about/",
    children: [
      {
        text: "关于我",
        icon: "user",
        link: "intro.md",
      },
      {
        text: "博客搭建",
        icon: "blog",
        link: "blog-building/",
      }
    ]
  },
]);
