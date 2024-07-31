---
title: JavaScript基础
icon: code
date: 2024-07-29
category: 前端基础
tags:
  - Web开发
  - JavaScript
cover: /assets/images/JavaScript基础.jpg
order: "3"
excerpt: 本篇文章将简单介绍一下Web前端开发中的JavaScript。包括其定义、在开发中的作用，与超文本标记语言和层叠样式表是如何协同工作的。
---
## JavaScript是什么？

> [!important]
> JavaScript是一种跨平台、面向对象的脚本语言，用于控制网页的行为。

### 它在Web开发中的作用

> [!tip]
> 与HTML负责网页结构，CSS负责表现样式不同，JavaScript允许开发者实现网页与用户的交互功能，例如动态切换网页主题或响应用户操作。它是通过解释器直接执行源代码，无需编译阶段，极大地简化了开发过程。

### JS如何与HTML和CSS协同工作？

- JavaScript通常嵌入到HTML文档中，通过编写并加载JavaScript代码来改变DOM元素状态（如修改元素属性、添加或删除子元素等），从而实现网页内容的实时更新。

- 此外，尽管JavaScript与Java名称相近且某些语法相似，但它们是独立的不同语言，JavaScript遵循ECMAScript标准进行编写。

### 特点

- 跨平台性
- 面向对象
- 脚本化运行
- 用于用户界面交互

### JS与Java的联系与区别

> [!tip]
> - 尽管两者名字相似，但JavaScript与Java并非同一类语言。
> - JavaScript是基于ECMAScript标准的一种轻量级脚本语言，
> - 而Java则是更底层的编程语言，涉及编译和虚拟机运行。
> - 不过，它们在概念设计上有相似之处，都支持变量定义、条件判断、循环结构等基础语法。
> - 然而，JavaScript作为一门用于控制网页行为的脚本语言，更强调简洁高效的编程方式，以及与HTML和CSS的紧密结合。

## 引入方式

### 1. 内部脚本

> [!tip]
> 将JS代码定义在HTML页面中

- JavaScript代码必须位于`<script></script>`标签之间

- JavaScript代码必须位于标签之间 在HTML文档中，可以在任意地方，放置任意数量的`<script>`

- 一般会把脚本置于`<body>`元素的底部，可改善显示速度

例子：

```JS
<script>
	alert("HELLO JAVASCRIPT");
</script>
```
### 2. 外部脚本

> [!tip]
> JS代码定义在外部JS文件中，然后引入到HTML页面中

- 外部JS文件中，只包含JS代码，不包含`<script></script>`标签
- 引入外部js的`<script>`标签，必须是双标签