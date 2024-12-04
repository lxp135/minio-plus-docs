import{_ as n,c as t,aP as a,o as s}from"./chunks/framework.DmU5fmqA.js";const h=JSON.parse('{"title":"Client Direct Connection","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/core/direct.md","filePath":"en/guide/core/direct.md"}'),i={name:"en/guide/core/direct.md"};function c(o,e,p,r,d,l){return s(),t("div",null,e[0]||(e[0]=[a(`<h1 id="client-direct-connection" tabindex="-1">Client Direct Connection <a class="header-anchor" href="#client-direct-connection" aria-label="Permalink to &quot;Client Direct Connection&quot;">​</a></h1><p>When users upload and download file streams, they can directly access the MinIO server (with optional Nginx proxy configuration).</p><p>Using the <code>GetPresignedObjectUrlArgs</code> method of <code>minioclient</code>, the input parameter is a <code>GetPresignedObjectUrlArgs</code> object, which includes the following properties:</p><ul><li><code>bucketName</code>: The name of the bucket to access.</li><li><code>objectName</code>: The name of the object to access.</li><li><code>expires</code>: The expiration time of the URL in seconds.</li></ul><p>The return value of this method is a string type URL that can be used to access the specified object. Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://127.0.0.1:9000/test/test123</span></span>
<span class="line"><span>?response-content-type=application%2Fmsword%22&amp;response-content-disposition=attachment%3Bfilename%3D%22xxx.doc%22</span></span>
<span class="line"><span>&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256</span></span>
<span class="line"><span>&amp;X-Amz-Credential=minioadmin%2F20230620%2Fus-east-1%2Fs3%2Faws4_request</span></span>
<span class="line"><span>&amp;X-Amz-Date=20230620T071735Z</span></span>
<span class="line"><span>&amp;X-Amz-Expires=60&amp;X-Amz-SignedHeaders=host</span></span>
<span class="line"><span>&amp;X-Amz-Signature=5be3535042ffe72fedee8a283e7a5afbc2b068c595c16800cf57f089ed891cc5</span></span></code></pre></div><p>Each time the frontend requests a file, a pre-signed file URL is generated. The file URL contains the date, expiration time, and signature. MinIO performs signature verification to ensure security.</p>`,7)]))}const u=n(i,[["render",c]]);export{h as __pageData,u as default};
