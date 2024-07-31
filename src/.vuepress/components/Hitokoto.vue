<!-- .vuepress/components/Hitokoto.vue -->
<template>
    <div class="hitokoto">
        <div class="text">[ {{ text }} ]</div>
        <div class="author">— {{ author }} —</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: String,
    author: String
});
</script>

<style scoped lang="scss">
.hitokoto {
    font-size: 1.2rem;
    color: #555;
    /* background: #000; */
    border-radius: 0.5rem;
    border: 3px solid var(--theme-color);
    margin: 2rem;
    padding: 0.5rem;

    html[data-theme="dark"] & {
        color: #a5a4a4;
    }
}

.text {
    font-weight: bold;
    text-align: center;
}

.author {
    font-style: italic;
    text-align: center;
}
</style>