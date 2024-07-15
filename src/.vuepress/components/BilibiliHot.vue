<template>
    <ClientOnly>
        <div class="bilibili-hot"></div>
    </ClientOnly>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { h, createVNode, render } from 'vue';
import emitter from '../utils/emitter';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 引入图标
library.add(fas);

const hotList = ref([]);
const currentPage = ref(1);
const itemsPerColumn = 5;

const fetchBilibiliHot = async () => {
    try {
        const response = await axios.get('https://tenapi.cn/v2/bilihot');
        if (response.data && response.data.code === 200) {
            hotList.value = response.data.data;
        }
    } catch (error) {
        console.error('获取Bilibili热搜榜失败:', error);
    }
}

const totalColumns = computed(() => Math.ceil(hotList.value.length / itemsPerColumn));
const totalPages = computed(() => totalColumns.value / 2);

const getPaginatedList = (column, pageIndex) => {
    const start = (pageIndex - 1) * itemsPerColumn + (column - 1) * itemsPerColumn * totalColumns.value / 2;
    const end = start + itemsPerColumn;
    const slicedHotList = hotList.value.slice(start, end);

    const truncatedList = slicedHotList.map(item => {
        const truncatedName = item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name;
        return { ...item, truncatedName };
    });

    return truncatedList;
};

const goToPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages.value) {
        currentPage.value = pageNumber;
        renderBilibiliHot(); // 更新渲染内容
    }
}

const renderBilibiliHot = () => {
    const bilibiliHot = document.querySelector('#panel1');
    if (bilibiliHot) {
        let bilHot = document.querySelector('.bil-hot');
        if (!bilHot) {
            bilHot = document.createElement('div');
            bilHot.className = 'bil-hot';
            bilibiliHot.appendChild(bilHot);
        }

        const vnode = h('div', { class: 'bil-hot-content' }, [
            h('div', { class: 'pagination' }, [
                h('button', { onClick: () => goToPage(currentPage.value - 1), disabled: currentPage.value === 1, class: 'prev' }),
                h('div', { class: 'bil-hot-title' }, 'Bilbili热搜'),
                // h('span', `${currentPage.value} / ${totalPages.value}`),
                h('button', { onClick: () => goToPage(currentPage.value + 1), disabled: currentPage.value === totalPages.value, class: 'next' })
            ]),
            h('div', { class: 'bil-hot-columns' }, [
                h('ul', { class: 'ul1' }, getPaginatedList(1, currentPage.value).map((item, index) =>
                    h('li', { key: index }, [
                        h('a', { href: item.url, target: '_blank' }, `${(currentPage.value - 1) * 2 * itemsPerColumn + index + 1}. ${item.truncatedName}`)
                    ])
                )),
                h('ul', { class: 'ul2' }, getPaginatedList(2, currentPage.value).map((item, index) =>
                    h('li', { key: index }, [
                        h('a', { href: item.url, target: '_blank' }, `${(currentPage.value - 1) * 2 * itemsPerColumn + 6 + index}. ${item.truncatedName}`)
                    ])
                ))
            ]),
        ]);

        render(vnode, bilHot);

        const iconVNode3 = createVNode(FontAwesomeIcon, { icon: 'fa-solid fa-angle-left' });
        const iconVNode4 = createVNode(FontAwesomeIcon, { icon: 'fa-solid fa-angle-right' });
        render(iconVNode3, bilHot.querySelector('.prev'));
        render(iconVNode4, bilHot.querySelector('.next'));
    }
};

/**
 * 在博客页面中插入B站热点榜
 */
const insertBilibiliHot = () => {
    const tryInsertBilibiliHot = () => {
        const bilibiliHot = document.querySelector('#panel1');
        if (bilibiliHot) {
            renderBilibiliHot();
        }
    };

    // 在panel1插入后尝试插入bil-hot
    emitter.on('panel1-inserted', tryInsertBilibiliHot);

    const router = useRouter();
    router.beforeEach(() => {
        setTimeout(() => {
            tryInsertBilibiliHot();
        }, 50);
    });
};

onMounted(() => {
    fetchBilibiliHot();
    insertBilibiliHot();
});
</script>


<style lang="scss">
.bil-hot {
    // display: none;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    transition: all 0.3s ease;

    html[data-theme='dark'] & {
        background: rgba(1, 1, 1, 0.2);
        color: #fff;
    }

    html[data-theme='light'] & {
        background: rgba(255, 255, 255, 0.2);
        color: #000;
    }
}

.bil-hot-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.bil-hot-columns {
    display: flex;
    justify-content: space-between;
    // gap: 1rem;
}

.bil-hot-columns ul {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
}

.bil-hot-content .ul1 {
    width: 48%;
    padding: 5% 0;
    margin-right: 1%;
    // margin: 0 1rem 0 1rem;
}

.bil-hot-content .ul2 {
    width: 48%;
    padding: 5% 0;
    margin-left: 1%;
    // margin: 0 1rem 0 0;
}

.bil-hot-content li {
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    padding-left: 1rem;
}

.bil-hot-content li:hover {
    html[data-theme='dark'] & {
        background: rgba(255, 255, 255, 0.6);

        a {
            color: #000;
        }
    }

    html[data-theme='light'] & {
        background: rgba(0, 0, 0, 0.6);

        a {
            color: #fff;
        }
    }
}

@media (min-width: 768px) and (max-width: 1180px) {
    .bil-hot-content .ul1 {
        padding: 2rem 0;
        margin: 0;
    }

    .bil-hot-content .ul2 {
        padding: 2rem 0;
        margin: 0;

        li {
            padding-left: 0.1rem;
        }
    }

    .bil-hot-content li {
        width: 200px;
        padding-left: 0;
    }
}

@media (max-width: 767px) {
    .bil-hot {
        width: 100%;
    }

    .bil-hot-columns {
        flex-direction: column;
    }

    .bil-hot-content .ul1 {
        width: 100%;
        padding: 2rem 0 0 0;
        margin: 0;
    }

    .bil-hot-content .ul2 {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .bil-hot-content li {
        margin-bottom: 0;
        padding-left: 0rem;
        text-align: center;
    }
}

.bil-hot-content a {
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;

    html[data-theme='dark'] & {
        color: #fff;
    }

    html[data-theme='light'] & {
        color: #000;
    }
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ;
}

.bil-hot-content .prev,
.bil-hot-content .next {
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--theme-color);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.3s;
}

.prev:disabled,
.next:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #fff;
}

.prev:not(:disabled):hover,
.next:not(:disabled):hover {
    background-color: #0094c8;
}

// .pagination span {
//     font-size: 1rem;
// }</style>
