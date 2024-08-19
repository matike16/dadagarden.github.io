<template>
    <div class="little-talk">
        <div class="talk-card" v-for="(talk, index) in talkArr" :key="index">
            <div class="mask"></div> <!-- 遮罩层 -->
            <div class="time">
                {{ talk.time }}
            </div>
            <div class="content">
                {{ talk.content }}
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

const talkArr = JSON.parse(props.arr);
</script>

<style scoped lang="scss">
.little-talk {
    column-count: 2;
    column-gap: 20px;
}

.talk-card {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    break-inside: avoid;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    html[data-theme="light"] & {
        background: #f0f0f0;
    }

    html[data-theme="dark"] & {
        background: #333333;
    }
}

.time {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    color: var(--theme-color);
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 3;
}

.content {
    text-indent: 2em;
    padding-top: 30px;
    position: relative;
    z-index: 1;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.2);
    //使用高斯模糊背景内容
    backdrop-filter: saturate(180%) blur(30px);
    transition: all 0.3s ease-in-out;
    z-index: 2;
}

.talk-card:hover .mask {
    background: rgb(0, 0, 0, 0);
    backdrop-filter: saturate(90%) blur(0px);
}

.talk-card:hover .time {
    top: 10px;
    left: 20px;
    transform: none;
    margin-top: 0;
    text-align: left;
}

.talk-card:hover .content {
    padding-top: 30px;
}

@media (max-width: 1024px) {
    .little-talk {
        column-count: 1;
    }
}
</style>