<template>
  <aside class="vp-blog-info-wrapper">
    <div class="vp-blogger-info-inner">
      <BloggerInfo />
    </div>

    <div class="vp-blogger-info">
      <Heatmap />
    </div>

    <div class="vp-blogger-info blog-clock-box">
      <BlogClock />
    </div>

    <InfoList />
  </aside>
</template>

<script setup lang="ts">
import BloggerInfo from 'vuepress-theme-hope/modules/blog/components/BloggerInfo'
import InfoList from 'vuepress-theme-hope/modules/blog/components/InfoList'
import 'vuepress-theme-hope/modules/blog/styles/info-panel.scss'
</script>

<style lang="scss" scoped>
.blog-clock-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vp-blogger-info-inner {
  position: relative;
}
</style>
