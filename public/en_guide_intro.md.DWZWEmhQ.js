import{_ as e,c as t,o as i,a3 as n}from"./chunks/framework.BrTuXGod.js";const m=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/intro.md","filePath":"en/guide/intro.md"}'),o={name:"en/guide/intro.md"},a=n('<h1 align="center">MinIO Plus</h1><h3 align="center">Becoming the Best Partner of MinIO</h3><p><a style="float:left;padding-left:110px;padding-right:5px;" target="_blank" href="https://central.sonatype.com/search?q=me.liuxp.minio-plus-all-spring-boot-starter"><img src="https://img.shields.io/maven-central/v/me.liuxp/minio-plus-core.svg?label=Maven%20Central" alt="version"></a><a style="float:left;padding-right:5px;" target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/license-Apache%202-green.svg" alt="Open Source License"></a><a style="float:left;padding-right:5px;" target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html"><img src="https://img.shields.io/badge/JDK-8+-red.svg" alt="JDK Version"></a><a style="float:left;padding-right:5px;" href="https://github.com/lxp135/minio-plus"><img src="https://img.shields.io/github/stars/lxp135/minio-plus?style=social" alt="Gitee fork"></a><a style="float:left;padding-right:5px;" href="https://github.com/lxp135/minio-plus"><img src="https://img.shields.io/github/forks/lxp135/minio-plus?style=social" alt="Gitee fork"></a><br></p><hr><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p><a href="https://github.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">MinIO-Plus</a> is a secondary encapsulation and enhancement tool for <a href="https://github.com/minio/minio" target="_blank" rel="noreferrer">MinIO</a>. Based on MinIO, it only enhances, does not intrude into MinIO&#39;s code, and is designed to simplify development and improve efficiency. It becomes the lubricant for MinIO to land in the project.</p><p><em>Our open source principles</em></p><ul><li><em><strong>We promise that this project will use the Apache License 2.0 open source license forever without changing.</strong></em></li><li><em><strong>We promise that this project is permanently free and can be commercialized, preventing scenarios like document charging, upgrade charging, and feature charging.</strong></em></li><li><em><strong>We promise that this project will never bid for ranking, avoid brushing star data and fork data, and ensure the project&#39;s purity.</strong></em></li></ul><hr><h1 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h1><ul><li><strong>Non-intrusive</strong> : Only enhance, don&#39;t change, introducing <code>minio-plus</code> will not affect the existing project.</li><li><strong>Instant file transmission</strong> : Hash digest recognition is performed on each uploaded file. When a user uploads the same file, there is no actual file transmission process, achieving instant transmission.</li><li><strong>Concurrent upload</strong> : The file is divided into small blocks. Multiple blocks are uploaded concurrently at the same time, maximizing bandwidth utilization and speeding up upload speed.</li><li><strong>Resumable upload</strong> : If a problem is encountered during the transmission process that causes the transmission failure, only the unfinished blocks need to be retransmitted, and the entire transmission task does not need to be restarted.</li><li><strong>Thumbnail generation</strong> : Identify the file type, automatically generate thumbnails when uploading pictures, and the thumbnail size can be configured.</li><li><strong>Automatic bucket policy</strong> : Automatically create buckets according to types such as documents, compressed packages, audios, videos, and pictures, divide the path according to <code>/year/month</code>, and avoid performance degradation caused by the operating system&#39;s file directory system.</li><li><strong>Access control</strong> : It can support file access control based on users and groups to ensure the security of important files.</li><li><strong>Access link validity period</strong> : Based on MinIO&#39;s temporary link creation policy, provide an upload and download address with a validity period and a pre-signed signature.</li><li><strong>Client direct connection</strong> : The front end directly connects to MinIO, the project engineering does not do file stream handling, and provides MinIO&#39;s native performance while supporting the above features.</li></ul><h1 id="repositories" tabindex="-1">Repositories <a class="header-anchor" href="#repositories" aria-label="Permalink to &quot;Repositories&quot;">​</a></h1><p>Documentation</p><ul><li><a href="https://gitee.com/lxp135/minio-plus-docs/" target="_blank" rel="noreferrer">https://gitee.com/lxp135/minio-plus-docs</a></li><li><a href="https://github.com/lxp135/minio-plus-docs/" target="_blank" rel="noreferrer">https://github.com/lxp135/minio-plus-docs</a></li></ul><p>Code</p><ul><li><a href="https://gitee.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">https://gitee.com/lxp135/minio-plus</a></li><li><a href="https://github.com/lxp135/minio-plus/" target="_blank" rel="noreferrer">https://github.com/lxp135/minio-plus</a></li></ul><h1 id="copyright" tabindex="-1">Copyright <a class="header-anchor" href="#copyright" aria-label="Permalink to &quot;Copyright&quot;">​</a></h1><p>This project is based on the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer">Apache License 2.0</a> open source agreement and can be used in commercial projects.</p>',18),r=[a];function s(l,c,p,d,h,g){return i(),t("div",null,r)}const f=e(o,[["render",s]]);export{m as __pageData,f as default};
