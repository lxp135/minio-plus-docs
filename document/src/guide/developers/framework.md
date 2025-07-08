# MinIO-Plus 代码结构文档

本文档详细介绍 MinIO-Plus 项目的代码结构，包括模块划分、包组织和各模块的职责。

## 项目概览

MinIO-Plus 采用多模块 Maven 项目结构，遵循模块化设计原则，将不同功能拆分到独立的模块中，便于维护和扩展。

### 项目基本信息

- **Group ID**: `me.liuxp`
- **Artifact ID**: `minio-plus-parent`
- **版本**: `1.0.5`
- **Java 版本**: JDK 8+
- **构建工具**: Maven
- **包命名规范**: `org.liuxp.minioplus.*`

## 模块架构图

```
minio-plus-parent
├── minio-plus-common          # 公共模块
├── minio-plus-api             # API 接口定义
├── minio-plus-core            # 核心实现
├── minio-plus-extension       # 扩展功能
├── minio-plus-s3-api          # S3 API 适配
│   ├── s3-api-definition      # S3 API 定义
│   └── s3-api-minio          # MinIO S3 实现
└── minio-plus-spring-boot-starter  # Spring Boot 集成
    ├── minio-plus-core-springboot-starter     # 核心功能 SpringBoot3 Starter
    ├── minio-plus-core-springboot2-starter    # 核心功能 SpringBoot2 Starter
    ├── minio-plus-all-springboot-starter      # 完整功能 SpringBoot3 Starter
    └── minio-plus-all-springboot2-starter     # 完整功能 SpringBoot2 Starter
```

## 模块详细说明

### 1. minio-plus-common (公共模块)

**职责**: 提供项目中通用的基础组件和工具类。

**包结构**:
```
org.liuxp.minioplus.common
├── config/          # 配置相关类
├── enums/           # 枚举定义
└── exception/       # 异常定义
```

**主要功能**:
- 通用配置类
- 业务枚举定义
- 自定义异常类
- 工具类和常量定义

**依赖关系**: 无外部模块依赖，被其他模块依赖

### 2. minio-plus-api (API 接口定义)

**职责**: 定义对外提供的核心 API 接口和数据模型。

**包结构**:
```
org.liuxp.minioplus.api
├── StorageService.java    # 存储服务接口
└── model/                 # 数据模型
```

**主要功能**:
- 存储服务接口定义
- 请求响应模型
- DTO 对象定义
- 接口规范约定

**依赖关系**: 依赖 `minio-plus-common`

### 3. minio-plus-core (核心实现)

**职责**: 实现核心业务逻辑和存储功能。

**包结构**:
```
org.liuxp.minioplus.core
├── common/          # 核心公共组件
├── engine/          # 存储引擎实现
├── repository/      # 数据访问层
└── service/         # 业务服务层
```

**主要功能**:
- 文件上传下载核心逻辑
- 分片上传实现
- 断点续传功能
- 文件秒传机制
- 缩略图生成
- 存储策略管理

**依赖关系**:
- 依赖 `minio-plus-common`
- 依赖 `minio-plus-api`
- 依赖 `s3-api-definition`

### 4. minio-plus-extension (扩展功能)

**职责**: 提供额外的扩展功能和增强特性。

**包结构**:
```
org.liuxp.minioplus.extension
├── context/         # 上下文管理
├── controller/      # 控制器扩展
└── dto/            # 扩展数据传输对象
```

**主要功能**:
- Web 控制器扩展
- 上下文管理器
- 高级功能实现
- 第三方集成支持

**依赖关系**: 依赖核心模块

### 5. minio-plus-s3-api (S3 API 适配)

**职责**: 提供 S3 协议的抽象和具体实现。

#### 5.1 s3-api-definition (S3 API 定义)

**包结构**:
```
org.liuxp.minioplus.s3.def
```

**主要功能**:
- S3 API 接口定义
- S3 协议抽象
- 通用 S3 操作规范

#### 5.2 s3-api-minio (MinIO S3 实现)

**包结构**:
```
org.liuxp.minioplus.s3.official
```

**主要功能**:
- MinIO 官方 SDK 适配
- S3 协议具体实现
- MinIO 特性支持

### 6. minio-plus-spring-boot-starter (Spring Boot 集成)

**职责**: 提供 Spring Boot 自动配置和集成支持。

#### 6.1 模块说明

| 模块名称 | 支持版本 | 功能范围 | 说明 |
|---------|---------|---------|------|
| `minio-plus-core-springboot-starter` | Spring Boot 3.x | 核心功能 | 仅包含核心存储功能 |
| `minio-plus-core-springboot2-starter` | Spring Boot 2.x | 核心功能 | Spring Boot 2.x 兼容版本 |
| `minio-plus-all-springboot-starter` | Spring Boot 3.x | 完整功能 | 包含所有功能模块 |
| `minio-plus-all-springboot2-starter` | Spring Boot 2.x | 完整功能 | Spring Boot 2.x 完整版本 |

#### 6.2 包结构

```
org.liuxp.minioplus.common.config
```

**主要功能**:
- 自动配置类
- Bean 注册
- 配置属性绑定
- 条件装配

## 包命名规范

### 基础包结构

所有模块都遵循统一的包命名规范：

```
org.liuxp.minioplus.{module}
```

其中 `{module}` 为具体的模块名称。

### 详细包说明

| 包名 | 用途 | 示例 |
|------|------|------|
| `*.common` | 通用组件 | 工具类、常量、基础类 |
| `*.config` | 配置相关 | 配置类、属性类 |
| `*.enums` | 枚举定义 | 业务枚举、状态枚举 |
| `*.exception` | 异常定义 | 自定义异常类 |
| `*.model` | 数据模型 | DTO、VO、Entity |
| `*.api` | 接口定义 | Service 接口 |
| `*.service` | 服务实现 | 业务逻辑实现 |
| `*.repository` | 数据访问 | DAO、Repository |
| `*.engine` | 引擎实现 | 核心算法、处理引擎 |
| `*.controller` | 控制器 | Web 控制器 |
| `*.dto` | 数据传输 | 请求响应对象 |
| `*.context` | 上下文 | 上下文管理器 |
| `*.def` | 定义抽象 | 接口定义、抽象类 |
| `*.official` | 官方实现 | 官方 SDK 适配 |

## 模块依赖关系

### 依赖层次图

```
┌───────────────────────────────────────────┐
│           Spring Boot Starters            │
│  ┌─────────────────────────────────────┐  │
│  │        minio-plus-extension         │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────┐
│            minio-plus-core                │
└───────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────┐
│  ┌─────────────────┐ ┌──────────────────┐ │
│  │ minio-plus-api  │ │ s3-api-definition│ │
│  └─────────────────┘ └──────────────────┘ │
└───────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────┐
│           minio-plus-common               │
└───────────────────────────────────────────┘
```

### 依赖规则

1. **向上依赖**: 低层模块可以被高层模块依赖
2. **禁止循环依赖**: 任何模块之间不允许出现循环依赖
3. **最小依赖原则**: 每个模块只依赖必要的模块
4. **接口隔离**: 通过接口定义模块间的交互

### 具体依赖关系

| 模块 | 直接依赖 | 说明 |
|------|----------|------|
| `minio-plus-common` | 无 | 基础模块，不依赖其他业务模块 |
| `minio-plus-api` | `minio-plus-common` | 依赖公共组件 |
| `s3-api-definition` | `minio-plus-common` | S3 接口定义 |
| `s3-api-minio` | `s3-api-definition` | S3 具体实现 |
| `minio-plus-core` | `minio-plus-common`<br/>`minio-plus-api`<br/>`s3-api-definition` | 核心实现模块 |
| `minio-plus-extension` | `minio-plus-core` | 扩展功能模块 |
| `*-springboot-starter` | 根据功能范围依赖相应模块 | Spring Boot 集成 |

## 代码组织原则

### 1. 单一职责原则

每个模块都有明确的职责边界：
- **common**: 通用基础组件
- **api**: 接口定义
- **core**: 核心业务实现
- **extension**: 扩展功能
- **s3-api**: S3 协议适配
- **starter**: Spring Boot 集成

### 2. 开闭原则

- 通过接口定义实现扩展性
- 核心功能稳定，扩展功能可插拔
- 支持自定义实现替换默认实现

### 3. 依赖倒置原则

- 高层模块不依赖低层模块的具体实现
- 通过抽象接口定义依赖关系
- 支持依赖注入和控制反转

### 4. 接口隔离原则

- 接口定义精简，职责单一
- 避免胖接口，按功能拆分接口
- 客户端只依赖需要的接口

## 扩展指南

### 添加新功能模块

1. **创建新模块**
   ```xml
   <module>minio-plus-new-feature</module>
   ```

2. **定义包结构**
   ```
   org.liuxp.minioplus.newfeature
   ├── config/
   ├── service/
   └── model/
   ```

3. **添加依赖关系**
   ```xml
   <dependency>
       <groupId>me.liuxp</groupId>
       <artifactId>minio-plus-core</artifactId>
   </dependency>
   ```

### 自定义 S3 实现

1. **实现 S3 接口**
   ```java
   public class CustomS3Service implements S3Service {
       // 自定义实现
   }
   ```

2. **创建适配模块**
   ```
   s3-api-custom/
   └── org.liuxp.minioplus.s3.custom/
   ```

3. **注册实现**
   ```java
   @Configuration
   public class CustomS3Configuration {
       @Bean
       public S3Service customS3Service() {
           return new CustomS3Service();
       }
   }
   ```

### Spring Boot Starter 扩展

1. **创建自动配置类**
   ```java
   @Configuration
   @EnableConfigurationProperties(CustomProperties.class)
   public class CustomAutoConfiguration {
       // 自动配置逻辑
   }
   ```

2. **添加配置文件**
   ```
   META-INF/spring.factories
   META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
   ```

## 常见问题

### Q: 如何选择合适的 Starter？

**A**: 根据项目需求选择：
- 只需要核心存储功能：选择 `core-springboot-starter`
- 需要完整功能：选择 `all-springboot-starter`
- Spring Boot 2.x 项目：选择对应的 `springboot2-starter`

### Q: 如何自定义存储实现？

**A**: 参考 *自定义 S3 实现* 章节

### Q: 模块间如何通信？

**A**: 
- 通过接口定义交互规范
- 使用依赖注入管理对象
- 避免直接依赖具体实现类

---

> 💡 **开发提示**：
> - 新增功能时优先考虑在 `extension` 模块中实现
> - 修改核心功能时要考虑向后兼容性
> - 添加新依赖时要评估对项目整体的影响
> - 定期重构代码，保持架构清晰