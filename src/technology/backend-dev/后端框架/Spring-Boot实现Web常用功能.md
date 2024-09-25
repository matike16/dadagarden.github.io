---
title: SpringBoot实现Web常用功能
icon: code
date: 2024-09-25
category: 后端框架
tags:
  - SpringBoot
  - Web开发
  - MVC
  - Servlet
cover: /assets/images/Spring-Boot原理分析.jpg
excerpt: Spring Boot框架支持整合一些常用的Web框架，从而实现Web开发，并默认支持Web开发中的一些调用功能。
order: "5"
---

## Spring MVC整合

> [!tip]
> 参考书籍整合MVC方式使用的是模板引擎的方式，个人目前倾向于使用客户端渲染的Vue模式，关于整合MVC部分不做过多详细的描述。


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

进行Servlet开发时，通常需要先定义Servlet、Filter、Listener三大组件，然后再在web.xml中进行配置。Spring Boot由于内置Servlet容器，不提供web.xml，因此提供了==组件注册==和==路径扫描==两种方式来整合Servlet三大件。

::: important 关于Servlet
在现代化的Java Web开发中，尤其是在使用Spring Boot框架时，直接使用Servlet的情况已经不多见了。Spring Boot和Spring MVC提供了更为高级和便捷的抽象，使得开发者通常不需要直接与Servlet API打交道。
:::
### 什么是Servlet

- Servlet 是一种Java类，用于响应网络请求。通常运行在Servlet容器内，如Tomcat、Jetty等

#### 主要功能

- 处理HTTP请求：如GET、POST、PUT、DELETE等
- 生成响应：基于请求，生成HTML、XML和JSON等格式的响应。
- 管理会话：Servlet可以管理用户会话，跟踪用户状态。
- 资源共享：Servlet可以通过HTTP协议共享资源，如图片、视频等。

#### 生命周期

Servlet生命周期包括以下几个阶段：

1. 加载
2. 初始化
3. 请求处理
4. 销毁

### 什么是Filter

- Filter用户拦截请求和响应。以便它们到达Servlet之前或发送到客户端之前进行一些操作。
 
### 什么是Listener

- Listener用于监听Web应用程序中的事件，并执行相应的操作。

### 组件注册方式整合

#### 整合Servlet

- 创建一个继承自HttpServlet的类
- 使用@Component注解将自定义Servlet类作为组件注入Spring容器中
- 接着在Config包下创建一个Servlet组件配置类
- 使用@Configuration注解将该类标注为配置类
- 使用@Bean注册Servlet组件

#### 整合Filter

- 创建一个继承自Filter接口的类
- 使用@Component注解将该类注入容器中
- 并重写init()、doFile()、destroy()方法
- 在刚刚的配置类中使用@Bean注册这个自定义Filter类

#### 整合Listerner

- 整合Listerner的方式与上两种方式类似

### 路径扫描方式整合

- 对于自定义的Servlet、Filter、Listener组件分别使用@WebServlet、@WebFilter和@WebListener注解进行声明并配置相应的属性。
- 根据注解注解映射好对应的类后，在主程序启动类上添加@ServletComponentScan注解，开启基于注解方式的Servlet组件扫描支持。

> [!tip]
> 在实际的开发中，我们可以根据需求来确定是否需要定制Servlet三大件组件来进行使用。


## 文件上传与下载

### 文件上传

开发Web应用时，文件上传是一种很常见的需求，浏览器通过表单形式将文件以流的方式传递给服务器，服务器再对上传的数据解析处理。

