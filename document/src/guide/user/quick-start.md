# 快速开始

[[TOC]]

## 背景知识
minio-plus 是一个 Java 语言的 SDK ，通过 jar 包的形式发布到 Maven 中央仓库。

我们假设您已经具备已下知识：
* 熟练使用 Java 相关 IDE ，具备 Java 开发环境
* 熟练使用 Spring Boot 框架
* 熟悉 Maven，或者是 Gradle 也行

## 初始化工程

创建一个空的 Spring Boot 工程。

> [!TIP]
> 我们可以利用 [Spring Initializer](https://start.spring.io/) 来快速初始化一个 Spring Boot 工程。

## 添加依赖

引入 MinIO Plus Starter 依赖

### Spring Boot 2

```xml
<dependencys>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>minio-plus-all-springboot2-starter</artifactId>
        <version>1.0.5</version>
    </dependency>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>s3-api-minio</artifactId>
        <version>1.0.5</version>
    </dependency>
</dependencys>
```

### Spring Boot 3

```xml
<dependencys>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>minio-plus-all-springboot-starter</artifactId>
        <version>1.0.5</version>
    </dependency>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>s3-api-minio</artifactId>
        <version>1.0.5</version>
    </dependency>
</dependencys>
```

## 配置参数

在`application.yml`配置文件中，添加 MinIO Plus 相关配置项：

```yaml
##################################################################
### MinIO Plus Config
##################################################################
minioplus:
    # MinIO 部署地址
    backend: http://localhost:9000
    # 授权key
    key: minioadmin
    # 密钥
    secret: minioadmin
```

## 文件元数据读写实现

实现 MetadataRepository 接口类，举一个例子：

```java
/**
 * 文件元数据接口实现类
 *
 * @author contact@liuxp.me
 * @since 2024/05/22
 */
@Slf4j
@Service
public class MetadataRepositoryImpl extends ServiceImpl<FileMetadataInfoMapper, FileMetadataInfoEntity> implements MetadataRepository {

    @Override
    public List<FileMetadataInfoVo> list(FileMetadataInfoDTO searchDTO) {

        // 组装查询参数
        QueryWrapper<FileMetadataInfoEntity> queryWrapper = buildParams(searchDTO);

        List<FileMetadataInfoEntity> fileMetadataInfoEntityList = super.list(queryWrapper);

        List<FileMetadataInfoVo> fileMetadataInfoVoList = new ArrayList<>();

        for (FileMetadataInfoEntity fileMetadataInfoEntity : fileMetadataInfoEntityList) {
            FileMetadataInfoVo fileMetadataInfoVo = new FileMetadataInfoVo();
            BeanUtils.copyProperties(fileMetadataInfoEntity, fileMetadataInfoVo);
            fileMetadataInfoVoList.add(fileMetadataInfoVo);
        }

        return fileMetadataInfoVoList;
    }

    @Override
    public FileMetadataInfoVo one(FileMetadataInfoDTO searchDTO) {

        // 组装查询参数
        QueryWrapper<FileMetadataInfoEntity> queryWrapper = buildParams(searchDTO);
        queryWrapper.last("limit 1");

        FileMetadataInfoEntity fileMetadataInfoEntity = super.getOne(queryWrapper);

        FileMetadataInfoVo fileMetadataInfoVo = null;

        if(null!=fileMetadataInfoEntity){
            fileMetadataInfoVo = new FileMetadataInfoVo();
            BeanUtils.copyProperties(fileMetadataInfoEntity, fileMetadataInfoVo);
        }

        return fileMetadataInfoVo;
    }

    @Override
    public FileMetadataInfoVo save(FileMetadataInfoSaveDTO saveDTO) {

        FileMetadataInfoEntity fileMetadataInfoEntity = new FileMetadataInfoEntity();
        BeanUtils.copyProperties(saveDTO, fileMetadataInfoEntity);
        fileMetadataInfoEntity.setCreateTime(new Date());
        fileMetadataInfoEntity.setUpdateTime(new Date());

        boolean result = super.save(fileMetadataInfoEntity);

        FileMetadataInfoVo fileMetadataInfoVo = new FileMetadataInfoVo();
        if(result){
            BeanUtils.copyProperties(fileMetadataInfoEntity, fileMetadataInfoVo);
        }

        return fileMetadataInfoVo;
    }

    @Override
    public FileMetadataInfoVo update(FileMetadataInfoUpdateDTO updateDTO) {

        FileMetadataInfoEntity fileMetadataInfoEntity = new FileMetadataInfoEntity();
        BeanUtils.copyProperties(updateDTO, fileMetadataInfoEntity);
        fileMetadataInfoEntity.setUpdateTime(new Date());
        boolean result = super.updateById(fileMetadataInfoEntity);

        FileMetadataInfoVo fileMetadataInfoVo = new FileMetadataInfoVo();
        if(result){
            BeanUtils.copyProperties(fileMetadataInfoEntity, fileMetadataInfoVo);
        }

        return fileMetadataInfoVo;
    }

    @Override
    public Boolean remove(Long id) {
        return super.removeById(id);
    }

    private QueryWrapper<FileMetadataInfoEntity> buildParams(FileMetadataInfoDTO searchDTO){
        // 组装查询参数
        QueryWrapper<FileMetadataInfoEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq(CharSequenceUtil.isNotBlank(searchDTO.getFileKey()),"file_key",searchDTO.getFileKey());
        queryWrapper.eq(CharSequenceUtil.isNotBlank(searchDTO.getFileMd5()),"file_md5",searchDTO.getFileMd5());
        queryWrapper.eq(CharSequenceUtil.isNotBlank(searchDTO.getBucket()),"bucket",searchDTO.getBucket());
        queryWrapper.eq(null!=searchDTO.getIsPrivate(),"is_private",searchDTO.getIsPrivate());
        queryWrapper.eq(CharSequenceUtil.isNotBlank(searchDTO.getCreateUser()),"create_user",searchDTO.getCreateUser());

        return queryWrapper;
    }
}
```

## Knife4j 和 Swagger （可选）

如果项目上使用 Swagger 或者 Knife4j。在配置时，注意添加org.liuxp.minioplus.extension.controller路径。

```java{15}
/**
 * 接口文档配置
 * @author : contact@liuxp.me
 * @since 2024/6/18
 */
@Configuration
@EnableSwagger2WebMvc
public class SwaggerConfig {

    @Bean(value = "dockerBean")
    public Docket dockerBean() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("org.liuxp.minioplus.extension.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("MinIO Plus API 文档")
                .contact(new Contact("刘小平", "https://liuxp.me", "contact@liuxp.me"))
                .version("1.0.0")
                .description("MinIO-Plus 是一个 MinIO 的二次封装与增强工具，在 MinIO 的基础上只做增强，不侵入 MinIO 代码，只为简化开发、提高效率而生。成为 MinIO 在项目中落地的润滑剂。")
                .license("The Apache License, Version 2.0")
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
                .build();
    }
}

```

## 登录用户信息写入

MinIO Plus 提供的文件权限功能，依赖于用户登录信息。

需要在请求拦截器中调用UserHolder.set(userId)方法插入用户编号，游客访问时可以放入空字符串。

```java
/**
 * 登录用户拦截器
 *
 * @author contact@liuxp.me
 * @since  2024/06/11
 */
@Slf4j
@Component
public class LoginUserInterceptor implements HandlerInterceptor {

    /**
     * 处理登录用户信息
     *
     * @param request  请求
     * @param response 返回
     * @param handler  要执行的处理程序
     * @return 是否继续执行下一个拦截器
     */
    @Override
    public boolean preHandle(HttpServletRequest request, @Nonnull HttpServletResponse response, @Nonnull Object handler) {
        String userId = request.getHeader("Authorization");
        UserHolder.set(userId);
        return true;
    }

    /**
     * 清理资源
     *
     * @param request   请求
     * @param response  返回
     * @param handler   要执行的处理程序
     * @param exception 异常信息
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception exception) {
        log.debug("Project ThreadLocal 清理之前:{}", UserHolder.get());
        UserHolder.clean();
        log.debug("Project ThreadLocal 清理之之后:{}", UserHolder.get());
    }

}

```

将`LoginUserInterceptor`添加到拦截器队列中。

```java
/**
 * SpringMVC配置
 * @author contact@liuxp.me
 * @since 2024/06/11
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Resource
    private LoginUserInterceptor loginUserInterceptor;

    /**
     * 前置拦截器
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 登录用户
        registry.addInterceptor(loginUserInterceptor).addPathPatterns("/storage/**");
    }
}
```

## 示例代码

> [!TIP]
> 可以查看示例项目仓库 [minio-plus-demo](https://gitee.com/lxp135/minio-plus-demo) 
> 其中的`minio-plus-application-springboot2`和`minio-plus-application-springboot3`工程。


## 使用 minio-plus-core-springboot-starter

另外，除了使用`minio-plus-all-springboot-starter`，也可以使用`minio-plus-core-springboot-starter`。

`minio-plus-core-springboot-starter` 中仅包含 Service 层接口，不再包含 Controller ，以便于希望自己编写 Controller 的同学使用。

依赖应用如下所示：

```xml
<dependencys>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>minio-plus-core-springboot-starter</artifactId>
        <version>1.0.5</version>
    </dependency>
    <dependency>
        <groupId>me.liuxp</groupId>
        <artifactId>s3-api-minio</artifactId>
        <version>1.0.5</version>
    </dependency>
</dependencys>
```

配置文件与使用 `minio-plus-all-springboot-starter` 时相同。

> [!IMPORTANT]
> 在使用 `minio-plus-core-spring-boot-starter` 时，Swagger 和 登录用户信息写入 两个步骤不再必要。 

> [!TIP]
> > 可以查看示例项目仓库 [minio-plus-demo](https://gitee.com/lxp135/minio-plus-demo) ，其中的`minio-plus-application-schedule`工程。
> 这是一个写好的，使用了`minio-plus-core-springboot2-starter`和MySQL的例子。

## 使用
### StorageService 接口

StorageService 是 MinIO-Plus 提供的核心服务接口，封装了文件存储的主要操作：

```java
public interface StorageService {
    // 文件分片
    FilePreShardingVo sharding(long fileSize);
    
    // 上传初始化
    FileCheckResultVo init(String fileMd5, String fullFileName, long fileSize, Boolean isPrivate, String userId);
    
    // 完成上传
    CompleteResultVo complete(String fileKey, List<String> partMd5List, String userId);
    
    // 文件下载
    String download(String fileKey, String userId);
    
    // 图片处理
    String image(String fileKey, String userId);
    String preview(String fileKey, String userId);
    
    // 文件管理
    FileMetadataInfoVo one(String key);
    List<FileMetadataInfoVo> list(FileMetadataInfoDTO fileMetadataInfo);
    
    // 文件创建
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, byte[] fileBytes);
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, InputStream inputStream);
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, String url);
    
    // 大文件处理
    FileMetadataInfoVo createBigFile(String fullFileName, String md5, long fileSize, Boolean isPrivate, String userId, InputStream inputStream);
    
    // 文件读取和删除
    Pair<FileMetadataInfoVo,byte[]> read(String fileKey);
    Boolean remove(String fileKey);
}
```

## 最佳实践

### 大文件上传

对于大文件上传，建议前端使用分片上传流程：

1. 使用 init 方法初始化上传任务
2. 上传各个分片
3. 调用 complete 方法完成上传

### 文件下载和预览

- 普通文件下载：使用 download 方法获取下载链接
- 图片文件预览：使用 image 方法获取原图，preview 方法获取缩略图

### 文件管理

- 使用 one 和 list 方法进行文件元数据查询
- 使用 createFile 方法进行文件上传
- 使用 read 方法读取文件内容
- 使用 remove 方法删除文件

## 注意事项

- 建议大文件使用分片上传方式
- 文件上传建议使用客户端直传方式，减轻服务器压力
- 注意正确配置文件访问权限（isPrivate参数）
- 合理设置上传和下载链接的过期时间