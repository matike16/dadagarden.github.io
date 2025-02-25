import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "导航",
    link: "/quick-nav/",
    icon: "link",
  },
  {
    text: "项目",
    link: "/project/",
    icon: "feather",
  },
  {
    text: "技术",
    prefix: "/technology/",
    icon: "wand-magic-sparkles",
    children: [
      {
        text: "后端",
        icon: "laptop-code",
        link: "backend-dev/",
      },
      {
        text: "前端",
        icon: "file-code",
        link: "frontend-dev/",
      },
      {
        text: "算法",
        icon: "code",
        link: "algorithm/",
      },
      {
        text: "DEMO",
        icon: "palette",
        link: "demo/",
      }
    ]
  },
  // {
  //   text: "后端",
  //   prefix: "/backend-dev/",
  //   icon: "laptop-code",
  //   children: [
  //     {
  //       text: "基础技术",
  //       icon: "code",
  //       link: "基础技术/",
  //     },
  //     {
  //       text: "后端框架",
  //       icon: "folder-open",
  //       link: "后端框架/",
  //     }
  //   ]
  // },
  // {
  //   text: "前端",
  //   prefix: "/frontend-dev/",
  //   icon: "file-code",
  //   children: [
  //     {
  //       text: "基础技术",
  //       icon: "code",
  //       link: "基础技术/",
  //     },
  //     {
  //       text: "前端框架",
  //       icon: "folder-open",
  //       link: "前端框架/",
  //     }
  //   ]
  // },
  {
    text: "哒哒",
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
      },
      {
        text: "一言摘录",
        icon: "heart",
        link: "一言.md",
      },
      {
        text: "我的书籍",
        icon: "book-bookmark",
        link: "我的书籍.md",
      },
      {
        text: "思碎集",
        icon: "star",
        link: "thinking/",
      },
    ]
  },
]);
