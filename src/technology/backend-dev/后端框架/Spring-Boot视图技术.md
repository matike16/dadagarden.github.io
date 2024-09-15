---
title: SpringBoot视图技术
icon: code
date: 2024-09-15
category: 后端框架
tags:
  - SpringBoot
  - Web开发
  - Thymeleaf
cover: /assets/images/Spring-Boot原理分析.jpg
excerpt: 在一个Web应用中，通常会采用MVC设计模式实现对应的模型、视图和控制器，其中，视图是用户看到并与之交互的界面。对最初的Web应用来说，视图是由HTML元素组成的静态界面；而后期的Web应用更倾向于使用动态模板技术，从而实现前后端分离和页面的动态数据展示。
order: "4"
---

前端模板引擎的出现，使前端开发人员无须关注后端业务的具体实现，只关注自己页面的呈现效果即可，从而解决了前端代码错综复杂的问题，实现了前后端分离开发。

## 什么是模板引擎？

- 