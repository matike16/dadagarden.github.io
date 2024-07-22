<template>
    <ClientOnly>
        <div class="times-component"></div>
    </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVNode, render } from 'vue';

// 将fas图标库添加到FontAwesome的库中
library.add(fas);

// 用于控制组件切换状态的引用
const isToggled = ref(false);

/**
 * 显示当前时间的函数
 * 该函数会每秒更新一次时间
 */
function showTime() {
    const date = new Date();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const timeString = `${hours}:${minutes}:${seconds}`;

    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateString = date.toLocaleDateString('zh-CN', options);

    const currentTimeElement = document.getElementById('currentTime');
    const currentDateElement = document.getElementById('currentDate');
    if (currentTimeElement && currentDateElement) {
        currentTimeElement.innerHTML = timeString;
        currentDateElement.innerHTML = dateString;
        setTimeout(showTime, 1000);
    }
}


/**
 * 切换页面元素的显示状态
 * 该函数用于在博客页面和组件页面之间切换
 */
const toggleElements = () => {
    const heroImage = document.querySelector('.vp-blog-hero-image');
    const heroTitle = document.querySelector('.vp-blog-hero-title');
    const heroDescription = document.querySelector('.vp-blog-hero-description');
    const componentTimes = document.querySelector('.component-times');
    const componentChange = document.querySelector('.component-button');

    if (isToggled.value) {
        if (heroImage) heroImage.style.display = '';
        if (heroTitle) heroTitle.style.display = '';
        if (heroDescription) heroDescription.style.display = '';
        if (componentChange) componentChange.style.display = '';
        if (componentTimes) componentTimes.remove();
    } else {
        if (heroImage) heroImage.style.display = 'none';
        if (heroTitle) heroTitle.style.display = 'none';
        if (heroDescription) heroDescription.style.display = 'none';
        if (componentChange) componentChange.style.display = 'none';
        if (!componentTimes) {
            const newComponentTimes = document.createElement('div');
            newComponentTimes.className = 'component-times';
            newComponentTimes.innerHTML = `
            <div id="currentTime"></div>
            <div id="currentDate"></div>
            <div class="hitokoto-content">
                <div class="Btn-out">
                    <div id="hitokotoBtn"></div>
                </div>
                <div class="hitokoto-out">
                    <span class="point">[ </span><span id="hitokoto"></span><span class="point"> ]</span>
                </div>
                <div class="author-content">
                    —— <span id="author"></span> ——
                </div>
            </div>
            `;
            document.querySelector('.vp-blog-mask').appendChild(newComponentTimes);
            showTime(); // 调用显示时间的函数
            fetchHitokoto();// 调用获取一言函数

            // document.getElementById('hitokotoBtn').addEventListener('click',fetchHitokoto);
            const hitokotoBtn = document.getElementById('hitokotoBtn');
            // hitokotoBtn.classList.add('rotate');
            hitokotoBtn.addEventListener('click', () => {
                hitokotoBtn.classList.add('rotate');
                fetchHitokoto();
                setTimeout(() => {
                    hitokotoBtn.classList.remove('rotate');
                }, 500);
            });
            const iconVNode2 = createVNode(FontAwesomeIcon, { icon: ['fas', 'rotate'] });
            render(iconVNode2, hitokotoBtn);
        }
    }

    isToggled.value = !isToggled.value;
};

/**
 * 获取一言
 */
const fetchHitokoto = () => {
    fetch('https://tenapi.cn/v2/yiyan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'format=json',
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                const hitokotoElement = document.getElementById('hitokoto');
                const authorElement = document.getElementById('author');
                if (hitokotoElement && authorElement) {
                    hitokotoElement.innerHTML = data.data.hitokoto;
                    authorElement.innerHTML = data.data.author;
                }
            }
        })
        .catch(error => {
            console.error('Error fetching hitokoto:', error);
        });
};

/**
 * 在博客页面中插入组件切换按钮
 * 该函数负责动态插入组件切换按钮，并处理按钮的点击事件
 */
const insertComponentTimes = () => {
    const tryInsertComponent = () => {
        const blogMask = document.querySelector('.vp-blog-mask');
        if (blogMask && !document.querySelector('.component-button1')) {
            const button1 = document.createElement('div');
            button1.className = 'component-button1';

            // 创建 FontAwesomeIcon 组件的 VNode
            const iconVNode1 = createVNode(FontAwesomeIcon, { icon: ['fas', 'fa-clock'] });
            // 渲染组件到 button
            render(iconVNode1, button1);

            // 添加点击事件处理程序
            button1.addEventListener('click', () => {
                toggleElements();
                const newIcon1 = isToggled.value ? ['fas', 'fa-xmark'] : ['fas', 'fa-clock'];
                const newIconVNode1 = createVNode(FontAwesomeIcon, { icon: newIcon1 });
                render(newIconVNode1, button1);
            });

            blogMask.appendChild(button1);
        }
    };

    // 在页面初始化时尝试插入按钮
    tryInsertComponent();

    const router = useRouter();
    if (router && typeof router.beforeEach === 'function') {
        router.beforeEach(() => {
            setTimeout(() => {
                tryInsertComponent();
            }, 50);
        });
    }
};

onMounted(insertComponentTimes);
</script>

<style lang="scss">
.component-button1 {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    position: absolute;
    top: 4.25rem;
    right: 0.75rem;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
}

.component-button1:hover {
    background: rgba(0, 0, 0, 0.6);
}

.fa-clock,
.fa-xmark {
    font-size: 1rem;
    color: #AEB0A6;
}

.component-times {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

#currentTime {
    font-size: 10rem;
    font-weight: bold;
    color: rgba($color: #fff, $alpha: 0.7);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#currentDate {
    font-size: 3rem;
    font-weight: 500;
    color: rgba($color: #fff, $alpha: 0.7);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 767px) {
    #currentTime {
        font-size: 5rem;
    }

    #currentDate {
        font-size: 2rem;
    }
}

.hitokoto-content{
    width: 80%;
    z-index: 10;
    position: absolute;
    bottom: 7rem;
    transition: all 1s ease-in-out;
}

.hitokoto-content:hover {
    #hitokotoBtn {
        display: block;
    }
}

.hitokoto-out{
    width: 100%;
    text-align: center;
}

.point {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba($color: #fff, $alpha: 0.7);
}

#hitokoto {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba($color: #fff, $alpha: 0.7);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.Btn-out {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

#hitokotoBtn {
    display: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in-out;
}

.author-content {
    width: 100%;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.7);
}

#author { 
    font-weight: bold;
    font-size: 0.8rem;
    color: rgba($color: #fff, $alpha: 0.7);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#hitokotoBtn:hover {
    background: rgba(0, 0, 0, 0.6);
}

.rotate {
    animation: rotate 0.5s ease-in-out;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 767px) {
    #hitokoto {
        font-size: 1rem;
    }
}
</style>
