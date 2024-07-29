import{_ as t,c as d,o as a,aS as e}from"./chunks/framework.CTQzL4Z6.js";const _=JSON.parse('{"title":"File Metadata","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/user/db.md","filePath":"en/guide/user/db.md"}'),s={name:"en/guide/user/db.md"},n=e('<h1 id="file-metadata" tabindex="-1">File Metadata <a class="header-anchor" href="#file-metadata" aria-label="Permalink to &quot;File Metadata&quot;">​</a></h1><p>The data structure design of file metadata can be customized and expanded as needed for the project.</p><h2 id="table-design" tabindex="-1">Table Design <a class="header-anchor" href="#table-design" aria-label="Permalink to &quot;Table Design&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Length</th><th>Not Null</th><th>Virtual</th><th>Key</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>20</td><td>True</td><td>False</td><td>True</td><td>Auto-increment ID</td></tr><tr><td>file_key</td><td>varchar</td><td>50</td><td>True</td><td>False</td><td></td><td>File Key</td></tr><tr><td>file_md5</td><td>varchar</td><td>50</td><td>False</td><td>False</td><td></td><td>File MD5 Value</td></tr><tr><td>file_name</td><td>varchar</td><td>255</td><td>True</td><td>False</td><td></td><td>File Name</td></tr><tr><td>file_mime_type</td><td>varchar</td><td>128</td><td>False</td><td>False</td><td></td><td>MIME Type</td></tr><tr><td>file_suffix</td><td>varchar</td><td>20</td><td>False</td><td>False</td><td></td><td>File Suffix</td></tr><tr><td>file_size</td><td>bigint</td><td>20</td><td>False</td><td>False</td><td></td><td>File Size</td></tr><tr><td>is_preview</td><td>tinyint</td><td>1</td><td>False</td><td>False</td><td></td><td>Preview Available 0: No 1: Yes</td></tr><tr><td>is_private</td><td>tinyint</td><td>1</td><td>False</td><td>False</td><td></td><td>Is Private 0: No 1: Yes</td></tr><tr><td>bucket</td><td>varchar</td><td>20</td><td>True</td><td>False</td><td></td><td>Bucket</td></tr><tr><td>bucket_path</td><td>varchar</td><td>20</td><td>True</td><td>False</td><td></td><td>Bucket Path</td></tr><tr><td>upload_id</td><td>varchar</td><td>255</td><td>False</td><td>False</td><td></td><td>Upload ID</td></tr><tr><td>is_finished</td><td>tinyint</td><td>1</td><td>True</td><td>False</td><td></td><td>Status 0: Incomplete 1: Complete</td></tr><tr><td>is_part</td><td>tinyint</td><td>1</td><td>False</td><td>False</td><td></td><td>Is Part 0: No 1: Yes</td></tr><tr><td>part_number</td><td>int</td><td>4</td><td>False</td><td>False</td><td></td><td>Number of Parts</td></tr><tr><td>create_time</td><td>datetime</td><td></td><td>True</td><td>False</td><td></td><td>Creation Time</td></tr><tr><td>create_user</td><td>varchar</td><td>255</td><td>True</td><td>False</td><td></td><td>Created By</td></tr><tr><td>update_time</td><td>datetime</td><td></td><td>True</td><td>False</td><td></td><td>Update Time</td></tr><tr><td>update_user</td><td>varchar</td><td>255</td><td>True</td><td>False</td><td></td><td>Updated By</td></tr></tbody></table><h2 id="mysql-script" tabindex="-1">MySQL Script <a class="header-anchor" href="#mysql-script" aria-label="Permalink to &quot;MySQL Script&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE `file_metadata_info` (</span></span>\n<span class="line"><span>  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;Primary Key&#39;,</span></span>\n<span class="line"><span>  `file_key` varchar(50) NOT NULL COMMENT &#39;File Key&#39;,</span></span>\n<span class="line"><span>  `file_md5` varchar(50) DEFAULT NULL COMMENT &#39;File MD5&#39;,</span></span>\n<span class="line"><span>  `file_name` varchar(255) NOT NULL COMMENT &#39;File Name&#39;,</span></span>\n<span class="line"><span>  `file_mime_type` varchar(128) DEFAULT NULL COMMENT &#39;MIME Type&#39;,</span></span>\n<span class="line"><span>  `file_suffix` varchar(20) DEFAULT NULL COMMENT &#39;File Suffix&#39;,</span></span>\n<span class="line"><span>  `file_size` bigint(20) DEFAULT NULL COMMENT &#39;File Size&#39;,</span></span>\n<span class="line"><span>  `is_preview` tinyint(1) DEFAULT &#39;0&#39; COMMENT &#39;Preview Available 0: No 1: Yes&#39;,</span></span>\n<span class="line"><span>  `is_private` tinyint(1) DEFAULT &#39;0&#39; COMMENT &#39;Is Private 0: No 1: Yes&#39;,</span></span>\n<span class="line"><span>  `bucket` varchar(20) NOT NULL COMMENT &#39;Bucket&#39;,</span></span>\n<span class="line"><span>  `bucket_path` varchar(20) NOT NULL COMMENT &#39;Bucket Path&#39;,</span></span>\n<span class="line"><span>  `upload_id` varchar(255) DEFAULT NULL COMMENT &#39;Upload ID&#39;,</span></span>\n<span class="line"><span>  `is_finished` tinyint(1) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;Status 0: Incomplete 1: Complete&#39;,</span></span>\n<span class="line"><span>  `is_part` tinyint(1) DEFAULT NULL COMMENT &#39;Is Part 0: No 1: Yes&#39;,</span></span>\n<span class="line"><span>  `part_number` int(4) DEFAULT NULL COMMENT &#39;Number of Parts&#39;,</span></span>\n<span class="line"><span>  `create_time` datetime NOT NULL COMMENT &#39;Creation Time&#39;,</span></span>\n<span class="line"><span>  `create_user` varchar(255) NOT NULL COMMENT &#39;Created By&#39;,</span></span>\n<span class="line"><span>  `update_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;Update Time&#39;,</span></span>\n<span class="line"><span>  `update_user` varchar(255) NOT NULL COMMENT &#39;Updated By&#39;,</span></span>\n<span class="line"><span>  PRIMARY KEY (`id`) USING BTREE,</span></span>\n<span class="line"><span>  KEY `INDEX_KEY` (`file_key`),</span></span>\n<span class="line"><span>  KEY `INDEX_MD5` (`file_md5`)</span></span>\n<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;File Metadata Information Table&#39;;</span></span></code></pre></div>',6),i=[n];function r(l,p,c,T,h,o){return a(),d("div",null,i)}const u=t(s,[["render",r]]);export{_ as __pageData,u as default};
