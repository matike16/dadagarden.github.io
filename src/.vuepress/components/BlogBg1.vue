<template>
    <ClientOnly>
        <div class="vp-blog-mask"></div>
    </ClientOnly>
</template>

<script setup>
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.waves.min.js'
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

let vantaEffect = null

const createVantaBackground = () => {
    const blogPageWrapper = document.querySelector('.vp-blog-mask')
    if (blogPageWrapper && !blogPageWrapper.classList.contains('vanta-initialized')) {
        blogPageWrapper.classList.add('vanta-initialized')

        vantaEffect = NET({
            el: blogPageWrapper,
            THREE: THREE,
            color: 0x005aff, // 可调整的波浪颜色
            shininess: 50.0, // 亮度
            waveHeight: 20.0, // 波浪高度
            waveSpeed: 1.0, // 波浪速度
            zoom: 1.0 // 缩放
        })
    }
}

const removeVantaBackground = () => {
    if (vantaEffect) {
        vantaEffect.destroy()
        vantaEffect = null
        const blogPageWrapper = document.querySelector('.vp-blog-mask')
        if (blogPageWrapper) {
            blogPageWrapper.classList.remove('vanta-initialized')
        }
    }
}

onMounted(() => {
    nextTick(() => {
        createVantaBackground()
    })
})

onBeforeUnmount(() => {
    removeVantaBackground()
})
</script>

<style scoped>
.vp-blog-mask.vanta-initialized {
    position: relative;
    z-index: -1;
    height: 100vh; /* 确保元素有足够的高度来显示波浪效果 */
}
</style>
