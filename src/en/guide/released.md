# Changelog

## v0.1.3 (2024-07-15)

### Bugfix

* Fixed the problem of the frontend calculating MD5 values when uploading large files on the upload.html test page. 
* When the backend calls the StorageService.createFile method, the same user can upload the same file and generate different fileKeys.

### Feature

* The StorageService class adds the createBigFile interface for large file uploads.

## v0.1.2 (2024-06-18)

### Bugfix

无

### Feature

* Add the release module `minio-plus-core-spring-boot-starter`, which only releases the Service layer interface without releasing the Controller.
* Add demonstration module `minio-plus-application-schedule`, this module uses `minio-plus-core-spring-boot-starter` to implement a regular file cleanup strategy.
* Deleted the original image upload logic, used a lazy loading strategy, and generated a preview image for the first time.

## v0.1.1 (2024-06-12)

### Bugfix

* Upgrade `mybatisplus` 3.5.3.1 -> 3.5.7
* Upgrade `lombok` 1.18.24 -> 1.18.32
* Upgrade `thumbnailator` 0.4.8 -> 0.4.20
* Upgrade `hutool` 5.8.15 -> 5.8.28
* Deleted unused dependencies `spring-cloud-dependencies` and `spring-cloud-alibaba-dependencies`

### Feature

* minio-plus-extension introduces UserHolder to store login user IDs, and the demonstration project adds an interceptor to implement login user logic.
* Adjusted the release logic, configured to ignore publishing `minio-plus-application` and `minio-plus-application-mysql`.

## v0.1.0 (2024-06-11)

The first preview version released, this version implements basic upload, preview, and download functionalities.

### Bugfix

无

### Feature

* Implemented upload logic, including instant uploads, chunked uploads, and resumable uploads.
* Implemented download logic, including image previews and file downloads.
* Implemented thumbnail logic, automatically generating thumbnails when uploading images.
* Implemented bucket strategy, automatically creating buckets based on file type.
* Provided file metadata implementation based on MySQL.