# 快速开始

[[TOC]]

## Background Knowledge
minio-plus is an SDK in Java, which is published to the Maven Central Repository in the form of a jar package.

We assume you have the following knowledge:
* Proficient in using Java-related IDEs, with a Java development environment
* Proficient in using the Spring Boot framework
* Familiar with Maven, or Gradle is also acceptable

## Initialize the Project

Create an empty Spring Boot project.

> [!TIP]
> We can use [Spring Initializer](https://start.spring.io/) to quickly initialize a Spring Boot project.

## Add Dependencies

Introduce MinIO Plus Starter dependency

### Spring Boot 2

```xml
        <dependency>
            <groupId>me.liuxp</groupId>
            <artifactId>minio-plus-all-spring-boot-starter</artifactId>
            <version>0.1.3</version>
        </dependency>
```

### Spring Boot 3

Not yet released, will be supported in the future

## Configure

In the `application.yml` configuration file, add MinIO Plus related configuration items:

```yaml
##################################################################
### MinIO Plus Config
##################################################################
minioplus:
    # MinIO deployment address
    backend: http://localhost:9000
    # Authorization key
    key: minioadmin
    # Secret key
    secret: minioadmin
```

## Implement File Metadata Read and Write

Implement the MetadataRepository interface class, here is an example:

```java
/**
 * file metadata interface implement class
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

        FileMetadataInfoVo fileMetadataInfoVo = new FileMetadataInfoVo();

        if(null!=fileMetadataInfoEntity){
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

## Knife4j and Swagger (Optional)

If the project uses Swagger or Knife4j, when configuring, remember to add the `org.liuxp.minioplus.extension.controller` path.

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

## Writing Login User Information

The file permission functionality provided by MinIO Plus relies on user login information.

You need to call the `UserHolder.set(userId)` method in the request interceptor to insert the user ID. For guest access, you can insert an empty string.

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

Add the `LoginUserInterceptor` to the interceptor queue.

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

## Example Code

> [!TIP]
> You can check the project repository at [/minio-plus-application/minio-plus-application-mysql](https://gitee.com/lxp135/minio-plus/tree/main/minio-plus-application/minio-plus-application-mysql).
> This is a well-written example that uses `minio-plus-all-spring-boot-starter` and MySQL.

## Using minio-plus-core-spring-boot-starter

In addition to using `minio-plus-all-spring-boot-starter`, you can also use `minio-plus-core-spring-boot-starter`.

`minio-plus-core-spring-boot-starter` only includes the Service layer interfaces and no longer includes the Controller, making it convenient for those who wish to write their own Controller.

The dependency application is as follows:

```xml
        <dependency>
            <groupId>me.liuxp</groupId>
            <artifactId>minio-plus-core-spring-boot-starter</artifactId>
            <version>0.1.3</version>
        </dependency>
```

The configuration file is the same as when using `minio-plus-all-spring-boot-starter`.

> [!IMPORTANT]
> When using `minio-plus-core-spring-boot-starter`, the two steps of configuring Swagger and writing login user information are no longer necessary.

> [!TIP]
> You can check the project repository at [/minio-plus-application/minio-plus-application-schedule](https://gitee.com/lxp135/minio-plus/tree/main/minio-plus-application/minio-plus-application-schedule).
> This is a well-written example that uses `minio-plus-core-spring-boot-starter` and MySQL.