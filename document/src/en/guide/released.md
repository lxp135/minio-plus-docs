# Changelog

## v1.0.0 (2024-08-02)

### BUG Fixes

* Fixed non-compliant javadoc.

### New Features

* Official release of version 1.0.0.
* Released SpringBoot3 Starter.
* Adjusted package structure, focusing on SpringBoot3 while simultaneously supporting SpringBoot2 and SpringBoot3.
* Rewrote class, method, and attribute annotations using OpenAPI3 standard.

### Dependency Upgrades

* Upgraded `knife4j` version from 2.0.9 to 4.4.0.
* Upgraded `maven-javadoc-plugin` version from 2.9.1 to 3.8.0.

## v0.1.4 (2024-07-29)

### BUG Fixes

* Fixed null pointer issue when querying shard information in MinIO.
* Resolved code issues flagged by SonarQube.

### New Features

* Introduced SonarQube for code scanning.
* Modified file preview interface to return a thumbnail for images and a file type icon for non-images.
* In the demo project, default to guest when user information is empty.
* In the demo project, database configuration uses environment variables.

### Dependency Upgrades

* Upgraded `minio` version from 8.3.3 to 8.5.11.
* Upgraded `spring-boot-dependencies` version from 2.6.11 to 2.7.18.

## v0.1.3 (2024-07-15)

### BUG Fixes

* Fixed issue where md5 calculation would freeze for large file uploads on the upload.html test page.
* The backend StorageService.createFile method now correctly generates different fileKeys for the same file uploaded by the same user.

### New Features

* Added createBigFile large file upload interface to the StorageService class.

## v0.1.2 (2024-06-18)

### BUG Fixes

None

### New Features

* Added a new module `minio-plus-core-spring-boot-starter` that only publishes Service layer interfaces without Controllers.
* Added a demo module `minio-plus-application-schedule`, which implements a scheduled file cleanup strategy using `minio-plus-core-spring-boot-starter`.
* Deleted the original image upload logic and switched to a lazy loading strategy, generating preview images on first access.

## v0.1.1 (2024-06-12)

### BUG Fixes

* Removed unused dependencies `spring-cloud-dependencies` and `spring-cloud-alibaba-dependencies`.

### New Features

* Added UserHolder to `minio-plus-extension` for storing and retrieving logged-in user IDs, and implemented user login logic in the demo project with an interceptor.
* Adjusted publishing logic to ignore `minio-plus-application` and `minio-plus-application-mysql`.

### Dependency Upgrades

* Upgraded `mybatisplus` from 3.5.3.1 to 3.5.7.
* Upgraded `lombok` from 1.18.24 to 1.18.32.
* Upgraded `thumbnailator` from 0.4.8 to 0.4.20.
* Upgraded `hutool` from 5.8.15 to 5.8.28.

## v0.1.0 (2024-06-11)

First preview version released, implementing basic upload, preview, and download functionalities.

### BUG Fixes

None

### New Features

* Implemented upload logic, including instant upload, shard upload, and resumable upload.
* Implemented download logic, including image preview and file download.
* Implemented thumbnail generation logic, automatically generating thumbnails upon image upload.
* Implemented bucket strategies, automatically creating buckets based on file types.
* Provided file metadata implementation based on MySQL.