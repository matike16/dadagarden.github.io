import { defineAsyncComponent } from "vue";
import { defineClientConfig } from "vuepress/client";
// 网站运行时间
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// 透明导航栏
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
// 雪花效果
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
// 为项目主页的特性添加闪光效果
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
// 使侧边栏位于左侧
import "vuepress-theme-hope/presets/left-blog-info.scss";
// 圆形博主头像
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
// 图标跳动效果
import "vuepress-theme-hope/presets/bounce-icon.scss";
// 隐藏导航栏和侧边栏的图标
// import "vuepress-theme-hope/presets/hide-navbar-icon.scss";
// import "vuepress-theme-hope/presets/hide-sidebar-icon.scss";

// 将所有hr替换为驾驶车
// import "vuepress-theme-hope/presets/hr-driving-car.scss";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import HeatmapLayout from './layouts/HeatmapLayout/index.vue'

const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
// const ComponentChange = defineAsyncComponent(() => import('./components/ComponentChange.vue'));
const TimesComponent = defineAsyncComponent(() => import('./components/TimesComponent.vue'));
// const BilibiliHot = defineAsyncComponent(() => import('./components/BilibiliHot.vue'));
const SlideDownComponent = defineAsyncComponent(() => import('./components/SlideDownComponent.vue'));

export default defineClientConfig({
  layouts: {
    HeatmapLayout,
  },
  enhance: ({ app, router, siteData}) => {
    app.use(ElementPlus);
  },
  setup() {
    setupRunningTimeFooter(
      new Date("2024-07-16"),
      {
        "/": "本站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    // 透明导航栏
    // setupTransparentNavbar({ type: "homepage" });
    // 雪花效果
    // setupSnowFall();
  },
  rootComponents: [
    BlogBg,
    // ComponentChange,
    TimesComponent,
    // BilibiliHot,
    SlideDownComponent,
  ]
});