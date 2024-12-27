---
layout: home

title: MinIO-Plus
titleTemplate: MinIO 的二次封装与增强工具

hero:
  name: MinIO-Plus
  text: 二次封装与增强工具
  tagline: 成为 MinIO 最好的搭档
  image:
    src: /logo.svg
    alt: MinIO-Plus
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/user/quick-start
    - theme: alt
      text: 介绍
      link: /guide/intro
    - theme: alt
      text: 在Gitee上查看
      link: https://gitee.com/lxp135/minio-plus

features:
  - icon: 🏹
    title: 文件秒传
    details: 对每个上传的文件进行哈希摘要识别，用户上传同一个文件时，没有文件实际传输过程，做到秒传。
  - icon: 🚀
    title: 并发上传
    details: 将文件切分为小块。同时并发上传多个小块，最大限度地利用带宽，加快上传速度。
  - icon: ⛓
    title: 断点续传
    details: 在传输过程中遇到问题导致传输失败，只需重新传输未完成的小块，而不需要重新开始整个传输任务。
  - icon: 🗄️
    title: 缩略图生成
    details: 识别文件类型，在图片上传时自动生成缩略图，缩略图大小可配置。
  - icon: 🔑
    title: 访问权限控制
    details: 可支持基于用户、组的文件权限控制，保证重要文件的安全性。
  - icon: 🏁
    title: 客户端直连
    details: 前端直连 MinIO ，项目工程不做文件流的搬运，在支持以上特性的情况下提供 MinIO 原生性能。
---

::: example
Example
:::
