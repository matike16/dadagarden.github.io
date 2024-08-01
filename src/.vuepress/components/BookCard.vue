<template>
  <div class="bookcard-container">
    <div v-for="(book, index) in bookArr" :key="index" class="bookcard">
      <div class="bookcard-image">
        <div class="tags">{{ book.tag }}</div>
        <img :src="book.img" :alt="book.title" />
      </div>
      <div class="bookcard-content">
        <a :href="book.url" target="_blank" class="bookcard-title">{{ book.title }}</a>
        <span class="author">—— {{ book.author }} 著</span>
        <div class="bookcard-desc">{{ book.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  arr: {
    type: String,
    default: '[]'
  }
});

const bookArr = JSON.parse(props.arr);
</script>

<style scoped lang="scss">
.bookcard-container {
  column-count: 3;
  column-gap: 20px;
}

.bookcard {
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid;
  border: 3px solid var(--theme-color);
  border-radius: 1rem;

  html[data-theme="light"] & {
    background: #f0f0f0;
  }

  html[data-theme="dark"] & {
    background: #333333;
  }
}

.bookcard-image {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 0.7rem 0.7rem 0 0;
  position: relative;
}

.tags {
  position: absolute;
  top: 15px;
  right: -45px;
  // 旋转45度
  transform: rotate(45deg);
  width: 150px;
  height: 30px;
  background-color: #fff;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 30px;
}

.bookcard-image:hover {
  transform: scale(1.05);
  border-radius: 0;

  html[data-theme="light"] & {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  html[data-theme="dark"] & {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
}

.bookcard-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bookcard-content {
  padding: 10px;
}

.bookcard-title {
  color: var(--theme-color);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none !important;
  transition: all 0.3s ease-in-out;
}

.bookcard-title:hover {
  color: #409EFF;
}

.author {
  font-size: 0.8rem;
  float: right;
}

.bookcard-desc {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666666;
  //首行空两字符
  text-indent: 2em;
}

@media (max-width: 1024px) {
  .bookcard-container {
    column-count: 2;
  }
}
</style>
