---
title: SpringBoot数据访问
icon: code
date: 2024-08-31
category: 后端框架
tags:
  - SpringBoot
  - Web开发
cover: /assets/images/Spring-Boot原理分析.jpg
excerpt: Spring Boot对于关系型数据库和非关系型数据库的访问操作都提供了非常好的整合支持，Spring Boot整合了Spring的Spring Data用于简化数据库访问。
order: "3"
---
Spring Boot对于关系型数据库和非关系型数据库的访问操作都提供了非常好的整合支持。例如MyBaties、JPA、Redis。

## Spring Boot 数据库访问概述

Spring Boot 默认采用整合Spring Data的方式统一处理数据访问层，通过添加大量自动配置，引入各种数据访问模板`xxxTemplate`以及统一的Repository接口，从而达到简化数据访问层的操作。

::: tip 简单介绍一下Spring Data
Spring Data 是 Spring 框架的一个模板，它提供了一套简洁的编程模型来简化数据库操作。Spring Data 通过抽象化数据访问层，使得开发者可以不用编写大量的样板代码，就能实现对数据库的CRUD（创建、读取、更新、删除）操作。以下是Spring Data 的一些关键特性：

- Repository抽象
- 方法名定义查询
- 查询方法命名约定
- 多种数据库支持
- 集成JPA
- 事务管理
- 分页和排序
- 自定义查询
- 事件发布
- 集成测试支持

Spring Data 的目标是减少数据访问层的样板代码，让开发者能够更专注于业务逻辑的实现，同时保持代码的简洁性和可维护性。
:::

Spring Boot 对 Spring Data 支持的数据库进行了整合管理，提供了多种依赖启动器。以下是常见的：

|                名称                |                       描述                        |
| :------------------------------: | :---------------------------------------------: |
|   spring-boot-starter-data-jpa   |        Spring Data JPA 与 Hibernate 的启动器         |
| spring-boot-starter-data-mongodb |       MongoDB 和 Spring Data MongoDB 的启动器        |
|  spring-boot-starter-data-neo4j  |       Neo4j 图数据库和 Spring Data Neo4j 的启动器        |
|  spring-boot-starter-data-redis  | Redis 键值数据存储与 Spring Data Redis 和 Jedis 客户端的启动器 |

::: important 关于MyBatis依赖
Spring Boot 没有提供MyBatis场景依赖，但MyBatis开发团队提供了适配依赖—— `mybatis-spring-boot-starter`
:::

## Spring Boot 整合 MyBatis

::: tip 简单介绍一下MyBatis
MyBatis 是一个流行的持久层框架，用于简化 Java 应用程序与数据库之间的交互。它提供了 SQL 映射和数据访问对象（DAO）的实现，使得开发者能够以更直观和灵活的方式进行数据库操作。

::: important 什么是"持久层"
在软件开发中，"持久层"（Persistence Layer）是应用程序架构中的一个层次，它负责数据的持久化，即将数据保存到数据库或其他形式的存储系统中，以及从存储系统中检索数据。

- 持久化是指将数据保存到持久存储中，如硬盘或数据库，这样即使在应用程序关闭或系统重启后，数据也不会丢失。

想象一下，你的电脑里有一个电子表格，里面记录了你的购物清单。这个电子表格就像是你的电脑里的一个“数据库”，它帮你记住了所有你想买的东西。

现在，如果你想要在你的电脑上创建一个新的购物清单，或者更新现有的清单，或者查询某个特定商品，你需要打开电子表格，然后手动输入或修改数据。这个过程就像是你在编写代码来操作数据库。

但是，如果你有一个助手，这个助手知道如何操作电子表格，并且可以自动帮你完成这些任务，那么你就不需要亲自动手了。这个助手就像是“持久层框架”。

持久层框架的“持久”部分，意味着它帮助你保存信息，就像你的电子表格保存购物清单一样。即使你关闭了电脑，购物清单的信息也不会消失。
:::

### 基础环境搭建

**1. 准备数据**

通过 MySQL 或者 MySQL 管理工具 Navicat 创建好数据库和数据库表

> [!tip]
> 基础建表语句此处不做阐述，仅讲解步骤。

**2.添加依赖**

在 Spring Boot 项目的 `pom.xml` 文件中添加 MyBatis 和数据库连接池的依赖。

```xml
<dependencies>
    <!-- Spring Boot Starter MyBatis -->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>版本号</version>
    </dependency>
    <!-- 数据库驱动依赖，例如 MySQL -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
</dependencies>
```

>[!tip]
>MySQL依赖在项目创建时，可以直接选择。

**3. 配置数据源**

在 `application.properties` 或 `application.yml` 文件中配置数据库连接信息。

```properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/数据库名
spring.datasource.username=用户名
spring.datasource.password=密码
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

::: important 关于数据源
数据源，简单来说就是应用程序与数据库之间的桥梁。它负责提供数据库连接，允许应用程序执行查询、更新、插入和删除等操作。在数据库编程中，数据源通常包括以下关键要素：
- 数据库连接信息
- 提供连接池
- 配置参数
- 事务处理

在 Spring Boot 中，默认情况下，如果没有特别指定，它会使用内置的 Tomcat JDBC 连接池。但是，Spring Boot 支持多种数据库连接池，包括 HikariCP、DBCP2、Tomcat JDBC 等，你可以根据需要配置使用不同的连接池。

例如使用阿里巴巴的 Druid 数据源。
- 先在`pom.xml`文件中添加依赖
```xml
<dependency>
	<groupId>com.alibaba</groupId>
	<artifictId>druid-spring-boot-starter</artifictId>
	<version>版本号</version>
</dependency>
```

- 接着在配置文件中添加数据源信息和参数配置
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/数据库名
spring.datasource.username=用户名
spring.datasource.password=密码

#添加第三方数据源Druid配置参数。
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.initialSize=20
spring.datasource.minIdle=10
spring.datasource.maxActive=100
```

- 自定义Druid配置类
在config包下创建一个配置类：DataSourceConfig
```java
import com.alibaba.druid.pool.DruidDataSource;
//import ... 略

@Configuration
public class DataSourceConfig {
	@Bean
	@ConfigurationProperties(prefix = "spring.datasource")
	public DataSource getDruid() {
		return new DruidDataSource();
	}
}
```

:::

**4.创建实体类**

创建一个domain的包，用于存放实体类。在包中定义与数据库表对应的Java实体类。

示例：

```java
public class User {
    private Integer id;
    private String name;
    private Integer age;
    // getters and setters 以及 toString() 方法
}
```

### 使用注解的方式整合MyBatis

相比 Spring 与 MyBatis 的整合，Spring Boot 与 MyBatis 的整合会使项目开发更加简便，同时支持XML和注解两种配置方式。

根据上述基础环境搭建完成后我们继续：

**5.创建Mapper接口文件**

- 创建Mapper包，定义一个接口类，例如UserMapper
