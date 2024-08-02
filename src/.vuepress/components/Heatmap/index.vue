<template>
  <div class="heatmap">
    <div
      class="heatmap-item"
      v-for="item in heatmaps"
      :key="`${item.year}-${item.month}`"
    >
      <div class="heatmap-inner">
        <div
          :class="`bg-primary-${getCountColor(item.counts)}`"
          data-balloon-pos="up"
          :aria-label="
            item.counts
              ? `${item.year}-${item.month}&#xa;Post: ${item.counts}`
              : `${item.year}-${item.month}`
          "
          @click="handleClick(item)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useArticles } from '@theme-hope/modules/blog/composables/index'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash-es'

interface IHeatmap {
  year: number
  month: number
  counts: number
}

const router = useRouter()
const articles = useArticles()
const postList = cloneDeep(articles.value)
  .items.sort((a, b) => a.info.d! - b.info.d!)
  .map((item) => item.info)

const heatmaps = computed(() => {
  const minYear = new Date(postList[0].d!).getFullYear()
  const maxYear = new Date(postList[postList.length - 1].d!).getFullYear()
  const counts: IHeatmap[] = []
  for (let year = minYear; year <= maxYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const count = postList.filter((item) => {
        const date = new Date(item.d!)
        return date.getFullYear() === year && date.getMonth() === month - 1
      }).length
      counts.push({ year, month, counts: count })
    }
  }
  return counts
})

function getCountColor(counts: number) {
  if (counts) {
    if (counts > 10) counts = 10
    return counts
  }
  return 0
}

function handleClick(item: IHeatmap) {
  if (!item.counts) return
  router.push({
    path: '/heatmap/',
    query: {
      date: `${item.year}/${item.month}`
    }
  })
}
</script>


<style lang="scss" scoped>
.heatmap {
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .heatmap-item {
    width: 8.333333%;
    position: relative;

    &::after {
      content: '';
      display: block;
      padding-top: 100%;
    }

    .heatmap-inner {
      border-radius: 2px;
      position: absolute;
      top: 2px;
      right: 2px;
      bottom: 2px;
      left: 2px;
      border: 1px solid var(--theme-color);
      transition: all var(--color-transition);

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .bg-primary-1 {
    background-color: var(--theme-color);
    opacity: 0.1;
    transition: all var(--color-transition);
  }

  .bg-primary-2 {
    background-color: var(--theme-color);
    opacity: 0.2;
    transition: all var(--color-transition);
  }

  .bg-primary-3 {
    background-color: var(--theme-color);
    opacity: 0.3;
    transition: all var(--color-transition);
  }

  .bg-primary-4 {
    background-color: var(--theme-color);
    opacity: 0.4;
    transition: all var(--color-transition);
  }

  .bg-primary-5 {
    background-color: var(--theme-color);
    opacity: 0.5;
    transition: all var(--color-transition);
  }

  .bg-primary-6 {
    background-color: var(--theme-color);
    opacity: 0.6;
    transition: all var(--color-transition);
  }

  .bg-primary-7 {
    background-color: var(--theme-color);
    opacity: 0.7;
    transition: all var(--color-transition);
  }

  .bg-primary-8 {
    background-color: var(--theme-color);
    opacity: 0.8;
    transition: all var(--color-transition);
  }

  .bg-primary-9 {
    background-color: var(--theme-color);
    opacity: 0.9;
    transition: all var(--color-transition);
  }

  .bg-primary-10 {
    background-color: var(--theme-color);
    opacity: 1;
    transition: all var(--color-transition);
  }

  .bg-primary-1:hover,
  .bg-primary-2:hover,
  .bg-primary-3:hover,
  .bg-primary-4:hover,
  .bg-primary-5:hover,
  .bg-primary-6:hover,
  .bg-primary-7:hover,
  .bg-primary-8:hover,
  .bg-primary-9:hover,
  .bg-primary-10:hover {
    opacity: 1;
  }
}
</style>
