---
layout: home

title: MinIO-Plus

hero:
  name: MinIO-Plus
  text: Be MinIO's best partner
  tagline: Be MinIO's best partner
  image:
    src: /logo.svg
    alt: MinIO-Plus
  actions:
    - theme: brand
      text: quick-start
      link: /guide/user/quick-start
    - theme: alt
      text: intro
      link: /guide/intro
    - theme: alt
      text: Github
      link: https://github.com/lxp135/minio-plus
    - theme: alt
      text: Gitee
      link: https://gitee.com/lxp135/minio-plus

features:
  - icon: 🏹
    title: file transfer in seconds
    details: Hash summary identification for each uploaded file, when users upload the same file, there is no actual file transfer process, to achieve the second transfer.
  - icon: 📡
    title: concurrent upload
    details: Slice files into small chunks. Concurrently upload multiple chunks at the same time to maximise bandwidth usage and speed up uploads.
  - icon: ⛓
    title: resume transmission after a break
    details: If a problem is encountered during transmission that causes the transmission to fail, only the unfinished chunks need to be retransmitted, rather than restarting the entire transmission task.
  - icon: 🗄️
    title: Thumbnail generation
    details: Recognises file types, automatically generates thumbnails when images are uploaded, thumbnail size is configurable.
  - icon: 🔑
    title: access control
    details: It can support file permission control based on users and groups to ensure the security of important files.
  - icon: 🏁
    title: direct client connection
    details: The front-end is directly connected to MinIO , the project engineering does not do the file stream handling , in support of the above features to provide MinIO native performance .
---
