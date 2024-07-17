import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "后端",
    prefix: "/backend-dev/",
    icon: "laptop-code",
    children: [
      {
        text: "基础技术",
        link: "基础技术/",
      },
      {
        text: "后端框架",
        link: "后端框架/",
      },
      {
        text: "数据库",
        link: "数据库/",
      },
      {
        text: "后端架构",
        link: "后端架构/",
      },
      {
        text: "后端面试题",
        link: "后端面经/",
      }
    ]
  },
  {
    text: "前端",
    prefix: "/frontend-dev/",
    icon: "file-code",
    children: [
      {
        text: "基础技术",
        link: "基础技术/",
      },
      {
        text: "前端框架",
        link: "前端框架/",
      },
    ]
  },
  {
    text: "关于",
    icon: "circle-info",
    children: [
      {
        text: "关于我",
        icon: "user",
        link: "intro.md",
      },
      {
        text: "关于博客",
        icon: "blog",
        link: "introblog.md",
      }
    ]
  }
]);
