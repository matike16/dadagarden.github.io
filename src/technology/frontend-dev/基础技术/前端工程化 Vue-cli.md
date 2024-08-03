---
title: 前端工程化Vue-cli
icon: code
date: 2024-08-03
category: 前端基础
tags:
  - Web开发
  - 前端工程化
  - Vue-cli
order: "6"
cover: /assets/images/前端工程化 Vue-cli.jpg
excerpt: 随着前端开发需求向模块化、组件化、规范化以及自动化方向发展，企业级项目特别重视采用工程化方法以提升开发效率和产品质量。一个有效的手段是利用Vue-cli官方提供的脚手架工具，它能快速生成Vue工程模板，并包含统一的项目目录结构、本地程序调试、热部署、单元测试和集成打包上线等功能。
---
## 资料与文档

<NavCard arr='[
    {"title": "Vue-cli文档", "url": "https://cli.vuejs.org/zh/guide/creating-a-project.html", "desc": "🛠️ Vue.js 开发的标准工具", "icon": "/navicon/vuepress.png"}
]'></NavCard>

## 概要

随着前端开发需求向模块化、组件化、规范化以及自动化方向发展，企业级项目特别重视采用工程化方法以提升开发效率和产品质量。一个有效的手段是利用Vue-cli官方提供的脚手架工具，它能快速生成Vue工程模板，并包含统一的项目目录结构、本地程序调试、热部署、单元测试和集成打包上线等功能。

## 什么是前端工程化？

在企业级的前端项目开发中，把前端开发所需要的工具、技术、流程、经验进行规范化和标准化。从而提升开发效率，降低开发难度等等。

### 特点

- 模块化：将js和css等，做成一个个可复用模块 
- 组件化：将UI组件，css样式，js行为封装成一个个的组件，便于管理 
- 规范化：提供一套标准的规范的目录接口和编码规范，所有开发人员遵循这套规范 
- 自动化：项目的构建，测试，部署全部都是自动完成

## 前端工程化入门

### 环境准备

Vue-cli特点：

- 统一的目录结构
- 本地调试
- 热部署
- 单元测试
- 集成打包上线

使用vue3-cli 进行快速开发

1. 搭建vue环境

    - 安装Nodejs

    - 全局安装Vue-cli：命令行输入npm install --g vue-cli

2. 创建项目

    - vue create 项目名称

    - 选择手动配置项目特性 Manually select features

    - 空格选择Router、Vuex、Babel、CSS Pre-processors、Linter / Formatter

    - 选择3.x

    - 使用历史模式

    - 使用CSS预处理语言 选择SCSS

    - 使用格式化代码方式 选择ESLint + Prettier

    - 选择代码规则检测 Lint on save

    - 记录配置选择 保存该次配置为默认配置

    - 使用VScode打开 控制台 npm run serve

> [!tip]
> 也可以使用图形化创建工具
> 命令窗口输入：
> ```cmd
> vue ui
> ```

### 目录结构

