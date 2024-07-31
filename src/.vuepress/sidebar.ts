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
      link: "/project/",
      icon: "feather",
    },
    {
      text: "知识快学",
      prefix: "quick-learn/",
      collapsible: true,
      icon: "book-open-reader",
      children: "structure",
    },
    {
      text: "技术",
      prefix: "technology/",
      icon: "wand-magic-sparkles",
      collapsible: true,
      children: "structure",
    },
    // {
    //   text: "后端",
    //   icon: "laptop-code",
    //   prefix: "backend-dev/",
    //   collapsible: true,
    //   children: "structure",
    // },
    // {
    //   text: "前端",
    //   icon: "file-code",
    //   prefix: "frontend-dev/",
    //   collapsible: true,
    //   children: "structure",
    // },
    {
      text: "哒哒",
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
        {
          text: "一言摘录",
          icon: "heart",
          link: "一言.md",
        },
      ]
    }
  ],
  "/technology/backend-dev/": [
    {
      text: "后端",
      icon: "laptop-code",
      collapsible: true,
      children: "structure",
    }
  ],
  "/technology/frontend-dev/": [
    {
      text: "前端",
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
  "/quick-learn/": [
    {
      text: "知识快学",
      icon: "book-open-reader",
      collapsible: true,
      children: "structure",
    }
  ]
});
