import{_ as a,c as i,aP as o,o as l}from"./chunks/framework.DmU5fmqA.js";const p=JSON.parse('{"title":"Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/released.md","filePath":"en/guide/released.md"}'),r={name:"en/guide/released.md"};function t(n,e,d,s,u,c){return l(),i("div",null,e[0]||(e[0]=[o('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h1><h2 id="v1-0-1-2024-10-30" tabindex="-1">v1.0.1 (2024-10-30) <a class="header-anchor" href="#v1-0-1-2024-10-30" aria-label="Permalink to &quot;v1.0.1 (2024-10-30)&quot;">​</a></h2><h3 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><p>Addressed some code smells identified by Sonar scans.</p><h3 id="compatibility-adjustments" tabindex="-1">Compatibility Adjustments <a class="header-anchor" href="#compatibility-adjustments" aria-label="Permalink to &quot;Compatibility Adjustments&quot;">​</a></h3><p>Considering that many projects are still on older versions of Spring Boot, support has been downgraded to Spring Boot 2.6.x. The Spring Boot version has been downgraded from 2.7.18 to 2.6.13.</p><h2 id="v1-0-0-2024-08-02" tabindex="-1">v1.0.0 (2024-08-02) <a class="header-anchor" href="#v1-0-0-2024-08-02" aria-label="Permalink to &quot;v1.0.0 (2024-08-02)&quot;">​</a></h2><h3 id="bug-fixes-1" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-1" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><ul><li>Fixed non-compliant javadoc.</li></ul><h3 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Official release of version 1.0.0.</li><li>Released SpringBoot3 Starter.</li><li>Adjusted package structure, focusing on SpringBoot3 while simultaneously supporting SpringBoot2 and SpringBoot3.</li><li>Rewrote class, method, and attribute annotations using OpenAPI3 standard.</li></ul><h3 id="dependency-upgrades" tabindex="-1">Dependency Upgrades <a class="header-anchor" href="#dependency-upgrades" aria-label="Permalink to &quot;Dependency Upgrades&quot;">​</a></h3><ul><li>Upgraded <code>knife4j</code> version from 2.0.9 to 4.4.0.</li><li>Upgraded <code>maven-javadoc-plugin</code> version from 2.9.1 to 3.8.0.</li></ul><h2 id="v0-1-4-2024-07-29" tabindex="-1">v0.1.4 (2024-07-29) <a class="header-anchor" href="#v0-1-4-2024-07-29" aria-label="Permalink to &quot;v0.1.4 (2024-07-29)&quot;">​</a></h2><h3 id="bug-fixes-2" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-2" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><ul><li>Fixed null pointer issue when querying shard information in MinIO.</li><li>Resolved code issues flagged by SonarQube.</li></ul><h3 id="new-features-1" tabindex="-1">New Features <a class="header-anchor" href="#new-features-1" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Introduced SonarQube for code scanning.</li><li>Modified file preview interface to return a thumbnail for images and a file type icon for non-images.</li><li>In the demo project, default to guest when user information is empty.</li><li>In the demo project, database configuration uses environment variables.</li></ul><h3 id="dependency-upgrades-1" tabindex="-1">Dependency Upgrades <a class="header-anchor" href="#dependency-upgrades-1" aria-label="Permalink to &quot;Dependency Upgrades&quot;">​</a></h3><ul><li>Upgraded <code>minio</code> version from 8.3.3 to 8.5.11.</li><li>Upgraded <code>spring-boot-dependencies</code> version from 2.6.11 to 2.7.18.</li></ul><h2 id="v0-1-3-2024-07-15" tabindex="-1">v0.1.3 (2024-07-15) <a class="header-anchor" href="#v0-1-3-2024-07-15" aria-label="Permalink to &quot;v0.1.3 (2024-07-15)&quot;">​</a></h2><h3 id="bug-fixes-3" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-3" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><ul><li>Fixed issue where md5 calculation would freeze for large file uploads on the upload.html test page.</li><li>The backend StorageService.createFile method now correctly generates different fileKeys for the same file uploaded by the same user.</li></ul><h3 id="new-features-2" tabindex="-1">New Features <a class="header-anchor" href="#new-features-2" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Added createBigFile large file upload interface to the StorageService class.</li></ul><h2 id="v0-1-2-2024-06-18" tabindex="-1">v0.1.2 (2024-06-18) <a class="header-anchor" href="#v0-1-2-2024-06-18" aria-label="Permalink to &quot;v0.1.2 (2024-06-18)&quot;">​</a></h2><h3 id="bug-fixes-4" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-4" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><p>None</p><h3 id="new-features-3" tabindex="-1">New Features <a class="header-anchor" href="#new-features-3" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Added a new module <code>minio-plus-core-spring-boot-starter</code> that only publishes Service layer interfaces without Controllers.</li><li>Added a demo module <code>minio-plus-application-schedule</code>, which implements a scheduled file cleanup strategy using <code>minio-plus-core-spring-boot-starter</code>.</li><li>Deleted the original image upload logic and switched to a lazy loading strategy, generating preview images on first access.</li></ul><h2 id="v0-1-1-2024-06-12" tabindex="-1">v0.1.1 (2024-06-12) <a class="header-anchor" href="#v0-1-1-2024-06-12" aria-label="Permalink to &quot;v0.1.1 (2024-06-12)&quot;">​</a></h2><h3 id="bug-fixes-5" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-5" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><ul><li>Removed unused dependencies <code>spring-cloud-dependencies</code> and <code>spring-cloud-alibaba-dependencies</code>.</li></ul><h3 id="new-features-4" tabindex="-1">New Features <a class="header-anchor" href="#new-features-4" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Added UserHolder to <code>minio-plus-extension</code> for storing and retrieving logged-in user IDs, and implemented user login logic in the demo project with an interceptor.</li><li>Adjusted publishing logic to ignore <code>minio-plus-application</code> and <code>minio-plus-application-mysql</code>.</li></ul><h3 id="dependency-upgrades-2" tabindex="-1">Dependency Upgrades <a class="header-anchor" href="#dependency-upgrades-2" aria-label="Permalink to &quot;Dependency Upgrades&quot;">​</a></h3><ul><li>Upgraded <code>mybatisplus</code> from 3.5.3.1 to 3.5.7.</li><li>Upgraded <code>lombok</code> from 1.18.24 to 1.18.32.</li><li>Upgraded <code>thumbnailator</code> from 0.4.8 to 0.4.20.</li><li>Upgraded <code>hutool</code> from 5.8.15 to 5.8.28.</li></ul><h2 id="v0-1-0-2024-06-11" tabindex="-1">v0.1.0 (2024-06-11) <a class="header-anchor" href="#v0-1-0-2024-06-11" aria-label="Permalink to &quot;v0.1.0 (2024-06-11)&quot;">​</a></h2><p>First preview version released, implementing basic upload, preview, and download functionalities.</p><h3 id="bug-fixes-6" tabindex="-1">BUG Fixes <a class="header-anchor" href="#bug-fixes-6" aria-label="Permalink to &quot;BUG Fixes&quot;">​</a></h3><p>None</p><h3 id="new-features-5" tabindex="-1">New Features <a class="header-anchor" href="#new-features-5" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li>Implemented upload logic, including instant upload, shard upload, and resumable upload.</li><li>Implemented download logic, including image preview and file download.</li><li>Implemented thumbnail generation logic, automatically generating thumbnails upon image upload.</li><li>Implemented bucket strategies, automatically creating buckets based on file types.</li><li>Provided file metadata implementation based on MySQL.</li></ul>',43)]))}const g=a(r,[["render",t]]);export{p as __pageData,g as default};