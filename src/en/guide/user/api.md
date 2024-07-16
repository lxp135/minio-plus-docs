# API Interface

MinIO Plus provides the StorageService object storage operation interface definition and implementation.

## StorageService Interface

Provides file upload, download, deletion, etc.

### 3.1.1 Initialize File Upload Task

```java
    /**
     * Initialize upload task
     * @param fileMd5 File md5
     * @param fullFileName File name (including extension)
     * @param fileSize File length
     * @param isPrivate Is it private false: No true: Yes
     * @param userId  User number
     * @return {@link FileCheckResultVo}
     */
    FileCheckResultVo init(String fileMd5, String fullFileName, long fileSize, Boolean isPrivate, String userId);
```

### Upload Complete

```java
    /**
     * Combine the already chunked files
     * @param fileKey File key
     * @param partMd5List File block md5 list
     * @param userId  User number
     * @return {@link CompleteResultVo}
     */
    CompleteResultVo complete(String fileKey, List<String> partMd5List,String userId);
```

### Get File Download Address

```java
    /**
     * Get the file download address
     * @param fileKey File KEY
     * @param userId  User number
     * @return File download address
     */
    String download(String fileKey, String userId);
```

### 3.1.4 Get Original Image Address

```java
    /**
     * Get the original image address
     * @param fileKey File KEY
     * @param userId  User number
     * @return Original image address
     */
    String image(String fileKey, String userId);
```

### Get Thumbnail Address

```java
    /**
     * Get the thumbnail address
     * @param fileKey File KEY
     * @param userId  User number
     * @return Thumbnail address
     */
    String preview(String fileKey, String userId);
```

### Query File Metadata

```java
    /**
     * Query metadata information
     * @param key File key
     * @return File metadata information
     */
    FileMetadataInfoVo one(String key);
```

### List Query File Metadata

```java
    /**
     * Query metadata information
     * @param fileMetadataInfo Query entry
     * @return File metadata information collection
     */
    List<FileMetadataInfoVo> list(FileMetadataInfoDTO fileMetadataInfo);
```

### Create File from Byte Array

```java
    /**
     * Create a file
     * Try not to use this method to process large files, large files are recommended to be uploaded directly from the front end
     * @param fullFileName File name (including extension)
     * @param isPrivate Is it private false: No true: Yes
     * @param userId  User number
     * @param fileBytes File byte stream
     * @return File metadata information
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, byte[] fileBytes);
```

### Create File from Input Stream

```java
    /**
     * Create a file
     * Try not to use this method to process large files, large files are recommended to be uploaded directly from the front end
     * @param fullFileName File name (including extension)
     * @param isPrivate Is it private false: No true: Yes
     * @param userId  User number
     * @param inputStream File input byte stream
     * @return File metadata information
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, InputStream inputStream);
```

### Create File from External URL

```java
    /**
     * Create a file
     * Try not to use this method to process large files, large files are recommended to be uploaded directly from the front end
     * @param fullFileName File name (including extension)
     * @param isPrivate Is it private false: No true: Yes
     * @param userId  User number
     * @param url File address
     * @return File metadata information
     */
    FileMetadataInfoVo createFile(String fullFileName, Boolean isPrivate, String userId, String url);
```

### Create File from Input Stream, Support Large File

```java
    /**
     * Create a large file
     * Large files are recommended to use this method
     * @param fullFileName File name (including extension)
     * @param md5 File name MD5
     * @param fileSize File name size
     * @param isPrivate Is it private false: No true: Yes
     * @param userId  User number
     * @param inputStream File input byte stream
     * @return File metadata information
     */
    FileMetadataInfoVo createBigFile(String fullFileName, String md5, long fileSize,Boolean isPrivate, String userId, InputStream inputStream);
```

### Read File

```java
    /**
     * Read file byte stream by file key
     * @param fileKey File key
     * @return File byte stream
     */
    Pair<FileMetadataInfoVo,byte[]> read(String fileKey);
```

### Delete File

```java
    /**
     * Delete file by file key
     * @param fileKey File key
     * @return Whether it is successful
     */
    Boolean remove(String fileKey);
```

### Related Object Definition

```java
/**
 * File Check Result VO
 *author contact@liuxp.me
 *since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("File Check Result")
public class FileCheckResultVo {
    /**
     * Primary key
     */
    @ApiModelProperty("Primary Key")
    private Long id;
    /**
     * File KEY
     */
    @ApiModelProperty("File KEY")
    private String fileKey;
    /**
     * File md5
     */
    @ApiModelProperty("File md5")
    private String fileMd5;
    /**
     * File name
     */
    @ApiModelProperty("File Name")
    private String fileName;

    /**
     * MIME type
     */
    @ApiModelProperty("MIME Type")
    private String fileMimeType;
    /**
     * File extension
     */
    @ApiModelProperty("File Extension")
    private String fileSuffix;
    /**
     * File length
     */
    @ApiModelProperty("File Length")
    private Long fileSize;
    /**
     * Is it a second pass
     */
    @ApiModelProperty("Is it a second pass")
    private Boolean isDone;
    /**
     * Number of blocks
     */
    @ApiModelProperty("Number of blocks")
    private Integer partCount;

    /**
     * Block size
     */
    @ApiModelProperty("Block size")
    private Integer partSize;

    /**
     * Block information
     */
    @ApiModelProperty("Block information")
    private List<Part> partList = new ArrayList<>();

    @Getter
    @Setter
    public static class Part {
        /**
         * minio's upload id
         */
        @ApiModelProperty("minio's upload id")
        private String uploadId;
        /**
         * Upload address
         */
        @ApiModelProperty("Upload address")
        private String url;
        /**
         * Start position
         */
        @ApiModelProperty("Start position")
        private Long startPosition;
        /**
         * End position
         */
        @ApiModelProperty("End position")
        private Long endPosition;

    }

}
```

```java
/**
 * File Integrity Check Result VO
 *author contact@liuxp.me
 *since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("File Integrity Check Result")
public class CompleteResultVo {

    @ApiModelProperty("Is it complete")
    private Boolean isComplete;

    @ApiModelProperty("Upload task number")
    private String uploadTaskId;

    @ApiModelProperty("Resubmitted block information")
    private List<FileCheckResultVo.Part> partList = new ArrayList<>();

}
```

```java
/**
 * File Metadata Information VO
 *author contact@liuxp.me
 *since 2023-06-26
 **/
@Getter
@Setter
@ApiModel("File Metadata Information")
public class FileMetadataInfoVo {

    @ApiModelProperty("Primary Key")
    private Long id;

    @ApiModelProperty("File KEY")
    private String fileKey;

    @ApiModelProperty("File md5")
    private String fileMd5;

    @ApiModelProperty("File Name")
    private String fileName;

    @ApiModelProperty("MIME Type")
    private String fileMimeType;

    @ApiModelProperty("File Extension")
    private String fileSuffix;

    @ApiModelProperty("File Length")
    private Long fileSize;

    @ApiModelProperty("Storage Engine")
    private String storageEngine;

    @ApiModelProperty("Storage Bucket")
    private String storageBucket;

    @ApiModelProperty("Storage Path")
    private String storagePath;

    @ApiModelProperty("Minio slice task id")
    private String uploadTaskId;

    @ApiModelProperty("Status 0: Unfinished 1: Completed")
    private Boolean isFinished;

    @ApiModelProperty("Is it a block 0: No 1: Yes")
    private Boolean isPart;

    @ApiModelProperty("Number of blocks")
    private Integer partNumber;

    @ApiModelProperty("Preview 0: No 1: Yes")
    private Boolean isPreview;

    @ApiModelProperty("Is it private 0: No 1: Yes")
    private Boolean isPrivate;

    @ApiModelProperty("Created By")
    private String createUser;

    @ApiModelProperty("Creation Time")
    private Date createTime;

    @ApiModelProperty("Modified By")
    private String updateUser;

    @ApiModelProperty("Modification Time")
    private Date updateTime;

}
```

## Controller Layer Interface

If it's a standard Spring project, you don't need to write the Controller layer interface, the minio-plus-extension provides the Controller layer interface definition.

[Swagger document address](https://mpdemo.liuxp.me/doc.html#)

### Initialize File Upload Task

### Upload Complete

### File Download

Get the file download address and return to the front end for a 302 redirect.

### Image Preview - Original Image

Get the original image address and return to the front end for a 302 redirect.

### Image Preview - Thumbnail

Get the thumbnail address and return to the front end for a 302 redirect.

## Reference MinIO Interface

Here we give a list of MinIO interfaces referenced by this project.

### bucketExists

### makeBucket

### createMultipartUpload

### completeMultipartUpload

### listParts

### getPresignedObjectUrl

### putObject

### getObject

### removeObject