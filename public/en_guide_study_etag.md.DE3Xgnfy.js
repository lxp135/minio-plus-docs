import{_ as s,a as i}from"./chunks/etag2.xLcgxUa9.js";import{_ as a,c as t,o as e,a3 as n}from"./chunks/framework.BrTuXGod.js";const F=JSON.parse('{"title":"MinIO Shard ETAG Generation Mechanism","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/study/etag.md","filePath":"en/guide/study/etag.md"}'),h={name:"en/guide/study/etag.md"},l=n('<h1 id="minio-shard-etag-generation-mechanism" tabindex="-1">MinIO Shard ETAG Generation Mechanism <a class="header-anchor" href="#minio-shard-etag-generation-mechanism" aria-label="Permalink to &quot;MinIO Shard ETAG Generation Mechanism&quot;">​</a></h1><p>In MinIO, consistency checks differ between shard uploads and regular uploads. Let&#39;s discuss them separately.</p><h2 id="regular-upload" tabindex="-1">Regular Upload <a class="header-anchor" href="#regular-upload" aria-label="Permalink to &quot;Regular Upload&quot;">​</a></h2><p>MinIO automatically generates an Etag label for all uploaded files, with the default algorithm being MD5. For consistency checks, the front-end program reads the local file to perform an MD5 calculation. After the upload is complete, comparing the two values ensures consistency.</p><h2 id="shard-upload" tabindex="-1">Shard Upload <a class="header-anchor" href="#shard-upload" aria-label="Permalink to &quot;Shard Upload&quot;">​</a></h2><p>MinIO calculates an MD5 for each shard, with each shard having its own hidden ETAG label, viewable only through the API, not the backend management page. After all shards are uploaded, when the file merge interface is called to merge them, MinIO concatenates the ETAG labels of all shards into a byte[] array and computes the MD5 value of this array as the ETAG of the entire file. It does not re-read the entire file stream for this calculation. This ETAG can be seen in MinIO&#39;s backend management interface.</p><p>You can upload the same file to MinIO using regular upload first and then shard upload. Although the file is the same, their ETAG values will be different.</p><p>Additionally, MinIO creates sparse files on the disk in advance during shard upload. Merging shards does not involve actual disk IO read/write, making it a safe operation. To ensure performance in minio-plus, we only compare the MD5 calculation results of the shards, i.e., the ETAG values of the shards, to ensure the overall consistency of the file.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Let&#39;s upload an 18.9MB file, sharded into 4 parts with each part being 5MB, as shown below:</p><p><img src="'+s+`" alt="etag1.png"></p><p>The file&#39;s <code>ETAG</code> is <code>43abdc8a17419c3ac4400a7bb0d7d3b5-4</code>. This <code>ETAG</code> has two parts: the MD5 value and the shard count.</p><p>Now, let&#39;s simulate MinIO&#39;s <code>ETAG</code> calculation process using the shard <code>ETAG</code> values to compute the entire file&#39;s <code>ETAG</code>.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String part1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;101faaef4cc4567091dbf5c62d0f2a66&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String part2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;54b96a8a5cf6164c1e197ff9e97b9e3c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String part3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;f647e6824a99b6ca06805dbc10756870&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String part4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;3c2f9b262e71c6fbf336432e9dbfe89b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] part1byte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HexUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeHex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part1) ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] part2byte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HexUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeHex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part2) ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] part3byte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HexUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeHex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part3) ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] part4byte </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HexUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeHex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part4) ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[part1byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part2byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part3byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part4byte.length];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arraycopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part1byte, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, part1byte.length);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arraycopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part2byte, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result, part1byte.length, part2byte.length);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arraycopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part3byte, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result, part1byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part2byte.length, part3byte.length);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arraycopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part4byte, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result, part1byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part2byte.length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part3byte.length, part4byte.length);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;直接字符串连接并计算MD5=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SecureUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(part1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> part4));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;转义字节数组后拼接并计算MD5=&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SecureUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IoUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)));</span></span></code></pre></div><p>Run screenshot:</p><p><img src="`+i+'" alt="etag2.png"></p><p>As seen here, direct string concatenation does not work, and the computed ETAG value does not match MinIO&#39;s. However, converting to byte arrays, concatenating, and then computing the MD5 value does produce a matching ETAG.</p>',17),p=[l];function k(r,d,E,o,g,y){return e(),t("div",null,p)}const m=a(h,[["render",k]]);export{F as __pageData,m as default};