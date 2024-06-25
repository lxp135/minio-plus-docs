# 配置文件

在项目工程的`application.yml`配置文件中，可以添加以下 MinIO Plus 相关配置项：

## 必选参数：

* `minioplus.backend`：MinIO 服务地址
* `minioplus.key`：MinIO Key
* `minioplus.secret`：MinIO Secret

## 可选参数：

* `minioplus.browser-url`：Nginx 代理地址

> [!TIP]
> 在生产环境，基于安全考虑，MinIO 服务地址通常不会直接暴露出去，会通过 Nginx 或其他代理将 9000 端口暴露到互联网。
> 在这种情况下，会导致 MinIO 存在内外网两个地址，用户访问的是外网地址，而我们服务之间访问的是内网地址。
> 那么 minio-plus 在通过 S3 接口生成上传、下载等地址都是内网地址，就需要转换成用户可以访问的外网地址。
> `browser-url`参数就是做这个地址转换用的，配置后可以将生成的地址转换成外网地址。

* `minioplus.upload-expiry`：上传预签名URL有效期，默认值为60分钟
* `minioplus.download-expiry`：下载和预览预签名URL有效期，默认值为60分钟
* `minioplus.part.enable`：是否开启分片上传，默认为true
* `minioplus.part.size`：分片大小，配置单位为byte，默认为5242880
* `minioplus.thumbnail.size`：缩略图尺寸，默认为300

完全版本的配置文件例子如下：

```yaml
##################################################################
### MinIO Plus Config
##################################################################
minioplus:
    # MinIO 部署地址
    backend: http://localhost:9000
    # 浏览器访问地址，文件、图片上传下载访问地址代理，如果minio被nginx代理，需要配置这个参数为代理后的前端访问地址
    browser-url: http://localhost:9000
    # 授权key
    key: minioadmin
    # 密钥
    secret: minioadmin
    # 上传预签名URL有效期，单位为分钟，可选参数，默认值为60分钟
    upload-expiry: 120
    # 下载和预览预签名URL有效期，单位为分钟，可选参数，默认值为60分钟
    download-expiry: 20
    # 可选参数，分块配置
    part:
        # 可选参数，是否开启分块能力。默认为true
        enable: true
        # 可选参数，分块大小，配置单位为byte，默认为5242880
        size: 5242880
    # 可选参数，缩略图配置
    thumbnail:
        # 可选参数，缩略图尺寸，默认为300
        size: 300
```