# Configuration

In the `application.yml` configuration file of the project engineering, the following MinIO Plus related configuration items can be added:

## Required parameters:

* `minioplus.backend`: MinIO server address
* `minioplus.key`: MinIO Key
* `minioplus.secret`: MinIO Secret

## Optional parameters:

* `bucket-prefix`: Bucket name prefix, an optional parameter with a default value of empty. If multiple SDKs connect to the same Minio backend service, different prefixes can be configured for distinction.

> [!TIP]  
> Must comply with the naming rules for Amazon S3 storage paths. For specific guidelines, refer to https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html.

* `minioplus.browser-url`: Nginx proxy address

> [!TIP]
> In a production environment, for security reasons, the MinIO server address is typically not directly exposed. It would be exposed to the internet via Nginx or other proxies on port 9000.
> In this case, the MinIO will have two addresses, an internal and an external one. Users will access the external address, while our services will access the internal address.
> So, when minio-plus generates upload and download addresses through the S3 interface, these addresses will be internal. They need to be converted to external addresses so that users can access them.
> The `browser-url` parameter is used for this address conversion. Configuring it allows the generated addresses to be converted to external ones.

* `minioplus.upload-expiry`: The validity period of the upload pre-signed URL, default is 60 minutes
* `minioplus.download-expiry`: The validity period of the download and preview pre-signed URL, default is 60 minutes
* `minioplus.part.enable`: Whether to enable part upload, default is true
* `minioplus.part.size`: Part size, config unit is byte, default is 5242880
* `minioplus.thumbnail.size`: Thumbnail size, default is 300

A complete version of the configuration file example is as follows:

```yaml
##################################################################
### MinIO Plus Config
##################################################################
minioplus:
  # MinIO deployment address
  backend: http://localhost:9000
  # Browser access address, file/image upload, and download access address proxy. If MinIO is proxied by Nginx, this parameter needs to be configured to the front-end access address after the proxy.
  browser-url: http://localhost:9000
  # Authorization key
  key: minioadmin
  # Secret key
  secret: minioadmin
  # Optional parameter, the validity period of the upload pre-signed URL, in minutes, default is 60 minutes
  upload-expiry: 120
  # Optional parameter, the validity period of the download and preview pre-signed URL, in minutes, default is 60 minutes
  download-expiry: 20
  # Optional parameters, part configuration
  part:
    # Optional parameter, whether to enable part capability. Default is true
    enable: true
    # Optional parameter, part size, config unit is byte, default is 5242880
    size: 5242880
  # Optional parameters, thumbnail configuration
  thumbnail:
    # Optional parameter, thumbnail size, default is 300
    size: 300
```