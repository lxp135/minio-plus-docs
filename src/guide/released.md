# 更新日志

## v0.1.3 (2024-07-15)

### Bugfix

* 解决 upload.html 测试页面大文件上传时，前端计算MD5值卡死问题。
* 后端调用 StorageService.createFile 方法时，同一用户上传相同文件可以正常生成不同的 fileKey 了。

### Feature

* StorageService 类添加 createBigFile 大文件上传接口。

## v0.1.2 (2024-06-18)

### Bugfix

无

### Feature

* 增加发布模块`minio-plus-core-spring-boot-starter`，该模块仅发布 Service 层接口不发布 Controller 。
* 增加演示模块`minio-plus-application-schedule`，该模块使用`minio-plus-core-spring-boot-starter`实现了一个定期清理文件的策略。
* 删除原有图片上传逻辑，使用懒加载策略，在第一次访问预览图时生成。

## v0.1.1 (2024-06-12)

### Bugfix

* 升级`mybatisplus` 3.5.3.1 -> 3.5.7
* 升级`lombok` 1.18.24 -> 1.18.32
* 升级`thumbnailator` 0.4.8 -> 0.4.20
* 升级`hutool` 5.8.15 -> 5.8.28
* 删除未使用的依赖`spring-cloud-dependencies`和`spring-cloud-alibaba-dependencies`

### Feature

* minio-plus-extension 加入UserHolder 来存取登录用户编号，演示工程中增加拦截器实现登录用户逻辑。
* 调整发布逻辑，配置发布忽略`minio-plus-application`和`minio-plus-application-mysql`

## v0.1.0 (2024-06-11)

第一个预览版本发布，该版本实现了基本的上传、预览、下载等功能。

### Bugfix

无

### Feature

* 上传逻辑实现，包含秒传、分片上传、断点续传。
* 下载逻辑实现，包含图片预览、文件下载。
* 缩略图逻辑实现，在上传图片时自动生成缩略图。
* 桶策略，根据文件类型自动创建桶。
* 文件元数据，提供了基于MySQL的文件元数据实现。