import{_ as e,c as r,o as t,aS as a}from"./chunks/framework.CTQzL4Z6.js";const d=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md"}'),i={name:"guide/intro.md"},l=a('<h1 align="center">MinIO Plus</h1><h3 align="center">我们的愿景是成为 MinIO 最好的搭档</h3><p><a href="https://central.sonatype.com/search?q=me.liuxp.minio-plus-all-spring-boot-starter" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/me.liuxp/minio-plus-core" alt="Version"></a><a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-Apache%202-green" alt="License"></a><a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/JDK-8+-red" alt="JDK"></a><a href="https://sonarcloud.io/dashboard?id=lxp135_minio-plus" target="_blank" rel="noreferrer"><img src="https://sonarcloud.io/api/project_badges/measure?project=lxp135_minio-plus&amp;metric=security_rating" alt="Security Rating"></a><a href="https://sonarcloud.io/dashboard?id=lxp135_minio-plus" target="_blank" rel="noreferrer"><img src="https://sonarcloud.io/api/project_badges/measure?project=lxp135_minio-plus&amp;metric=reliability_rating" alt="Reliability Rating"></a><a href="https://sonarcloud.io/dashboard?id=lxp135_minio-plus" target="_blank" rel="noreferrer"><img src="https://sonarcloud.io/api/project_badges/measure?project=lxp135_minio-plus&amp;metric=sqale_rating" alt="Maintainability Rating"></a><a href="https://sonarcloud.io/dashboard?id=lxp135_minio-plus" target="_blank" rel="noreferrer"><img src="https://sonarcloud.io/api/project_badges/measure?project=lxp135_minio-plus&amp;metric=alert_status" alt="Quality Gate Status"></a><a href="https://gitee.com/lxp135/minio-plus" target="_blank" rel="noreferrer"><img src="https://gitee.com/lxp135/minio-plus/badge/star.svg?theme=dark" alt="star"></a><a href="https://gitee.com/lxp135/minio-plus" target="_blank" rel="noreferrer"><img src="https://gitee.com/lxp135/minio-plus/badge/fork.svg?theme=dark" alt="fork"></a></p><hr><h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p><a href="https://gitee.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">MinIO-Plus</a> 是一个 <a href="https://github.com/minio/minio" target="_blank" rel="noreferrer">MinIO</a> 的二次封装与增强工具，在 MinIO 的基础上只做增强，不侵入 MinIO 代码，只为简化开发、提高效率而生。成为 MinIO 在项目中落地的润滑剂。</p><p><em>我们的开源原则</em></p><ul><li><em><strong>我们承诺此项目使用 Apache License 2.0 开源许可证永不变更。</strong></em></li><li><em><strong>我们承诺此项目使用永久免费可商用，杜绝文档收费、升级收费、功能收费等情况。</strong></em></li><li><em><strong>我们承诺此项目绝不竞价排名，杜绝刷 star 数据、刷 fork 数据，保证项目纯洁。</strong></em></li></ul><hr><h1 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h1><ul><li><strong>无侵入</strong> ：只做增强不做改变，引入 <code>minio-plus</code> 不会对现有工程产生影响。</li><li><strong>文件秒传</strong> ：对每个上传的文件进行哈希摘要识别，用户上传同一个文件时，没有文件实际传输过程，做到秒传。</li><li><strong>并发上传</strong> ：将文件切分为小块。同时并发上传多个小块，最大限度地利用带宽，加快上传速度。</li><li><strong>断点续传</strong> ：在传输过程中遇到问题导致传输失败，只需重新传输未完成的小块，而不需要重新开始整个传输任务。</li><li><strong>缩略图生成</strong> ：识别文件类型，在图片上传时自动生成缩略图，缩略图大小可配置。</li><li><strong>自动桶策略</strong> ：按照文档、压缩包、音频、视频、图片等类型自动建桶，按照 <code>/年/月</code> 划分路径，避免受到操作系统文件目录体系影响导致性能下降。</li><li><strong>访问权限控制</strong> ：可支持基于用户、组的文件权限控制，保证重要文件的安全性。</li><li><strong>访问链接时效</strong> ：基于 MinIO 的临时链接创建策略，提供具备有效期并预签名的上传与下载地址。</li><li><strong>客户端直连</strong> ：前端直连 MinIO ，项目工程不做文件流的搬运，在支持以上特性的情况下提供 MinIO 原生性能。</li></ul><h1 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h1><p>文档</p><ul><li><a href="https://gitee.com/lxp135/minio-plus-docs/" target="_blank" rel="noreferrer">https://gitee.com/lxp135/minio-plus-docs</a></li><li><a href="https://github.com/lxp135/minio-plus-docs/" target="_blank" rel="noreferrer">https://github.com/lxp135/minio-plus-docs</a></li></ul><p>代码</p><ul><li><a href="https://gitee.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">https://gitee.com/lxp135/minio-plus</a></li><li><a href="https://github.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">https://github.com/lxp135/minio-plus</a></li></ul><h1 id="版权" tabindex="-1">版权 <a class="header-anchor" href="#版权" aria-label="Permalink to &quot;版权&quot;">​</a></h1><p>本项目基于 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer">Apache License 2.0</a> 开源协议，可用于商业项目。</p>',18),o=[l];function s(n,p,c,h,m,g){return t(),r("div",null,o)}const _=e(i,[["render",s]]);export{d as __pageData,_ as default};
