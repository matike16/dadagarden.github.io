<template>
    <ClientOnly>
        <div class="component-change"></div>
    </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVNode, render } from 'vue';
//导入事件总线
import emitter from '../utils/emitter';

// 将fas图标库添加到FontAwesome的库中
library.add(fas);

// 用于控制组件切换状态的引用
const isToggled = ref(false);

/**
 * 切换页面元素的显示状态
 * 该函数用于在博客页面和组件页面之间切换
 */
const toggleElements = () => {
    const heroImage = document.querySelector('.vp-blog-hero-image');
    const heroTitle = document.querySelector('.vp-blog-hero-title');
    const heroDescription = document.querySelector('.vp-blog-hero-description');
    const componentTimes = document.querySelector('.component-button1')
    const componentPage = document.querySelector('.component-page');

    if (isToggled.value) {
        if (heroImage) heroImage.style.display = '';
        if (heroTitle) heroTitle.style.display = '';
        if (heroDescription) heroDescription.style.display = '';
        if (componentTimes) componentTimes.style.display = '';
        if (componentPage) componentPage.remove();
    } else {
        if (heroImage) heroImage.style.display = 'none';
        if (heroTitle) heroTitle.style.display = 'none';
        if (heroDescription) heroDescription.style.display = 'none';
        if (componentTimes) componentTimes.style.display = 'none';
        if (!componentPage) {
            const newComponentPage = document.createElement('div');
            newComponentPage.className = 'component-page';
            newComponentPage.innerHTML = `
            <div class="component-panel" id="panel1"></div>
            <div class="component-panel" id="panel2">模块开发中...</div>
            <div class="component-panel" id="panel3">模块开发中...</div>
            <div class="component-panel" id="panel4">模块开发中...</div>
            `
            document.querySelector('.vp-blog-mask').appendChild(newComponentPage);
            emitter.emit('panel1-inserted'); // 触发组件插入事件
        }
    }

    isToggled.value = !isToggled.value;
};

/**
 * 在博客页面中插入组件切换按钮
 * 该函数负责动态插入组件切换按钮，并处理按钮的点击事件
 */
const insertComponentChange = () => {
    const tryInsertComponent = () => {
        const blogMask = document.querySelector('.vp-blog-mask');
        if (blogMask && !document.querySelector('.component-button')) {
            const button = document.createElement('div');
            button.className = 'component-button';

            // 创建 FontAwesomeIcon 组件的 VNode
            const iconVNode = createVNode(FontAwesomeIcon, { icon: ['fas', 'fa-layer-group'] });
            // 渲染组件到 button
            render(iconVNode, button);

            // 添加点击事件处理程序
            button.addEventListener('click', () => {
                toggleElements();
                const newIcon = isToggled.value ? ['fas', 'fa-xmark'] : ['fas', 'fa-layer-group'];
                const newIconVNode = createVNode(FontAwesomeIcon, { icon: newIcon });
                render(newIconVNode, button);
            });

            blogMask.appendChild(button);
        }
    };

    // 在页面初始化时尝试插入按钮
    tryInsertComponent();

    const router = useRouter();
    if (router && typeof router.beforeEach === 'function') {
        router.beforeEach(() => {
            setTimeout(() => {
                insertComponentChange();
            }, 50);
        });
    }
};

onMounted(insertComponentChange);
</script>

<style lang="scss">
.component-button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    position: absolute;
    top: 4.25rem;
    left: 0.75rem;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
}

.component-button:hover {
    background: rgba(0, 0, 0, 0.6);
}

.fa-layer-group,
.fa-xmark {
    font-size: 1rem;
    color: #AEB0A6;
}

.component-page {
    width: 80%;
    height: 80%;

    html[data-theme="light"] & {
        background: rgba(255, 255, 255, 0.2);
    }

    html[data-theme="dark"] & {
        background: rgba(1, 1, 1, 0.2);
    }

    backdrop-filter: saturate(180%) blur(10px);
    position: absolute;
    top: 10%;
    left: 10%;
    border-radius: 0.5rem;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    padding: 20px 30px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    box-sizing: border-box;
}

/* 中等屏幕设备 */
@media (min-width: 768px) and (max-width: 1199px) {
    .component-page {
        width: 80%;
        height: 80%;
    }
}

/* 小屏幕设备 */
@media (max-width: 767px) {
    .component-page {
        width: 80%;
        height: 75%;
        left: 10%;
        top: 15%;
    }
}

.component-panel {
    // width: calc(50% - 20px);
    // /* 计算等比例分布，并预留margin */
    // height: calc(50% - 20px);
    // margin: 10px;
    background: rgba(255, 255, 255, 0.2);
    // display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
}

#panel1 {
    float: left;
    background: none;
    width: 48%;
    height: 48%;
    margin-bottom: 1%;
    overflow: auto;
    scrollbar-width: none;
}

#panel2 {
    float: right;
    // background-color: red;
    width: 48%;
    height: 48%;
    margin-bottom: 1%;

    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

#panel3 {
    float: left;
    // background-color: blue;
    width: 48%;
    height: 48%;
    margin-top: 1%;

    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

#panel4 {
    float: right;
    // background-color: green;
    width: 48%;
    height: 48%;
    margin-top: 1%;

    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 中等屏幕设备 */
@media (min-width: 768px) and (max-width: 950px) {

    #panel1,
    #panel2,
    #panel3,
    #panel4 {
        width: 100%;
        height: 40%;
        margin: 10px 0;
    }
}

/* 小屏幕设备，面板纵向排列 */
@media (max-width: 767px) {
    .component-page {
        padding: 5px 15px;
    }

    #panel1 {
        width: 100%;
        height: 65%;
        margin: 10px 0;
    }

    #panel2,
    #panel3,
    #panel4 {
        width: 100%;
        height: 50%;
        margin: 10px 0;
    }
}
</style>
