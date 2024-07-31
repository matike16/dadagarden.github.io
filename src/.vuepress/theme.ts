import { hopeTheme } from "vuepress-theme-hope";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://matike16.github.io/dadagarden.github.io/",
    docsRepo: "https://github.com/matike16/dadagarden.github.io",
    docsBranch: "master",

    author: {
      name: "哒哒溜",
      url: "https://github.com/matike16",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo1.png",

    // 仓库
    repo: "https://github.com/matike16/dadagarden.github.io",
    repoDisplay: true,

    docsDir: "src",

    // 导航栏
    navbar,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Repo", "Outlook", "Search"],
    },

    // 深色模式
    darkmode: "toggle",

    // 全屏模式
    fullscreen: true,

    // RLT布局：左右翻转网页元素
    // rtl: true,

    // 纯净模式: 用于取消动画效果，仅提供功能
    // pure: true,

    // 侧边栏
    sidebar,
    // 页脚
    footer: "这是我的一场文字旅行",
    displayFooter: true,

    // 博客相关
    blog: {
      description: "这是我的一场文字旅行",
      intro: "about/intro.html",
      medias: {
        BiliBili: "https://space.bilibili.com/20667502?spm_id_from=333.1007.0.0",
        Email: "https://mail.qq.com/cgi-bin/frame_html?sid=Mds1CNCkf4ocwVcx&r=f066bcca50ce63aca0d22965eb3f53d4&lang=zh",
        Gitee: "https://gitee.com/matike",
        GitHub: "https://github.com/matike16",
        // VuePressThemeHope: {
        //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        //   link: "https://theme-hope.vuejs.press",
        // },
      },
    },

    // 加密配置
    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
      blog: {
        type: [
          // getSlides({
          //   locales: {
          //     "/":"幻灯片",
          //   },
          // }),
          getRecentUpdatedArticles({
            locales:{
              "/":"最近更新",
            },
          }),
        ]
      },

      notice: [
        {
          path: "/",
          title: "最近更新",
          content: "新增“我的书籍”和“一言摘录”页面，“一言摘录”可同步首页组件。",
          // showOnce: false,
          // fullscreen: true,
          // confirm: false,
          // actions: [
          //   {
          //     text: "Primary Action",
          //     link: "https://theme-hope.vuejs.press/",
          //     type: "primary",
          //   },
          //   { text: "Default Action" },
          // ],
        },
      ],

      // 启用之前需安装 @waline/client
      // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
      comment: {
        provider: "Waline",
        serverURL: "https://comments.dadagarden.fun",
        reaction: [
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_unavailble_doge.png',
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_give_love.png',
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_hmm.png',
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_wail.png',
        ],
        emoji: [
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
        ]
      },

      // 搜索插件
      search: true,

      components: {
        components: ["Badge", "VPCard", "BiliBili", "PDF"],
      },

      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      mdEnhance: {
        hint: true,
        alert: true,
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 katex
        // katex: true,

        // 在启用之前安装 mathjax-full
        // mathjax: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 reveal.js
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },

      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  {custom: true}
);
