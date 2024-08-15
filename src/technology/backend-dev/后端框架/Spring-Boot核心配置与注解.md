---
title: SpringBoot核心配置与注解
icon: code
date: 2024-08-15
category: 后端框架
tags:
  - SpringBoot
  - Web开发
cover: /assets/images/Spring-Boot原理分析.jpg
excerpt: Spring Boot是一个基于Spring框架的快速开发工具，它提供了大量的自动配置、简化的依赖管理和监控功能，使得开发者可以快速构建基于Spring的应用。
---
## 核心配置文件

`application.properties`和`application.yaml`

### 二者比较

1. **格式**:
    
    - `application.properties`使用键值对的形式，每行一个属性，键和值之间用等号`=`或冒号`:`分隔。
    - `application.yaml`使用YAML格式，支持层级结构和数据类型，如列表和对象。

2. **可读性**:
    
    - `application.yaml`由于其层级结构，可以更清晰地表示复杂的配置，对于大型配置文件来说，可读性更好。
    - `application.properties`对于简单的配置，可读性也不错，但当配置变得复杂时，可读性会降低。

3. **表达能力**:
    
    - `application.yaml`支持数组和对象的嵌套，可以更灵活地表达配置结构。
    - `application.properties`则需要使用特定的前缀来表示列表和嵌套结构，表达能力相对较弱。

4. **语法**:
    
    - `application.properties`的语法比较简单，但不支持注释中的换行符。
    - `application.yaml`支持注释，并且可以使用`#`或`//`进行单行注释，使用`#`加三个连字符`---`进行多行注释。

5. **数据类型**:
    
    - `application.yaml`可以很容易地表示不同的数据类型，如整数、浮点数、布尔值和日期。
    - `application.properties`通常将所有值视为字符串，需要显式转换为其他数据类型。

6. **配置分离**:
    
    - `application.yaml`可以很容易地通过文件分割来实现不同环境的配置分离。
    - `application.properties`通常需要为每个环境创建不同的属性文件，如`application-dev.properties`。

7. **Spring Boot支持**:
    
    - Spring Boot对这两种格式都有很好的支持，可以无缝切换。

8. **使用场景**:
    
    - 如果配置相对简单，`application.properties`可能是一个更简单的选择。
    - 对于复杂的配置，或者需要更好的结构化和可读性，`application.yaml`可能是更好的选择。

> [!tip]
> - application.properties配置文件由Spring Boot项目创建时，在resource文件夹下自动生成。
> - YAML文件格式是Spring Boot支持的一种JSON超集文件格式，相较于传统的Properties配置文件，YAML文件以数据为核心，是一种更为直观且容易被计算机识别的数据序列化格式。
> - 二者工作原理一样，但是YAML更加简洁。

## 注解

### @Component

用于将一个类标记为Spring的组件。

- 根本目的是让Spring Boot可以自动扫描到该组件，然后进行其他功能的实现

> [!tip]
> 除了@Component实现标记一个类为组件外，还可以使用@Controller、@Service、@Repository、@Configuration等注解

### @ConfigurationProperties

用于快速、方便地将配置文件中的自定义属性值批量注入某个Bean对象的多个对应的属性中。

- 用于将外部配置（比如属性文件中的配置）绑定到一个组件的属性上。它允许你将配置文件中的属性映射到组件的字段上，从而实现配置的外部化。

> [!tip]
> 使用@ConfigurationProperties批量注入属性值时，要保证配置文件中的属性与对应实体类的属性名一致，否则无法正确获取并注入属性值。

### @Value

用于读取配置文件中的属性值并逐个注入Bean对象的对应属性中。

- 用于注入字面值或对配置文件中的值进行表达式解析。它可以直接在字段上使用，Spring容器会解析这个字段的值，并将解析结果注入到相应的字段中。

::: tip @ConfigurationProperties和@Value比较

|    对比点     | @ConfigurationProperties |     @Value     |
| :--------: | :----------------------: | :------------: |
|    底层框架    |       Spring Boot        |     Spring     |
|     功能     |       批量注入配置文件中的属性       | 单个注入且可以添加对应对的值 |
|  setter方法  |            需要            |      不需要       |
|  复杂类型属性注入  |            支持            |      不支持       |
|    松散绑定    |            支持            |      不支持       |
| JSR303数据校验 |            支持            |      不支持       |
|  SpEL表达式   |           不支持            |       支持       |

:::

### @PropertySource

如果要加载自定义配置文件，可以使用@PropertySource和@Configuration注解实现。

- @PropertySource注解可以指定自定义配置文件的位置和名称
- @Configuration注解可以将实体类指定为自定义配置类

### @ImportResource

传统的Spring项目配置主要基于XML文件。Spring Boot框架在Spring 4.x基础上进行改进，默认不在使用XML文件配置项目，且XML配置文件不会加载到Spring容器中。如果希望将外部的XML文件加载到程序中，可以使用这个注解。

- 用于导入XML配置文件到Spring的注解配置中。它允许你将XML配置和基于Java的配置结合起来使用。

> [!tip]
> 在Spring Boot开发中，“约定大于配置”的思想，更推荐使用配置类的方式代替XML配置。

### @Configuration

@Configuration注解可以将实体类指定为自定义配置类

- 这个注解标记一个类作为配置类，它允许你使用Java代码来定义bean。在配置类中，你可以使用@Bean注解来声明bean，也可以使用其他注解来导入其他配置类或组件。