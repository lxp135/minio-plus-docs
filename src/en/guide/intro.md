<h1 align="center">MinIO Plus</h1>
<h3 align="center">Becoming the Best Partner of MinIO</h3>

<p align="center">
  <a target="_blank" href="https://central.sonatype.com/search?q=me.liuxp.minio-plus-all-spring-boot-starter">
      <img src="https://img.shields.io/maven-central/v/me.liuxp/minio-plus-core.svg?label=Maven%20Central"  alt="version"/>
  </a>
  <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0">
      <img src="https://img.shields.io/badge/license-Apache%202-green.svg" alt="Open Source License" />
  </a>
  <a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
      <img src="https://img.shields.io/badge/JDK-8+-red.svg" alt='JDK Version'/>
  </a>
  <a href="https://github.com/lxp135/minio-plus">
    <img src="https://img.shields.io/github/stars/lxp135/minio-plus?style=social" alt="Gitee fork">
  </a>
  <a href="https://github.com/lxp135/minio-plus">
    <img src="https://img.shields.io/github/forks/lxp135/minio-plus?style=social" alt="Gitee fork">
  </a>
  <br />
</p>

---

# Introduction

[MinIO-Plus](https://github.com/lxp135/minio-plus/) is a secondary encapsulation and enhancement tool for [MinIO](https://github.com/minio/minio). Based on MinIO, it only enhances, does not intrude into MinIO's code, and is designed to simplify development and improve efficiency. It becomes the lubricant for MinIO to land in the project.

*Our open source principles*

* ***We promise that this project will use the Apache License 2.0 open source license forever without changing.***
* ***We promise that this project is permanently free and can be commercialized, preventing scenarios like document charging, upgrade charging, and feature charging.***
* ***We promise that this project will never bid for ranking, avoid brushing star data and fork data, and ensure the project's purity.***

---

# Features

* **Non-intrusive** : Only enhance, don't change, introducing `minio-plus` will not affect the existing project.
* **Instant file transmission** : Hash digest recognition is performed on each uploaded file. When a user uploads the same file, there is no actual file transmission process, achieving instant transmission.
* **Concurrent upload** : The file is divided into small blocks. Multiple blocks are uploaded concurrently at the same time, maximizing bandwidth utilization and speeding up upload speed.
* **Resumable upload** : If a problem is encountered during the transmission process that causes the transmission failure, only the unfinished blocks need to be retransmitted, and the entire transmission task does not need to be restarted.
* **Thumbnail generation** : Identify the file type, automatically generate thumbnails when uploading pictures, and the thumbnail size can be configured.
* **Automatic bucket policy** : Automatically create buckets according to types such as documents, compressed packages, audios, videos, and pictures, divide the path according to `/year/month`, and avoid performance degradation caused by the operating system's file directory system.
* **Access control** : It can support file access control based on users and groups to ensure the security of important files.
* **Access link validity period** : Based on MinIO's temporary link creation policy, provide an upload and download address with a validity period and a pre-signed signature.
* **Client direct connection** : The front end directly connects to MinIO, the project engineering does not do file stream handling, and provides MinIO's native performance while supporting the above features.

# Repositories

Documentation

* [https://gitee.com/lxp135/minio-plus-docs](https://gitee.com/lxp135/minio-plus-docs/)
* [https://github.com/lxp135/minio-plus-docs](https://github.com/lxp135/minio-plus-docs/)

Code

* [https://gitee.com/lxp135/minio-plus](https://gitee.com/lxp135/minio-plus/)
* [https://github.com/lxp135/minio-plus](https://github.com/lxp135/minio-plus/)

# Copyright

This project is based on the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) open source agreement and can be used in commercial projects.