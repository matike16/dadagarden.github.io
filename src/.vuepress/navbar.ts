import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "关于博客",
    link: "/dada-blog/",
    icon: "laptop-code",
    activeMatch: "/dada-blog/",
    children: [
      {
        text: "测试",
        link: "/dada-blog/测试.md",
        activeMatch: "/dada-blog/",
        icon: "vial",
      },
    ],
  },
  {
    text: "后端",
    link: "/backend-dev/",
    icon: "server",
    children: [
      {
        text: "基础技术",
        link: "/backend-dev/基础技术.md",
        activeMatch: "/backend-dev/",
        icon: "laptop-code",
      },
      {
        text: "后端框架",
        link: "/backend-dev/后端框架.md",
        activeMatch: "/backend-dev/",
        icon: "laptop-code",
      },
      {
        text: "数据库",
        link: "/backend-dev/数据库.md",
        activeMatch: "/backend-dev/",
        icon: "laptop-code"
      },
      {
        text: "后端架构",
        link: "/backend-dev/后端架构.md",
        activeMatch: "/backend-dev/",
        icon: "laptop-code"
      },
      {
        text: "后端面试题",
        link: "/backend-dev/后端面试题.md",
        activeMatch: "/backend-dev/",
        icon: "laptop-code"
      }
    ]
  }
]);
