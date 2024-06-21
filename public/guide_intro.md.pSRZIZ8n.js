import{_ as e,c as l,o as i,a3 as t}from"./chunks/framework.w16dWhWo.js";const f=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md"}'),a={name:"guide/intro.md"},r=t('<h1 align="center">MinIO Plus</h1><h3 align="center">我们的愿景是成为 MinIO 最好的搭档</h3><p><a style="float:left;padding-left:110px;padding-right:5px;" target="_blank" href="https://central.sonatype.com/search?q=me.liuxp.minio-plus-all-spring-boot-starter"><img src="https://img.shields.io/maven-central/v/me.liuxp/minio-plus-core.svg?label=Maven%20Central"></a><a style="float:left;padding-right:5px;" target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/license-Apache%202-green.svg" alt="开源协议"></a><a style="float:left;padding-right:5px;" target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html"><img src="https://img.shields.io/badge/JDK-8+-red.svg" alt="JDK版本"></a><a style="float:left;padding-right:5px;" href="https://gitee.com/lxp135/minio-plus"><img src="https://gitee.com/lxp135/minio-plus/badge/star.svg?theme=dark" alt="star"></a><a style="float:left;padding-right:5px;" href="https://gitee.com/lxp135/minio-plus"><img src="https://gitee.com/lxp135/minio-plus/badge/fork.svg?theme=dark" alt="Gitee fork"></a><br></p><hr><h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p><a href="https://gitee.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">MinIO-Plus</a> 是一个 <a href="https://github.com/minio/minio" target="_blank" rel="noreferrer">MinIO</a> 的二次封装与增强工具，在 MinIO 的基础上只做增强，不侵入 MinIO 代码，只为简化开发、提高效率而生。成为 MinIO 在项目中落地的润滑剂。</p><hr><h1 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h1><ul><li><strong>无侵入</strong> ：只做增强不做改变，引入 <code>minio-plus</code> 不会对现有工程产生影响。</li><li><strong>文件秒传</strong> ：对每个上传的文件进行哈希摘要识别，用户上传同一个文件时，没有文件实际传输过程，做到秒传。</li><li><strong>并发上传</strong> ：将文件切分为小块。同时并发上传多个小块，最大限度地利用带宽，加快上传速度。</li><li><strong>断点续传</strong> ：在传输过程中遇到问题导致传输失败，只需重新传输未完成的小块，而不需要重新开始整个传输任务。</li><li><strong>缩略图生成</strong> ：识别文件类型，在图片上传时自动生成缩略图，缩略图大小可配置。</li><li><strong>自动桶策略</strong> ：按照文档、压缩包、音频、视频、图片等类型自动建桶，按照 <code>/年/月</code> 划分路径，避免受到操作系统文件目录体系影响导致性能下降。</li><li><strong>访问权限控制</strong> ：可支持基于用户、组的文件权限控制，保证重要文件的安全性。</li><li><strong>访问链接时效</strong> ：基于 MinIO 的临时链接创建策略，提供具备有效期并预签名的上传与下载地址。</li><li><strong>客户端直连</strong> ：前端直连 MinIO ，项目工程不做文件流的搬运，在支持以上特性的情况下提供 MinIO 原生性能。</li></ul><h1 id="文档目录" tabindex="-1">文档目录 <a class="header-anchor" href="#文档目录" aria-label="Permalink to &quot;文档目录&quot;">​</a></h1><ul><li><a href="./intro.html">首页</a></li><li><a href="./released.html">更新日志</a></li><li>用户手册 <ul><li><a href="./user/quick-start.html">快速开始</a></li><li><a href="./user/api.html">API接口</a></li><li><a href="./user/db.html">文件元数据</a></li><li><a href="./user/config.html">配置文件</a></li><li><a href="./user/custom.html">非官方S3实现</a></li></ul></li><li>开发者手册 <ul><li><a href="./developers/plan.html">开发计划</a></li><li><a href="./developers/building.html">构建与运行</a></li><li><a href="./developers/framework.html">代码结构</a></li><li><a href="./developers/writing-code.html">提交代码</a></li><li><a href="./developers/writing-documents.html">编写文档</a></li><li><a href="./developers/contributors.html">贡献者列表</a></li></ul></li><li>核心机制 <ul><li><a href="./core/upload.html">上传</a></li><li><a href="./core/download.html">下载</a></li><li><a href="./core/direct.html">客户端直连</a></li><li><a href="./core/preview.html">缩略图</a></li><li><a href="./core/bucket.html">桶策略</a></li><li><a href="./core/auth.html">权限控制</a></li></ul></li><li>参考资料 <ul><li><a href="./references/faq.html">FAQ</a></li><li><a href="./references/minio-s3-api.html">MinIO S3 接口</a></li></ul></li><li>MinIO 研究 <ul><li><a href="./study/etag.html">MinIO 分片 ETAG 生成机制</a></li><li><a href="./study/proxy.html">Nginx 代理</a></li></ul></li></ul>',11),o=[r];function s(n,h,g,d,m,c){return i(),l("div",null,o)}const u=e(a,[["render",s]]);export{f as __pageData,u as default};