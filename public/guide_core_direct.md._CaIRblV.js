import{_ as e,c as a,o as s,aS as n}from"./chunks/framework.CTQzL4Z6.js";const u=JSON.parse('{"title":"客户端直连","description":"","frontmatter":{},"headers":[],"relativePath":"guide/core/direct.md","filePath":"guide/core/direct.md"}'),t={name:"guide/core/direct.md"},i=n(`<h1 id="客户端直连" tabindex="-1">客户端直连 <a class="header-anchor" href="#客户端直连" aria-label="Permalink to &quot;客户端直连&quot;">​</a></h1><p>当用户进行文件流的上传和下载时，直接访问MinIO服务器（可配置Nginx代理）。</p><p>使用minioclient的GetPresignedObjectUrlArgs方法，入参是一个GetPresignedObjectUrlArgs对象，该对象包含了以下属性：</p><ul><li>bucketName：要访问的桶名。</li><li>objectName：要访问的对象名。</li><li>expires：URL的过期时间，单位为秒。</li></ul><p>该方法的返回值是一个字符串类型的URL，可以用于访问指定的对象，示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://127.0.0.1:9000/test/test123</span></span>
<span class="line"><span>?response-content-type=application%2Fmsword%22&amp;response-content-disposition=attachment%3Bfilename%3D%22xxx.doc%22</span></span>
<span class="line"><span>&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256</span></span>
<span class="line"><span>&amp;X-Amz-Credential=minioadmin%2F20230620%2Fus-east-1%2Fs3%2Faws4_request</span></span>
<span class="line"><span>&amp;X-Amz-Date=20230620T071735Z</span></span>
<span class="line"><span>&amp;X-Amz-Expires=60&amp;X-Amz-SignedHeaders=host</span></span>
<span class="line"><span>&amp;X-Amz-Signature=5be3535042ffe72fedee8a283e7a5afbc2b068c595c16800cf57f089ed891cc5</span></span></code></pre></div><p>每次前端请求文件时，都会生成预签名文件地址，文件地址中，有日期、时效、签名。MinIO会进行验签，保证安全性。</p>`,7),p=[i];function c(o,l,r,d,m,_){return s(),a("div",null,p)}const g=e(t,[["render",c]]);export{u as __pageData,g as default};
