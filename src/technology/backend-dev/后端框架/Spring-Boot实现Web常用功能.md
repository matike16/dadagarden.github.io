---
title: SpringBoot实现Web常用功能
icon: code
date: 2024-09-25
category: 后端框架
tags:
  - SpringBoot
  - Web开发
  - MVC
cover: /assets/images/Spring-Boot原理分析.jpg
excerpt: Spring Boot框架支持整合一些常用的Web框架，从而实现Web开发，并默认支持Web开发中的一些调用功能。
order: "5"
---

## Spring MVC整合

### Spring MVC介绍

Spring MVC 是Spring框架的一部分，实现了经典的MVC设计模式，用于构建Web应用。

#### MVC模式

**Model（模型）**

- 应用程序中用于==处理数据==的部分，通常代表应用程序的状态
- Spring MVC中，模型通常是JavaBean或者POJOs（Plain Old Java Objects），它们包含了应用程序的业务逻辑和数据。

::: tip 概括
后端，包含所有的数据逻辑，通过服务处与数据库进行交互。
:::

**View（视图）**

- 应用程序中负责==展示数据==的部分。
- Spring MVC中，视图通常由JSP、HTML页面和模板引擎生成。

::: tip 概括
前端界面或GUI。
:::

**Controller（控制器）**

- 应用程序中==处理用户交互==的部分。
- Spring MVC中，控制器通过注解标记的类和方法来定义。控制器接收用户的输入，通常是通过HTTP请求，然后调用模型来处理这些输入，并选择一个视图来展示处理结果。

::: tip 概括
应用的大脑，控制数据如何展示。
:::

#### MVC工作流程

1. 用户发送请求到服务器
2. 服务器端的中央控制器接收到请求
3. 中央控制器根据请求URL将请求分配给对应的控制器
4. 控制器接收请求，并调用模型处理业务逻辑和数据操作
5. 模型处理完数据后，返回处理结果
6. 控制器根据返回结果选择合适的视图
7. 视图渲染完成后，将结果返回给用户

### 使用Vue作为视图

**Controller（控制器）**

- 控制器接收到前端的请求，处理完毕后，通常返回JSON格式的数据，而不是完整的HTML页面。Vue应用会在客户端接收到这些数据，进行响应式更新。

**具体步骤**

1. 创建Vue组件
2. 后端提供API
3. 前端调用API
4. 进行数据绑定
5. 事件处理
6. 响应式更新

## Spring Boot整合Servlet三大件

