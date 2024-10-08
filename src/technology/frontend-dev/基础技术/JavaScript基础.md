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

例子：

```JavaScript
	<script src="js/demo.js"></script>
```

> [!important]
> 注意外部引入的JS文件中不能包含`script`标签！

## 基础语法

### 1. 书写语法

- 大小写严格

- 结尾分号可有可无（建议加上）

- 大括号代表代码块

- 注释：
	- 单行注释：`// 注释内容`
	- 多行注释：`/* 注释内容 */`

- 3中输出语法

| api                | 描述         |
| ------------------ | ---------- |
| `window.alert()`   | 警告框        |
| `document.write()` | 在HTML中输入内容 |
| `console.log()`    | 在浏览器控制台输出  |

### 2. 变量

1. **声明变量**：使用关键字`var`，`let`或`const`来声明变量

| 关键字     | 描述                                           |
| ------- | -------------------------------------------- |
| `var`   | ES5及之前版本中使用的变量声明方式，其作用域为函数作用域或全局作用域，可以被重新赋值。 |
| `let`   | ES6引入的，提供了块级作用域（在花括号 `{}` 内），可以被重新赋值         |
| `const` | ES6引入的，同样提供块级作用域，但它声明的变量是常量，一旦赋值后不能被重新赋值。    |

- JS是一门弱类型语言，变量可以存放不同类型的值

2. **命名规则**：

	- 变量名必须以字母、下划线 `_` 或美元符号 `$` 开头。

	- 变量名可以包含字母、数字、下划线和美元符号，但不能使用空格。

	- 数字不能作为开头

	- 变量名是区分大小写的。

### 3. 数据类型

- 原始类型：Undefined、Null、Boolean、Number、BigInt、Symbol 和 String。

- 引用类型：Object、Array、Function 等。

| 数据类型      | 描述                          |
| --------- | --------------------------- |
| number    | 数字（整数、小数、NaN）               |
| string    | 字符串                         |
| boolean   | 布尔：true、false               |
| null      | 空                           |
| undefined | 当声明变量未初始化时，该变量默认值为undefined |

- 使用`typeof`函数可以返回变量的数据类型。

### 4. 运算符

| 类别    | 运算符  | 描述               |
| ----- | ---- | ---------------- |
| 赋值运算符 | =    | 赋值               |
|       | +=   | 加法赋值             |
|       | -=   | 减法赋值             |
|       | *=   | 乘法赋值             |
|       | /=   | 除法赋值             |
|       | %=   | 取余赋值（求模）         |
|       | **=  | 幂运算赋值            |
| 算术运算符 | +    | 加法               |
|       | -    | 减法               |
|       | *    | 乘法               |
|       | /    | 除法               |
|       | %    | 取余（求模）           |
|       | ++   | 递增               |
|       | --   | 递减               |
| 比较运算符 | ==   | 等于（类型转换后比较）      |
|       | ===  | 严格等于（不进行类型转换）    |
|       | !=   | 不等于（类型转换后比较）     |
|       | !==  | 严格不等于（不进行类型转换）   |
|       | >    | 大于               |
|       | <    | 小于               |
|       | >=   | 大于等于             |
|       | <=   | 小于等于             |
| 逻辑运算符 | &&   | 逻辑与              |
|       | \|\| | 逻辑或              |
|       | !    | 逻辑非              |
| 位运算符  | &    | 位与               |
|       | \|   | 位或               |
|       | ^    | 位异或              |
|       | ~    | 位非               |
|       | <<   | 左移               |
|       | >>   | 右移               |
|       | >>>  | 无符号右移            |
| 条件运算符 | ? :  | 条件表达式（三元运算符）     |
| 逗号运算符 | ,    | 逗号，用于分隔表达式，按顺序执行 |

## 函数

1. **声明函数**：可以使用函数声明或函数表达式来定义函数。

	- 声明函数： 使用`function`关键字后跟函数名和参数列表

	```JS
	function myFunction(param1, param2) {
	  // 函数体
	}
	```

	- 函数表达式：将函数赋值给一个变量

	```JS
	const myFunction = function(param1, param2) {
	  // 函数体
	};
	```

> [!tip]
> 由于JS是弱类型语言
> - 形参不需要声明类型
> - 返回值也不需要声明类型

2. **参数**：函数可以接受一个或多个参数，这些参数在函数体内部作为局部变量。
3. **返回值**：使用`return`语句从函数返回一个值。如果没有`return`语句，函数默认返回`undefined`。
4. **作用域**：函数有自己的作用域，内部定义的变量在函数外部不可访问。
5. **递归**：函数可以调用自身，这称为递归。递归是解决某些问题（如算法中的树遍历）的有效方式。
6. **闭包**：函数可以记住并访问创建时的作用域，即使该作用域已经执行完毕，这种现象称为闭包。
7. **高阶函数**：JavaScript允许将函数作为参数传递给其他函数，或者将函数作为值赋给变量，这种函数称为高阶函数。
8. **箭头函数**：ES6引入了更简洁的函数书写方式，称为箭头函数。

	```JS
	const myFunction = (param1, param2) => {
	  // 函数体
	};
	```

	- 箭头函数还有一个更简洁的形式，当函数体只有一条语句时，可以省略花括号和`return`关键字：

	```JS
	const myFunction = (param1, param2) => expression;
	```

9. **默认参数**：ES6允许为函数参数设置默认值。

	```JS
	function myFunction(param1 = 'default value') {
	  // 如果没有提供param1，它将使用默认值
	}
	```

10. **剩余参数**：可以使用剩余参数语法来表示函数的不定数量的参数。

	```JS
	function myFunction(...args) {
	  // args是一个包含所有传入参数的数组
	}
	```

11. **this关键字**：在函数中，`this`关键字指向函数运行时的上下文对象。在不同的调用方式下，`this`的值可能不同。
12. **立即调用的函数表达式（IIFE）**：一个定义后立即执行的函数表达式，常用于创建一个新的作用域。

	```JS
	(function() {
	  // 代码块
	})();
	```

## JS对象

大致分为三类：

- 基本对象
- BOM对象
- DOM对象

### 参考手册

<NavCard arr='[
    {"title": "菜鸟教程", "url": "https://www.runoob.com/", "desc": "菜鸟在线教程", "icon": "/navicon/runoob.ico"},
    {"title": "W3C", "url": "https://www.w3cschool.cn/tutorial", "desc": "w3c在线基础教程", "icon": "/navicon/w3c.ico"}
]'></NavCard>

### 基本对象

JavaScript提供了许多内置的基本对象，这些对象是语言的核心组成部分，包括但不限于：

- **`Object`**：所有对象的基类。
- **`String`**：表示文本数据。
- **`Number`**：表示数字。
- **`Boolean`**：表示逻辑实体“真”或“假”。
- **`Array`**：表示元素集合。
- **`Date`**：表示特定的时间点或时间段。
- **`RegExp`**：表示正则表达式。
- **`Math`**：提供数学运算功能。
- **`Error`**：表示错误信息。

这些基本对象提供了大量的方法和属性，用于执行常见的操作，如字符串处理、数值计算、数组操作等。

- 常用对象有：`Array`、`String`、`JSON`

### BOM（浏览器对象模型）

BOM是浏览器提供的一个API，它允许JavaScript与浏览器交互。BOM的核心是`window`对象，它是所有浏览器全局对象的父对象。通过BOM，可以：

- 操作浏览器窗口，如打开新窗口、改变窗口大小等。
- 访问浏览器的历史记录（`history`对象）。
- 与浏览器的导航功能交互（`location`对象）。
- 访问和操作浏览器的会话存储和本地存储。
- 响应浏览器事件，如点击、滚动等。

BOM提供以下5个对象：

| 对象名称      | 描述      |
| --------- | ------- |
| Window    | 浏览器窗口对象 |
| Navigator | 浏览器对象   |
| Screen    | 屏幕对象    |
| History   | 历史记录对象  |
| Location  | 地址栏对象   |

### DOM（文档对象模型）

DOM是HTML和XML文档的编程接口，它将文档的结构表示为一个节点树，每个节点对应文档中的一个对象。DOM允许JavaScript以编程方式访问和操作网页的元素和属性。主要特点包括：

- **节点层次结构**：DOM将文档分解为元素节点、属性节点、文本节点等。
- **元素访问**：通过`document.getElementById`、`document.getElementsByTagName`、`document.querySelector`等方法访问元素。
- **元素操作**：可以修改元素的内容、属性、样式等。
- **事件处理**：可以为元素添加事件监听器，响应用户的交互。
- **DOM操作**：可以创建、删除、移动节点，从而动态地修改文档结构。

获取DOM对象

| 函数                              | 描述                         |
| ------------------------------- | -------------------------- |
| document.getElementById         | 根据id属性值获取，返回单个Element对象    |
| document.getElementByTagName    | 根据标签名称获取，返回Element对象数组     |
| document.getElementsByName      | 根据name属性值获取，返回Element对象数组  |
| document.getElementsByClassName | 根据class属性值获取，返回Element对象数组 |

- 我们可以通过div标签对象的innerHTML属性来修改标签的内容

## 常见事件

| 事件属性名       | 说明           |
| ----------- | ------------ |
| onclick     | 鼠标单击事件       |
| onblur      | 元素失去焦点       |
| onfocus     | 元素获得焦点       |
| onload      | 某个页面或图像被完成加载 |
| onsubmit    | 当表单提交时触发该事件  |
| onmouseover | 鼠标被移到某元素之上   |
| onmouseout  | 鼠标从某元素移开     |
