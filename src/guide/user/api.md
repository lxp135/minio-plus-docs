# API接口

MinIO Plus 提供了 StorageService 对象存储操作接口定义和实现。

## StorageService 接口

提供文件上传、下载、删除等接口。

### 3.1.1 文件上传任务初始化

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

### 上传完成

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

### 取得文件下载地址

```java
    /**
     * 取得文件下载地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 文件下载地址
     */
    String download(String fileKey, String userId);
```

### 3.1.4 取得原图地址

```java
    /**
     * 取得原图地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 原图地址
     */
    String image(String fileKey, String userId);
```

### 取得缩略图地址

```java
    /**
     * 取得缩略图地址
     * @param fileKey 文件KEY
     * @param userId  用户编号
     * @return 缩略图地址
     */
    String preview(String fileKey, String userId);
```

### 查询文件元数据

```java
    /**
     * 查询元数据信息
     * @param key 文件key
     * @return 文件元数据信息
     */
    FileMetadataInfoVo one(String key);
```

### 列表查询文件元数据

```java
    /**
     * 查询元数据信息
     * @param fileMetadataInfo 查询入参
     * @return 文件元数据信息集合
     */
    List<FileMetadataInfoVo> list(FileMetadataInfoDTO fileMetadataInfo);
```

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

### 读取文件

```java
    /**
     * 根据文件key读取文件字节流
     * @param fileKey 文件key
     * @return 文件字节流
     */
    Pair<FileMetadataInfoVo,byte[]> read(String fileKey);
```

### 删除文件

```java
    /**
     * 根据文件key删除文件
     * @param fileKey 文件key
     * @return 是否成功
     */
    Boolean remove(String fileKey);
```

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

## Controller 层接口

如果是标准 Spring 项目，可以不写 Controller 层接口，minio-plus-extension 中提供了 Controller 层接口定义。

[Swagger文档地址](https://mpdemo.liuxp.me/doc.html#)

### 文件上传任务初始化

### 上传完成

### 文件下载

取得文件下载地址后，返回前端时进行302跳转。

### 图片预览 - 原图

取得原图地址后，返回前端时进行302跳转。

### 图片预览 - 缩略图

取得缩略图地址后，返回前端时进行302跳转。

## 引用 MinIO 接口

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