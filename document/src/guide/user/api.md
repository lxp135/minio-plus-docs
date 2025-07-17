# API接口

MinIO Plus 提供了对象存储操作接口定义和实现。

## 1. StorageService 接口

StorageService 是 MinIO-Plus 提供的核心服务接口，封装了文件存储的主要操作。

### 1.1 文件上传任务初始化

上传任务初始化，支持秒传、分块上传和断点续传。

```java
    /**
     * 上传任务初始化
     * @param fileMd5 文件md5
     * @param fullFileName 文件名（含扩展名）
     * @param fileSize 文件长度
     * @param isPrivate 是否私有 false:否 true:是
     * @param userId  用户编号
     * @return {@link FileCheckResultVo}
     */
    FileCheckResultVo init(String fileMd5, String fullFileName, long fileSize, Boolean isPrivate, String userId);
```

**参数说明：**
- `fileMd5`：文件MD5值
- `fullFileName`：完整文件名（含扩展名）
- `fileSize`：文件大小（字节）
- `isPrivate`：是否私有文件（true：私有，false：公开）
- `userId`：用户编号

**返回值：** `FileCheckResultVo`
- `fileKey`：文件唯一标识
- `fileMd5`：文件MD5
- `fileName`：文件名
- `fileMimeType`：MIME类型
- `fileSuffix`：文件后缀
- `uploadTaskId`：上传任务ID
- `partList`：需要上传的分块列表

**使用示例：**
```java
FileCheckResultVo result = storageService.init(
    "d41d8cd98f00b204e9800998ecf8427e",
    "example.pdf",
    1024000L,
    false,
    "user123"
);
```

### 上传完成

完成分块文件上传，合并所有分块。

```java
    /**
     * 合并已分块的文件
     * @param fileKey 文件关键
     * @param partMd5List 文件分块md5列表
     * @param userId  用户编号
     * @return {@link CompleteResultVo}
     */
    CompleteResultVo complete(String fileKey, List<String> partMd5List,String userId);
```

**参数说明：**
- `fileKey`：文件KEY
- `partMd5List`：各分块的MD5列表
- `userId`：用户ID

**返回值：** `CompleteResultVo`
- `isComplete`：是否完成
- `uploadTaskId`：上传任务编号
- `partList`：需要补传的分块信息

### 取得文件下载地址

获取文件下载地址。

```java
    /**
     * 取得文件下载地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 文件下载地址
     */
    String download(String fileKey, String userId);
```

**参数说明：**
- `fileKey`：文件KEY
- `userId`：用户ID

**返回值：** 文件下载URL（String）

### 3.1.4 取得原图地址

获取图片原图地址。

```java
    /**
     * 取得原图地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 原图地址
     */
    String image(String fileKey, String userId);
```

**参数说明：**
- `fileKey`：文件KEY
- `userId`：用户ID

**返回值：** 原图URL（String）

### 取得缩略图地址

获取文件预览地址。

```java
    /**
     * 取得缩略图地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 缩略图地址
     */
    String preview(String fileKey, String userId);
```

**参数说明：**
- `fileKey`：文件KEY
- `userId`：用户ID

**返回值：** 预览URL（String）

### 查询文件元数据

根据文件KEY查询单个文件元数据。

```java
    /**
     * 查询元数据信息
     * @param key 文件key
     * @return 文件元数据信息
     */
    FileMetadataInfoVo one(String key);
```

**参数说明：**
- `key`：文件KEY

**返回值：** `FileMetadataInfoVo`

### 列表查询文件元数据

根据条件查询文件元数据列表。

```java
    /**
     * 查询元数据信息
     * @param fileMetadataInfo 查询入参
     * @return 文件元数据信息集合
     */
    List<FileMetadataInfoVo> list(FileMetadataInfoDTO fileMetadataInfo);
```

**参数说明：**
- `fileMetadataInfo`：查询条件DTO

**返回值：** `List<FileMetadataInfoVo>`

### 从字节数组创建文件

```java
    /**
     * 创建文件
     * 尽量不要用本方法处理大文件，大文件建议使用前端直传
     * @param fullFileName 文件名（含扩展名）
     * @param isPrivate 是否私有 false:否 true:是
     * @param userId  用户编号
     * @param fileBytes 文件字节流
     * @return 文件元数据信息
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, byte[] fileBytes);
```

### 从输入流创建文件

```java
    /**
     * 创建文件
     * 尽量不要用本方法处理大文件，大文件建议使用前端直传
     * @param fullFileName 文件名（含扩展名）
     * @param isPrivate 是否私有 false:否 true:是
     * @param userId  用户编号
     * @param inputStream 文件输入字节流
     * @return 文件元数据信息
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, InputStream inputStream);
```

### 从外部url创建文件

```java
    /**
     * 创建文件
     * 尽量不要用本方法处理大文件，大文件建议使用前端直传
     * @param fullFileName 文件名（含扩展名）
     * @param isPrivate 是否私有 false:否 true:是
     * @param userId  用户编号
     * @param url 文件地址
     * @return 文件元数据信息
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, String url);
```

### 从输入流创建文件，支持大文件

```java
    /**
     * 创建大文件
     * 大文件建议使用本方法
     * @param fullFileName 文件名（含扩展名）
     * @param md5 文件名MD5
     * @param fileSize 文件名大小
     * @param isPrivate 是否私有 false:否 true:是
     * @param userId  用户编号
     * @param inputStream 文件输入字节流
     * @return 文件元数据信息
     */
    FileMetadataInfoVo createBigFile(String fullFileName, String md5, long fileSize,Boolean isPrivate, String userId, InputStream inputStream);
```

### 读取文件

```java
    /**
     * 根据文件key读取文件字节流
     * @param fileKey 文件key
     * @return 文件字节流
     */
    Pair<FileMetadataInfoVo,byte[]> read(String fileKey);
```

**返回值：** `Pair<FileMetadataInfoVo, byte[]>`
- Left：文件元数据
- Right：文件字节数组

### 删除文件

```java
    /**
     * 根据文件key删除文件
     * @param fileKey 文件key
     * @return 是否成功
     */
    Boolean remove(String fileKey);
```

**返回值：** Boolean（是否成功）

### 相关对象定义

```java
/**
 * 文件检查结果VO
 *
 * @author contact@liuxp.me
 * @since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("文件检查结果")
public class FileCheckResultVo {
    /**
     * 主键
     */
    @ApiModelProperty("主键")
    private Long id;
    /**
     * 文件KEY
     */
    @ApiModelProperty("文件KEY")
    private String fileKey;
    /**
     * 文件md5
     */
    @ApiModelProperty("文件md5")
    private String fileMd5;
    /**
     * 文件名
     */
    @ApiModelProperty("文件名")
    private String fileName;

    /**
     * MIME类型
     */
    @ApiModelProperty("MIME类型")
    private String fileMimeType;
    /**
     * 文件后缀
     */
    @ApiModelProperty("文件后缀")
    private String fileSuffix;
    /**
     * 文件长度
     */
    @ApiModelProperty("文件长度")
    private Long fileSize;
    /**
     * 是否秒传
     */
    @ApiModelProperty("是否秒传")
    private Boolean isDone;
    /**
     * 分块数量
     */
    @ApiModelProperty("分块数量")
    private Integer partCount;

    /**
     * 分块大小
     */
    @ApiModelProperty("分块大小")
    private Integer partSize;

    /**
     * 分块信息
     */
    @ApiModelProperty("分块信息")
    private List<Part> partList = new ArrayList<>();

    @Getter
    @Setter
    public static class Part {
        /**
         * minio的上传id
         */
        @ApiModelProperty("minio的上传id")
        private String uploadId;
        /**
         * 上传地址
         */
        @ApiModelProperty("上传地址")
        private String url;
        /**
         * 开始位置
         */
        @ApiModelProperty("开始位置")
        private Long startPosition;
        /**
         * 结束位置
         */
        @ApiModelProperty("结束位置")
        private Long endPosition;

    }

}
```

```java
/**
 * 文件完整性校验结果VO
 *
 * @author contact@liuxp.me
 * @since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("文件完整性校验结果")
public class CompleteResultVo {

    @ApiModelProperty("是否完成")
    private Boolean isComplete;

    @ApiModelProperty("上传任务编号")
    private String uploadTaskId;

    @ApiModelProperty("补传的分块信息")
    private List<FileCheckResultVo.Part> partList = new ArrayList<>();

}
```

```java
/**
 * 文件元数据信息VO
 *
 * @author contact@liuxp.me
 * @since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("文件元数据信息")
public class FileMetadataInfoVo {

    @ApiModelProperty("主键")
    private Long id;

    @ApiModelProperty("文件KEY")
    private String fileKey;

    @ApiModelProperty("文件md5")
    private String fileMd5;

    @ApiModelProperty("文件名")
    private String fileName;

    @ApiModelProperty("MIME类型")
    private String fileMimeType;

    @ApiModelProperty("文件后缀")
    private String fileSuffix;

    @ApiModelProperty("文件长度")
    private Long fileSize;

    @ApiModelProperty("存储引擎")
    private String storageEngine;

    @ApiModelProperty("存储桶")
    private String storageBucket;

    @ApiModelProperty("存储路径")
    private String storagePath;

    @ApiModelProperty("minio切片任务id")
    private String uploadTaskId;

    @ApiModelProperty("状态 0:未完成 1:已完成")
    private Boolean isFinished;

    @ApiModelProperty("是否分块 0:否 1:是")
    private Boolean isPart;

    @ApiModelProperty("分块数量")
    private Integer partNumber;

    @ApiModelProperty("预览图 0:无 1:有")
    private Boolean isPreview;

    @ApiModelProperty("是否私有 0:否 1:是")
    private Boolean isPrivate;

    @ApiModelProperty("创建人")
    private String createUser;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("修改人")
    private String updateUser;

    @ApiModelProperty("修改时间")
    private Date updateTime;

}
```


## 2. Controller 层 RESTful API 接口

MinIO-Plus 提供了完整的 RESTful API 接口，通过 `StorageController` 类实现，继承自 `StorageWebAPI` 接口。所有接口都基于 `/storage` 路径前缀。

> 注意，RESTful 接口仅在引用了 `minio-plus-all-springboot2-starter` 或 `minio-plus-all-springboot-starter` 时存在。

### 2.1 接口概览

| 接口路径 | HTTP方法 | 功能描述 | 接口类型 |
|---------|----------|----------|----------|
| `/storage/upload/sharding` | POST | 文件预分片（非必须） | JSON API |
| `/storage/upload/init` | POST | 上传任务初始化 | JSON API |
| `/storage/upload/complete/{fileKey}` | POST | 完成上传 | JSON API |
| `/storage/download/{fileKey}` | GET | 文件下载 | 重定向 |
| `/storage/image/{fileKey}` | GET | 图片原图预览 | 重定向 |
| `/storage/preview/{fileKey}` | GET | 文件预览/缩略图 | 重定向 |
| `/storage/icon/{fileType}` | GET | 文件类型图标 | 二进制流 |

### 2.2 文件上传接口

#### POST /storage/upload/sharding

**接口描述：** 文件预分片接口，用于大文件上传前的分片计算，该接口非必须。

**Controller方法：** `StorageController.sharding(PreShardingDTO)`

**请求头：**
```
Content-Type: application/json
```

**请求参数：**
```json
{
  "fileSize": 104857600
}
```

**参数说明：**
- `fileSize` (Long, 必填)：文件大小，单位字节

**响应格式：**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "fileSize": 104857600,
    "partCount": 20,
    "partSize": 5242880,
    "partList": [
      {
        "partNumber": 1,
        "uploadUrl": "http://minio:9000/bucket/upload-url-1",
        "size": 5242880
      }
    ]
  }
}
```

**实现逻辑：**
1. 接收文件大小参数
2. 调用 `StorageService.sharding()` 方法
3. 返回分片信息，包括分片数量、大小和上传URL

#### POST /storage/upload/init

**接口描述：** 上传任务初始化接口，支持秒传、分块上传和断点续传。

**Controller方法：** `StorageController.init(FileCheckDTO)`

**请求头：**
```
Content-Type: application/json
```

**请求参数：**
```json
{
  "fileMd5": "d41d8cd98f00b204e9800998ecf8427e",
  "fullFileName": "example.pdf",
  "fileSize": 1024000,
  "isPrivate": false
}
```

**参数说明：**
- `fileMd5` (String, 必填)：文件MD5值
- `fullFileName` (String, 必填)：完整文件名（含扩展名）
- `fileSize` (Long, 必填)：文件大小，单位字节
- `isPrivate` (Boolean, 可选)：是否私有文件，默认false

**响应格式：**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "fileKey": "file-key-123",
    "fileMd5": "d41d8cd98f00b204e9800998ecf8427e",
    "fileName": "example.pdf",
    "fileMimeType": "application/pdf",
    "fileSuffix": ".pdf",
    "uploadTaskId": "upload-task-456",
    "partList": [],
    "isFinished": true
  }
}
```

**实现逻辑：**
1. 从 `UserHolder` 获取当前用户ID
2. 调用 `StorageService.init()` 方法进行文件检查
3. 返回文件检查结果，包括是否需要上传、分片信息等

#### POST /storage/upload/complete/{fileKey}

**接口描述：** 文件上传完成接口，用于合并分片文件。

**Controller方法：** `StorageController.complete(String, FileCompleteDTO)`

**请求头：**
```
Content-Type: application/json
```

**路径参数：**
- `fileKey` (String)：文件唯一标识

**请求参数：**
```json
{
  "partMd5List": [
    "part1-md5-hash",
    "part2-md5-hash",
    "part3-md5-hash"
  ]
}
```

**参数说明：**
- `partMd5List` (List<String>, 必填)：分片MD5列表

**响应格式：**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "isComplete": true,
    "uploadTaskId": "upload-task-456",
    "partList": []
  }
}
```

**实现逻辑：**
1. 从路径获取fileKey参数
2. 从 `UserHolder` 获取当前用户ID
3. 调用 `StorageService.complete()` 方法合并文件
4. 返回合并结果

### 2.3 文件访问接口

#### GET /storage/download/{fileKey}

**接口描述：** 文件下载接口，返回重定向到实际下载URL。

**Controller方法：** `StorageController.download(String)`

**路径参数：**
- `fileKey` (String)：文件唯一标识

**响应类型：** HTTP 302 重定向

**响应示例：**
```
HTTP/1.1 302 Found
Location: http://minio:9000/bucket/file-path?X-Amz-Expires=1800
```

**实现逻辑：**
1. 从 `UserHolder` 获取当前用户ID
2. 调用 `StorageService.download()` 获取下载URL
3. 返回重定向响应

#### GET /storage/image/{fileKey}

**接口描述：** 图片原图预览接口，返回重定向到原图URL。

**Controller方法：** `StorageController.previewOriginal(String)`

**路径参数：**
- `fileKey` (String)：文件唯一标识

**响应类型：** HTTP 302 重定向

**响应示例：**
```
HTTP/1.1 302 Found
Location: http://minio:9000/bucket/image-path?X-Amz-Expires=1800
```

**实现逻辑：**
1. 从 `UserHolder` 获取当前用户ID
2. 调用 `StorageService.image()` 获取原图URL
3. 返回重定向响应

#### GET /storage/preview/{fileKey}

**接口描述：** 文件预览接口，图片返回缩略图，非图片返回文件类型图标。

**Controller方法：** `StorageController.previewMedium(String)`

**路径参数：**
- `fileKey` (String)：文件唯一标识

**响应类型：** HTTP 302 重定向

**响应示例：**
```
HTTP/1.1 302 Found
Location: http://minio:9000/bucket/thumbnail-path?X-Amz-Expires=1800
# 或者
Location: /storage/icon/pdf
```

**实现逻辑：**
1. 从 `UserHolder` 获取当前用户ID
2. 调用 `StorageService.preview()` 获取预览URL
3. 如果返回值长度小于10，说明是文件类型，重定向到图标接口
4. 否则重定向到实际预览URL

#### GET /storage/icon/{fileType}

**接口描述：** 获取文件类型图标，直接返回图标的二进制流。

**Controller方法：** `StorageController.icon(String)`

**路径参数：**
- `fileType` (String)：文件扩展名（如：pdf, doc, jpg等）

**响应类型：** 二进制流（image/png）

**响应头：**
```
Content-Type: image/png
Content-Disposition: inline
Content-Length: [文件大小]
```

**实现逻辑：**
1. 根据文件类型确定存储桶
2. 从classpath加载对应的图标文件
3. 设置响应头并输出二进制流
4. 异常时抛出 `MinioPlusException`

### 2.4 文件管理接口

#### GET /storage/file/{fileKey}

获取文件元数据。

**路径参数：**
- `fileKey`：文件KEY

**响应示例：**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "fileKey": "file-key-123",
    "fileMd5": "d41d8cd98f00b204e9800998ecf8427e",
    "fileName": "example.pdf",
    "fileMimeType": "application/pdf",
    "fileSuffix": ".pdf",
    "fileSize": 1024000,
    "storageEngine": "minio",
    "storageBucket": "default",
    "storagePath": "/files/2024/01/example.pdf",
    "uploadTaskId": "upload-task-456",
    "isFinished": true,
    "isPart": false,
    "partNumber": 0,
    "isPreview": true,
    "isPrivate": false,
    "createUser": "user123",
    "createTime": "2024-01-01T10:00:00",
    "updateUser": "user123",
    "updateTime": "2024-01-01T10:00:00"
  }
}
```

#### DELETE /storage/file/{fileKey}

删除文件。

**路径参数：**
- `fileKey`：文件KEY

**响应示例：**
```json
{
  "code": 200,
  "message": "success",
  "data": true
}
```

### 2.5 用户认证机制

所有Controller接口都通过 `UserHolder.get()` 获取当前登录用户信息，这要求：

1. **用户上下文设置**：在请求处理前设置用户信息到 `UserHolder`
2. **权限验证**：Service层会根据用户ID进行文件权限验证
3. **线程安全**：`UserHolder` 使用ThreadLocal确保线程安全

**示例用户设置：**
```java
@Component
public class UserContextInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                           HttpServletResponse response, 
                           Object handler) {
        // 从请求中获取用户信息（如JWT token）
        String userId = extractUserIdFromRequest(request);
        UserHolder.set(userId);
        return true;
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, 
                              HttpServletResponse response, 
                              Object handler, Exception ex) {
        UserHolder.clear();
    }
}
```

### 2.6 异常处理

Controller层的异常处理机制：

1. **业务异常**：抛出 `MinioPlusException`，由全局异常处理器处理
2. **系统异常**：记录错误日志，返回统一错误响应
3. **参数验证**：使用 `@Validated` 注解进行参数校验

**响应格式统一**：
```java
public class Response<T> {
    private Integer code;    // 状态码
    private String message;  // 消息
    private T data;         // 数据
    private Long timestamp; // 时间戳
}
```

## 3. 错误码

### 3.1 通用错误码

| 错误码 | 错误信息 | 说明 | 解决方案 |
|--------|----------|------|----------|
| 1000 | 操作失败 | 默认异常，通用错误 | 检查请求参数和系统状态 |

### 3.2 文件操作错误码 (1001-1099)

| 错误码 | 错误信息 | 说明 | 解决方案 |
|--------|----------|------|----------|
| 1001 | 文件不存在 | 请求的文件在系统中不存在 | 确认文件KEY是否正确，检查文件是否已被删除 |
| 1002 | 没有访问权限 | 当前用户无权限访问该文件 | 检查用户权限，确认文件所有者或共享设置 |
| 1003 | 文件分块MD5校验码数量与实际分块不一致 | 分片上传时MD5列表与实际分片数不匹配 | 检查分片上传参数，确保所有分片都已上传 |
| 1004 | 无法获取文件的拓展名 | 文件名格式不正确或缺少扩展名 | 确保文件名包含正确的扩展名 |
| 1005 | 文件流不能为空 | 上传的文件内容为空 | 检查上传文件是否有内容 |
| 1006 | 文件上传失败 | 文件上传过程中发生错误 | 检查网络连接、存储空间和文件大小限制 |
| 1007 | 缩略图生成失败 | 图片缩略图生成过程中出错 | 检查图片格式是否支持，确认图片文件完整性 |
| 1008 | 图标获取失败 | 文件类型图标加载失败 | 检查图标资源文件是否存在 |
| 1009 | 文件创建失败 | 文件创建过程中发生错误 | 检查存储权限和磁盘空间 |

### 3.3 MinIO 存储错误码 (2001-2099)

| 错误码 | 错误信息 | 说明 | 解决方案 |
|--------|----------|------|----------|
| 2001 | 桶检查失败 | 无法检查存储桶是否存在 | 检查MinIO服务状态和网络连接 |
| 2002 | 桶创建失败 | 存储桶创建失败 | 检查MinIO权限配置和桶命名规则 |
| 2003 | 获取上传编号失败 | 分片上传初始化失败 | 检查MinIO服务状态和存储桶权限 |
| 2004 | 合并分片失败 | 分片文件合并过程中出错 | 检查所有分片是否上传完成，确认分片完整性 |
| 2005 | 查询分片失败 | 无法获取已上传的分片信息 | 检查上传任务ID和MinIO连接状态 |
| 2006 | 获取对象上传URL失败 | 生成预签名上传URL失败 | 检查MinIO配置和对象路径 |
| 2007 | 获取对象下载URL失败 | 生成预签名下载URL失败 | 检查文件是否存在和MinIO配置 |
| 2008 | 获取预对象预览URL失败 | 生成预览URL失败 | 检查文件类型和预览配置 |
| 2009 | 文件写入失败 | 向MinIO写入文件失败 | 检查网络连接、存储空间和权限 |
| 2010 | 文件读取失败 | 从MinIO读取文件失败 | 检查文件是否存在和读取权限 |
| 2011 | 删除失败 | 文件删除操作失败 | 检查文件是否存在和删除权限 |

### 3.4 错误响应格式

Controller 接口返回错误为JSON格式：

```json
{
  "code": 1001,
  "message": "文件不存在",
  "data": null
}
```

**字段说明：**
- `code`：错误码，对应 `MinioPlusErrorCode` 枚举值
- `message`：提示信息
- `data`：响应业务参数

## 4. 引用 MinIO 接口

这里给出本项目引用的 MinIO 接口列表。

### bucketExists 检查文件桶是否存在

### makeBucket 创建文件桶

### createMultipartUpload 创建分片上传

### completeMultipartUpload 合并文件

### listParts 查询已上传的分片列表

### getPresignedObjectUrl 获取上传、下载、预览图链接

### putObject 上传

### getObject 下载

### removeObject 删除