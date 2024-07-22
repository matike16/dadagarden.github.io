<template>
    <ClientOnly>
      <div class="slide-down-component"></div>
    </ClientOnly>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  // 导入并使用 `ref` 来动态调整组件
  const NAVBAR_HEIGHT = 52; // 设定导航栏的高度（可以根据实际情况调整）
  
  onMounted(() => {
    const button = document.querySelector('.slide-down-button');
    if (button) {
      button.addEventListener('click', () => {
        let targetScrollDistance;
        
        // 检测是否为手机端
        if (window.innerWidth < 720) { // 假设手机端最大宽度为 768px
          // 手机端下拉距离不减去导航栏高度
          targetScrollDistance = window.innerHeight;
        } else {
          // 非手机端（桌面）下拉距离减去导航栏高度
          targetScrollDistance = window.innerHeight - NAVBAR_HEIGHT;
        }
        
        // 打印到控制台
        console.log('下拉按钮被点击');
        console.log('目标下拉距离:', targetScrollDistance);
  
        // 执行平滑滚动
        window.scrollTo({
          top: targetScrollDistance,
          behavior: 'smooth'
        });
      });
    }
  });
  </script>
  