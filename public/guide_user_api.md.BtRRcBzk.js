import{_ as a,c as e,o as t,a3 as r}from"./chunks/framework.w16dWhWo.js";const m=JSON.parse('{"title":"API接口","description":"","frontmatter":{},"headers":[],"relativePath":"guide/user/api.md","filePath":"guide/user/api.md"}'),i={name:"guide/user/api.md"},o=r('<h1 id="api接口" tabindex="-1">API接口 <a class="header-anchor" href="#api接口" aria-label="Permalink to &quot;API接口&quot;">​</a></h1><h2 id="_3-1-service-层接口" tabindex="-1">3.1 Service 层接口 <a class="header-anchor" href="#_3-1-service-层接口" aria-label="Permalink to &quot;3.1 Service 层接口&quot;">​</a></h2><p>提供文件上传、下载、删除等接口。</p><h3 id="_3-1-1-文件上传任务初始化" tabindex="-1">3.1.1 文件上传任务初始化 <a class="header-anchor" href="#_3-1-1-文件上传任务初始化" aria-label="Permalink to &quot;3.1.1 文件上传任务初始化&quot;">​</a></h3><h3 id="_3-1-2-上传完成" tabindex="-1">3.1.2 上传完成 <a class="header-anchor" href="#_3-1-2-上传完成" aria-label="Permalink to &quot;3.1.2 上传完成&quot;">​</a></h3><h3 id="_3-1-3-取得文件下载地址" tabindex="-1">3.1.3 取得文件下载地址 <a class="header-anchor" href="#_3-1-3-取得文件下载地址" aria-label="Permalink to &quot;3.1.3 取得文件下载地址&quot;">​</a></h3><h3 id="_3-1-4-取得原图地址" tabindex="-1">3.1.4 取得原图地址 <a class="header-anchor" href="#_3-1-4-取得原图地址" aria-label="Permalink to &quot;3.1.4 取得原图地址&quot;">​</a></h3><h3 id="_3-1-5-取得缩略图地址" tabindex="-1">3.1.5 取得缩略图地址 <a class="header-anchor" href="#_3-1-5-取得缩略图地址" aria-label="Permalink to &quot;3.1.5 取得缩略图地址&quot;">​</a></h3><h3 id="_3-1-6-查询文件元数据" tabindex="-1">3.1.6 查询文件元数据 <a class="header-anchor" href="#_3-1-6-查询文件元数据" aria-label="Permalink to &quot;3.1.6 查询文件元数据&quot;">​</a></h3><h3 id="_3-1-7-列表查询文件元数据" tabindex="-1">3.1.7 列表查询文件元数据 <a class="header-anchor" href="#_3-1-7-列表查询文件元数据" aria-label="Permalink to &quot;3.1.7 列表查询文件元数据&quot;">​</a></h3><h3 id="_3-1-8-从字节数组创建文件" tabindex="-1">3.1.8 从字节数组创建文件 <a class="header-anchor" href="#_3-1-8-从字节数组创建文件" aria-label="Permalink to &quot;3.1.8 从字节数组创建文件&quot;">​</a></h3><h3 id="_3-1-9-从输入流创建文件" tabindex="-1">3.1.9 从输入流创建文件 <a class="header-anchor" href="#_3-1-9-从输入流创建文件" aria-label="Permalink to &quot;3.1.9 从输入流创建文件&quot;">​</a></h3><h3 id="_3-1-10-从外部url创建文件" tabindex="-1">3.1.10 从外部url创建文件 <a class="header-anchor" href="#_3-1-10-从外部url创建文件" aria-label="Permalink to &quot;3.1.10 从外部url创建文件&quot;">​</a></h3><h3 id="_3-1-11-读取文件" tabindex="-1">3.1.11 读取文件 <a class="header-anchor" href="#_3-1-11-读取文件" aria-label="Permalink to &quot;3.1.11 读取文件&quot;">​</a></h3><h3 id="_3-1-12-删除文件" tabindex="-1">3.1.12 删除文件 <a class="header-anchor" href="#_3-1-12-删除文件" aria-label="Permalink to &quot;3.1.12 删除文件&quot;">​</a></h3><h3 id="_3-1-13-文件上传-minio原生接口" tabindex="-1">3.1.13 文件上传（MinIO原生接口） <a class="header-anchor" href="#_3-1-13-文件上传-minio原生接口" aria-label="Permalink to &quot;3.1.13 文件上传（MinIO原生接口）&quot;">​</a></h3><h3 id="_3-1-14-文件下载-minio原生接口" tabindex="-1">3.1.14 文件下载（MinIO原生接口） <a class="header-anchor" href="#_3-1-14-文件下载-minio原生接口" aria-label="Permalink to &quot;3.1.14 文件下载（MinIO原生接口）&quot;">​</a></h3><h2 id="_3-2-controller-层接口" tabindex="-1">3.2 Controller 层接口 <a class="header-anchor" href="#_3-2-controller-层接口" aria-label="Permalink to &quot;3.2 Controller 层接口&quot;">​</a></h2><p>如没有特殊需求，也可以不写 Controller 层接口，minio-plus-extension 中提供了 Controller 层接口定义。</p><h3 id="_3-2-1-文件上传任务初始化" tabindex="-1">3.2.1 文件上传任务初始化 <a class="header-anchor" href="#_3-2-1-文件上传任务初始化" aria-label="Permalink to &quot;3.2.1 文件上传任务初始化&quot;">​</a></h3><h3 id="_3-2-2-上传完成" tabindex="-1">3.2.2 上传完成 <a class="header-anchor" href="#_3-2-2-上传完成" aria-label="Permalink to &quot;3.2.2 上传完成&quot;">​</a></h3><h3 id="_3-2-3-文件下载" tabindex="-1">3.2.3 文件下载 <a class="header-anchor" href="#_3-2-3-文件下载" aria-label="Permalink to &quot;3.2.3 文件下载&quot;">​</a></h3><p>调用 3.1.3 取得文件下载地址后，返回前端时进行302跳转。</p><h3 id="_3-2-4-图片预览-原图" tabindex="-1">3.2.4 图片预览 - 原图 <a class="header-anchor" href="#_3-2-4-图片预览-原图" aria-label="Permalink to &quot;3.2.4 图片预览 - 原图&quot;">​</a></h3><p>调用 3.1.3 取得原图地址后，返回前端时进行302跳转。</p><h3 id="_3-2-5-图片预览-缩略图" tabindex="-1">3.2.5 图片预览 - 缩略图 <a class="header-anchor" href="#_3-2-5-图片预览-缩略图" aria-label="Permalink to &quot;3.2.5 图片预览 - 缩略图&quot;">​</a></h3><p>调用 3.1.3 取得缩略图地址后，返回前端时进行302跳转。</p><h2 id="_3-3-引用-minio-接口" tabindex="-1">3.3 引用 MinIO 接口 <a class="header-anchor" href="#_3-3-引用-minio-接口" aria-label="Permalink to &quot;3.3 引用 MinIO 接口&quot;">​</a></h2><p>这里给出本项目引用的 MinIO 接口列表。</p><h3 id="_3-3-1-bucketexists-检查文件桶是否存在" tabindex="-1">3.3.1 bucketExists 检查文件桶是否存在 <a class="header-anchor" href="#_3-3-1-bucketexists-检查文件桶是否存在" aria-label="Permalink to &quot;3.3.1 bucketExists 检查文件桶是否存在&quot;">​</a></h3><h3 id="_3-3-2-makebucket-创建文件桶" tabindex="-1">3.3.2 makeBucket 创建文件桶 <a class="header-anchor" href="#_3-3-2-makebucket-创建文件桶" aria-label="Permalink to &quot;3.3.2 makeBucket 创建文件桶&quot;">​</a></h3><h3 id="_3-3-3-createmultipartupload-创建分片上传" tabindex="-1">3.3.3 createMultipartUpload 创建分片上传 <a class="header-anchor" href="#_3-3-3-createmultipartupload-创建分片上传" aria-label="Permalink to &quot;3.3.3 createMultipartUpload 创建分片上传&quot;">​</a></h3><h3 id="_3-3-4-completemultipartupload-合并文件" tabindex="-1">3.3.4 completeMultipartUpload 合并文件 <a class="header-anchor" href="#_3-3-4-completemultipartupload-合并文件" aria-label="Permalink to &quot;3.3.4 completeMultipartUpload 合并文件&quot;">​</a></h3><h3 id="_3-3-5-listparts-查询已上传的分片列表" tabindex="-1">3.3.5 listParts 查询已上传的分片列表 <a class="header-anchor" href="#_3-3-5-listparts-查询已上传的分片列表" aria-label="Permalink to &quot;3.3.5 listParts 查询已上传的分片列表&quot;">​</a></h3><h3 id="_3-3-6-getpresignedobjecturl-获取上传、下载、预览图链接" tabindex="-1">3.3.6 getPresignedObjectUrl 获取上传、下载、预览图链接 <a class="header-anchor" href="#_3-3-6-getpresignedobjecturl-获取上传、下载、预览图链接" aria-label="Permalink to &quot;3.3.6 getPresignedObjectUrl 获取上传、下载、预览图链接&quot;">​</a></h3><h3 id="_3-3-7-putobject-上传" tabindex="-1">3.3.7 putObject 上传 <a class="header-anchor" href="#_3-3-7-putobject-上传" aria-label="Permalink to &quot;3.3.7 putObject 上传&quot;">​</a></h3><h3 id="_3-3-8-getobject-下载" tabindex="-1">3.3.8 getObject 下载 <a class="header-anchor" href="#_3-3-8-getobject-下载" aria-label="Permalink to &quot;3.3.8 getObject 下载&quot;">​</a></h3><h3 id="_3-3-9-removeobject-删除" tabindex="-1">3.3.9 removeObject 删除 <a class="header-anchor" href="#_3-3-9-removeobject-删除" aria-label="Permalink to &quot;3.3.9 removeObject 删除&quot;">​</a></h3>',38),l=[o];function h(n,d,c,s,u,_){return t(),e("div",null,l)}const q=a(i,[["render",h]]);export{m as __pageData,q as default};