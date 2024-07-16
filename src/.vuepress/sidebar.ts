import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "测试页面",
      icon: "book",
      prefix: "dada-page/",
      collapsible: true,
      children: "structure",
    },
    "intro",
  ],
});
