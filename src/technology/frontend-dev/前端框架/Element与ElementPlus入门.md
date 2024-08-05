---
title: Element入门
date: 2024-08-05
category: 前端框架
tags:
  - Web开发
  - Element
  - ElementPlus
icon: code
cover: /assets/images/Element入门.jpg
order: "3"
excerpt: Element是饿了么团队研发的，一套为开发者、设计师和产品经理准备的基于Vue2.0的桌面端组件库。而Element Plus则是专门为Vue3设计的一套组件库，引入新的组件的同时还提高了性能。
---
## 什么是Element？

- Element:是饿了么团队研发的，一套为开发者、设计师和产品经理准备的基于==Vue2.0==的桌面端组件库。
- 组件：组成网页的部件，例如超链接、按钮、图片、表格、表单、分页条等等。
- 官网：[ElementUI](https://element.eleme.cn/#/zh-CNListener)

### 快速入门

- 安装ElementUI组件库：

```cmd
npm i element-ui -S
```

- 引入ElementUI

```main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

- 接着从官网组件复制对应的(template)、(script)以及(style)到我们的Vue页面中，就可以看到Element提供给我们的组件了。

## 什么是Element Plus？

Element Plus: 是基于Vue 3的新一代桌面端组件库，由饿了么团队研发，专为开发者、设计师和产品经理准备，以支持==Vue 3==生态。

- 组件：Element Plus提供了丰富的组件，用于构建网页，包括但不限于超链接、按钮、图片、表格、表单、分页条等。
- 官网：[Element Plus](https://element-plus.org/#/zh-CN)

### 快速入门

- 安装Element Plus组件库：

```cmd
npm install element-plus --save
```

- 引入Element Plus：

```javascript
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);

// 设置Element Plus的语言为中文
app.use(ElementPlus, { locale: zhCn });

app.mount('#app');
```

- 之后，可以从Element Plus的官网复制对应的(template)、(script)以及(style)到的Vue 3页面中进行使用。

- Element Plus不仅继承了Element UI的优秀特性，还针对Vue 3进行了优化和升级。

::: important 简单比较一下ElementPlus和ElmentUI

1. Vue 版本支持
	- ElementUI专为Vue2设计的组件库
	- ElementPlus专为Vue3设计的组件库
2. 组件和功能
	- **Element UI**：提供了一套完整的桌面端 UI 组件，包括按钮、输入框、下拉菜单、表格等。
	- **Element Plus**：在继承 Element UI 组件的基础上，针对 Vue 3 进行了优化和升级，同时也引入了一些新的组件和功能。
3. 性能和优化
	- **Element Plus**：由于是为 Vue 3 构建的，Element Plus 可能会在性能上有所提升，利用了 Vue 3 的新特性，如 Composition API

:::
