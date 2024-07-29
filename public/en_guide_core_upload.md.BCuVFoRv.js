import{_ as e,a}from"./chunks/文件上传时序图.Bu2nI8-S.js";import{_ as i,c as t,o as n,aS as r}from"./chunks/framework.CTQzL4Z6.js";const b=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/core/upload.md","filePath":"en/guide/core/upload.md"}'),s={name:"en/guide/core/upload.md"},l=r('<h1 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-label="Permalink to &quot;Upload&quot;">​</a></h1><p>/TODO Upload Process Activity Diagram</p><h2 id="file-transfer-in-seconds" tabindex="-1">file transfer in seconds <a class="header-anchor" href="#file-transfer-in-seconds" aria-label="Permalink to &quot;file transfer in seconds&quot;">​</a></h2><p><img src="'+e+'" alt="file transfer in seconds sequence diagram"></p><p>When users repeatedly upload the same file, a complete file upload operation is required each time, which leads to redundancy in the file upload process, wasting users&#39; time and server network IO, and occupying unnecessary server disk space with duplicate files. To address these two issues, minio-plus supports the instant upload feature, which solves the problem of repeated file uploads in traditional file uploads, improves file transfer efficiency and user experience, and reduces the storage space usage of the file server. The main technical issues involved in implementing instant upload are generating a unique identifier for the file and detecting file duplication.</p><ul><li>File Unique Identifier Generation: On the browser side, the MD5 hash algorithm is used to encode the file being transferred. The encoding result is a string that serves as the file&#39;s unique identifier.</li><li>File Duplication Detection: On the server side, the received file unique identifier is searched in the database. If the same file unique identifier is found in the database, it is determined that the file exists and does not need to be transferred again.</li></ul><h2 id="chunked-upload" tabindex="-1">Chunked Upload <a class="header-anchor" href="#chunked-upload" aria-label="Permalink to &quot;Chunked Upload&quot;">​</a></h2><p>Chunked upload is a technique that divides large files into multiple segments for concurrent or sequential upload. It offers several benefits:</p><ul><li>Improved Transfer Speed: When uploading a large file, dividing it into chunks and uploading multiple chunks concurrently, rather than uploading the entire large file sequentially, can maximize bandwidth utilization and thus speed up the upload.</li><li>Support for Resumable Upload: Chunked upload is a prerequisite for resumable upload technology. To implement resumable upload, chunked upload must be supported first.</li></ul><p><img src="'+a+'" alt="File Upload Sequence Diagram"></p><h2 id="resumable-upload" tabindex="-1">Resumable Upload <a class="header-anchor" href="#resumable-upload" aria-label="Permalink to &quot;Resumable Upload&quot;">​</a></h2><p>Resumable upload relies on chunking technology and is an important means to improve availability. Its advantages include:</p><ul><li>Saving Time, Reducing Network IO, and Reducing Disk IO: When a file transfer encounters issues and fails, only the unfinished chunks need to be retransmitted, rather than restarting the entire transfer task.</li><li>Increased Transfer Reliability: It can prevent the entire file from needing to be retransmitted due to network fluctuations or other reasons. No longer afraid of unexpected network disconnection. Especially useful for large file transfers.</li><li>Pause and Resume Anytime: Users can pause or interrupt the transfer during the process, and resumable upload allows for convenient recovery of the transfer task.</li></ul><p>/TODO Resumable Upload Sequence Diagram</p>',14),o=[l];function d(u,p,c,h,f,m){return n(),t("div",null,o)}const k=i(s,[["render",d]]);export{b as __pageData,k as default};
