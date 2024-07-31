<template>
  <div class="bookcard-container">
    <div v-for="(book, index) in bookArr" :key="index" class="bookcard">
      <div class="bookcard-image">
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
  column-gap: 15px;
}

.bookcard {
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid;
  border: 3px solid rgba(0, 0, 0, 0.2);

  html[data-theme="light"] & {
    border: 3px solid rgba(0, 0, 0, 0.2);
  }

  html[data-theme="dark"] & {
    border: 3px solid rgba(255, 255, 255, 0.2);
  }
}

.bookcard-image {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.bookcard-image:hover {
  transform: scale(1.05);

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
}

@media (max-width: 1024px) {
  .bookcard-container {
    column-count: 2;
  }
}
</style>
