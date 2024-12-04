import{_ as i,c as a,aP as e,o as n}from"./chunks/framework.DmU5fmqA.js";const c=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/user/config.md","filePath":"en/guide/user/config.md"}'),t={name:"en/guide/user/config.md"};function l(p,s,r,h,o,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>In the <code>application.yml</code> configuration file of the project engineering, the following MinIO Plus related configuration items can be added:</p><h2 id="required-parameters" tabindex="-1">Required parameters: <a class="header-anchor" href="#required-parameters" aria-label="Permalink to &quot;Required parameters:&quot;">​</a></h2><ul><li><code>minioplus.backend</code>: MinIO server address</li><li><code>minioplus.key</code>: MinIO Key</li><li><code>minioplus.secret</code>: MinIO Secret</li></ul><h2 id="optional-parameters" tabindex="-1">Optional parameters: <a class="header-anchor" href="#optional-parameters" aria-label="Permalink to &quot;Optional parameters:&quot;">​</a></h2><ul><li><code>minioplus.browser-url</code>: Nginx proxy address</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>In a production environment, for security reasons, the MinIO server address is typically not directly exposed. It would be exposed to the internet via Nginx or other proxies on port 9000. In this case, the MinIO will have two addresses, an internal and an external one. Users will access the external address, while our services will access the internal address. So, when minio-plus generates upload and download addresses through the S3 interface, these addresses will be internal. They need to be converted to external addresses so that users can access them. The <code>browser-url</code> parameter is used for this address conversion. Configuring it allows the generated addresses to be converted to external ones.</p></div><ul><li><code>minioplus.upload-expiry</code>: The validity period of the upload pre-signed URL, default is 60 minutes</li><li><code>minioplus.download-expiry</code>: The validity period of the download and preview pre-signed URL, default is 60 minutes</li><li><code>minioplus.part.enable</code>: Whether to enable part upload, default is true</li><li><code>minioplus.part.size</code>: Part size, config unit is byte, default is 5242880</li><li><code>minioplus.thumbnail.size</code>: Thumbnail size, default is 300</li></ul><p>A complete version of the configuration file example is as follows:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##################################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### MinIO Plus Config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##################################################################</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">minioplus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # MinIO deployment address</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  backend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:9000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Browser access address, file/image upload, and download access address proxy. If MinIO is proxied by Nginx, this parameter needs to be configured to the front-end access address after the proxy.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  browser-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:9000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Authorization key</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Secret key</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  secret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Optional parameter, the validity period of the upload pre-signed URL, in minutes, default is 60 minutes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  upload-expiry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Optional parameter, the validity period of the download and preview pre-signed URL, in minutes, default is 60 minutes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  download-expiry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Optional parameters, part configuration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  part</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Optional parameter, whether to enable part capability. Default is true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Optional parameter, part size, config unit is byte, default is 5242880</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5242880</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Optional parameters, thumbnail configuration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  thumbnail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Optional parameter, thumbnail size, default is 300</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span></code></pre></div>`,10)]))}const u=i(t,[["render",l]]);export{c as __pageData,u as default};
