import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "测试目录",
      icon: "book",
      prefix: "dada-blog/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "后端",
      icon: "laptop-code",
      prefix: "backend-dev/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "前端",
      icon: "file-code",
      prefix: "frontend-dev/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "关于",
      icon: "circle-info",
      collapsible: true,
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
  ],
});
