<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';

const BlogBg = () => {
  if (!document.getElementById('dada_BlogBg')) {
    const bgDiv = document.createElement('div');
    bgDiv.id = 'dada_BlogBg';
    document.body.appendChild(bgDiv);

    const shapes = [
      { type: 'circle', top: '10vh', left: '10vw' },
      { type: 'triangle', top: '30vh', left: '80vw' },
      { type: 'square', top: '60vh', left: '10vw' },
      { type: 'circle1', top: '60vh', left: '80vw' },
    ];

    shapes.forEach((shape) => {
      const shapeDiv = document.createElement('div');
      shapeDiv.className = 'random-shape';
      shapeDiv.style.top = shape.top;
      shapeDiv.style.left = shape.left;
      shapeDiv.style.animationDuration = '30s';

      if (shape.type === 'circle') {
        shapeDiv.classList.add('circle');
      } else if (shape.type === 'triangle') {
        const triangleDiv = document.createElement('div');
        triangleDiv.className = 'triangle';
        shapeDiv.classList.add('triangleDiv');
        shapeDiv.appendChild(triangleDiv);
      } else if (shape.type === 'square') {
        shapeDiv.classList.add('square');
      } else if (shape.type === 'circle1') {
        shapeDiv.classList.add('circle1');
      }

      bgDiv.appendChild(shapeDiv);
    });
  }
};

onMounted(() => {
  nextTick(() => {
    console.log('执行背景美化');
    BlogBg();
  });
});
</script>

<template>
  <ClientOnly>
    <div ref="dada_BlogBg"></div>
  </ClientOnly>
</template>

<style lang="scss">
#dada_BlogBg {
  user-select: none;
  pointer-events: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-image: linear-gradient(to right,
      #eea2a2 0%,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%);

  animation: gradientBG 15s ease infinite;
  background-size: 300% 300%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

#dada_BlogBg::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,
      rgba(255, 255, 255, 0.5)1px,
      transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.5)1px,
      transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

#dada_BlogBg:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

[data-theme="dark"] #dada_BlogBg:after {
  background-color: #1d2025b3;
}

[data-theme="light"] #dada_BlogBg:after {
  background-color: #ffffff1a;
}


@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.random-shape {
  position: absolute;
  transform-origin: center;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.5);
  animation: move 30s linear infinite;
}

.circle1 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(255, 0, 255, 0.5);
  animation: move1 30s linear infinite;
}

.triangleDiv {
  animation: rotate 30s linear infinite;
}

.triangle {
  position: relative;
  background-color: orange;
}

.triangle:before,
.triangle:after {
  content: '';
  position: absolute;
  background-color: inherit;
}

.triangle,
.triangle:before,
.triangle:after {
  width: 100px;
  height: 100px;
  border-top-right-radius: 30%;
}

.triangle {
  transform: rotate(-60deg) skewX(-30deg) scale(1, .866);
}

.triangle:before {
  transform: rotate(-135deg) skewX(-45deg) scale(1.414, .707) translate(0, -50%);
}

.triangle:after {
  transform: rotate(135deg) skewY(-45deg) scale(.707, 1.414) translate(50%);
}

.square {
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 255, 0.5);
  border-radius: 20px;
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes move {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes move1 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
}

#app {
  position: relative;
  z-index: 5;
}

.theme-container {

  .vp-page.vp-blog,
  .vp-page.vp-blog-home {
    background: transparent;
  }
}
</style>
