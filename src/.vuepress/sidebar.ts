import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "导航",
      icon: "link",
      link: "quick-nav/README.md",
    },
    {
      text: "项目",
      link: "/navigation/",
      icon: "feather",
    },
    {
      text: "后端",
      icon: "laptop-code",
      prefix: "backend-dev/",
      collapsible: true,
      children: "structure",
    },
    // {
    //   text: "前端",
    //   icon: "file-code",
    //   prefix: "frontend-dev/",
    //   collapsible: true,
    //   children: "structure",
    // },
    {
      text: "关于",
      icon: "circle-info",
      prefix: "about/",
      collapsible: true,
      children: [
        {
          text: "关于我",
          icon: "user",
          link: "intro.md",
        },
        {
          text: "博客搭建",
          icon: "blog",
          prefix: "blog-building/",
          collapsible: true,
          children: "structure",
        },
      ]
    }
  ],
  "/backend-dev/后端框架/": [
    {
      text: "后端框架",
      icon: "file-code",
      collapsible: true,
      children: "structure",
    }
  ],
  "/about/blog-building/": [
    {
      text: "博客搭建",
      icon: "blog",
      collapsible: true,
      children: "structure",
    }
  ],
});