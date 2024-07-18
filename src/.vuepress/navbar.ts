import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "后端",
    prefix: "/backend-dev/",
    icon: "laptop-code",
    children: [
      {
        text: "后端框架",
        link: "后端框架/",
      }
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
  },
]);
