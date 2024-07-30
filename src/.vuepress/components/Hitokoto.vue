<!-- .vuepress/components/Hitokoto.vue -->
<template>
    <div class="hitokoto">
        <span class="text">[ {{ text }} ]</span>
        <span class="author">—— {{ author }} —</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: String,
    author: String
});
</script>

<style scoped>
.hitokoto {
    font-size: 1.2rem;
    color: #555;
}

.text {
    font-weight: bold;
}

.author {
    font-style: italic;
}
</style>