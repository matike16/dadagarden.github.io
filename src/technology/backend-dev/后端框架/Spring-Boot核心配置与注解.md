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
order: "2"
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

::: important 通俗解释
举个例子，假设你有一个配置文件application.properties，里面有这样的配置：

```application.properties
app.name=MyApp
app.version=1.0.0
```

你可以创建一个类，使用@ConfigurationProperties注解来自动将这些配置值注入到类的属性中：

```java
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="app")
public class AppConfig {
    private String name;
    private String version;

    // getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
```

在这个例子中，`@ConfigurationProperties(prefix="app")`告诉Spring Boot，去查找所有以”app.“为前缀的属性，并把它们注入到AppConfig类的相应属性中。这样，当你的应用程序启动时，AppConfig类的name和version属性就会自动被设置为”MyApp“和”1.0.0“。

简而言之，`@ConfigurationProperties`注解就像是一个快捷方式，让你能够轻松地将配置文件中的属性值映射到java对象中，而不需要手动编写代码来处理每个属性。
:::
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

::: important 简而言之
简单来说，@PropertySource注解是一个方便的工具，它允许你告诉Spring框架除了默认的配置文件外，还应该加载哪些额外的配置文件。
:::
### @ImportResource

传统的Spring项目配置主要基于XML文件。Spring Boot框架在Spring 4.x基础上进行改进，默认不再使用XML文件配置项目，且XML配置文件不会加载到Spring容器中。如果希望将外部的XML文件加载到程序中，可以使用这个注解。

- 用于导入XML配置文件到Spring的注解配置中。它允许你将XML配置和基于Java的配置结合起来使用。

> [!tip]
> 在Spring Boot开发中，“约定大于配置”的思想，更推荐使用配置类的方式代替XML配置。

### @Configuration

@Configuration注解可以将实体类指定为自定义配置类

- 这个注解标记一个类作为配置类，它允许你使用Java代码来定义bean。在配置类中，你可以使用@Bean注解来声明bean，也可以使用其他注解来导入其他配置类或组件。

### Profile多环境配置

#### 使用Profile文件进行多环境配置

对应的配置文件：

- application-dev.properties：开发环境配置文件
- application-test.properties：测试环境配置文件
- application-prod.properties：生产环境配置文件

控制台输入如下命令激活对应的环境：

```cmd
java -jar xxx.jar --spring.profiles.active=dev
```

也可以在全局中配置激活对应的环境：

```cmd
spring.profiles.active=dev
```

#### 使用@Profile注解进行多环境配置

@Profile注解用于定义一个Bean的激活条件。当Spring容器启动时，它会检查@Profile注解指定的条件，如果条件满足，那么带有该注解的Bean就会注册到Spring容器中。

@Profile注解的基本用法如下：

```java
@Configuration
@Profile("dev")
public class DevConfig {
	// 配置只有在开发环境中才会使用的Bean
}
```

上面例子中，只有当全局配置`spring.profiles.active`指定为dev时，DevConfig类才会被加载。

@Profile也可以用于指定多个激活配置，利用数组：

```java
@Configuration
@Profile({"dev", "test"})
public class DevAndTestConfig {
	// 配置在开发和测试环境都可以使用的Bean
}
```

@Profile注解是Spring框架中实现条件化Bean注册的强大工具，它允许开发者根据不同的运行环境或条件定制应用程序的行为。

> [!tip]
> 同时使用Profile文件和@Profile注解来进行多环境配置是可以的，二者之间不会相互干扰。

## 随机值设置及参数间引用

在Spring Boot配置文件中，可以使用随机值和参数见引用对属性值进行设置。

### 随机值设置

随机值设置使用到了Spring Boot内嵌的RandomValuePropertySource类，对一些隐秘属性值或者测试用例属性值进行随机值注入。

格式：
- `${random.xx}`
- xx表示需要指定生成的随机数类型和范围。

示例：

```application.properties
//生成随机字符串
my.string=${random.value}

//生成随机正数
my.number=${random.int}

//生成随机long类型数
my.number=${random.long}

//生成随机UUID类型数
my.number=${random.uuid}

//配置小于10的随机整数
my.number.less.than.ten=${random.int(10)}

//配置范围在[1024,65536]之间的随机整数
my.number.in.range=${random.int[1024,65536]}
```

### 参数间引用

在配置文件中，只需要对其中一处属性进行预先配置，其他地方都可以进行引用，节约了后续多处修改的麻烦。

格式：
- `${xx}`
- xx表示先前在配置文件中已经配置过的属性名。

示例：

```application.properties
app.name=MyApp
app.description=${app.name} is a Spring Boot application
```

