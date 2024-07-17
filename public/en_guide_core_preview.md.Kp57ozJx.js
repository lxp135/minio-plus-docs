import{_ as e}from"./chunks/缩略图.Cytr7C9o.js";import{_ as a,c as i,o as t,a3 as s}from"./chunks/framework.BrTuXGod.js";const g=JSON.parse('{"title":"Thumbnail","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/core/preview.md","filePath":"en/guide/core/preview.md"}'),n={name:"en/guide/core/preview.md"},r=s('<h1 id="thumbnail" tabindex="-1">Thumbnail <a class="header-anchor" href="#thumbnail" aria-label="Permalink to &quot;Thumbnail&quot;">​</a></h1><p><img src="'+e+'" alt="Thumbnail Generation Sequence Diagram"></p><p>When a user first accesses the image preview interface, a thumbnail is automatically generated. The compression maintains the original aspect ratio of the image, and the thumbnail is stored in the thumbnail bucket with the same MD5 name.</p><ul><li>Thumbnail: By default, the image is compressed to a width of 300 pixels while maintaining the aspect ratio.</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>If the original image size is smaller than the thumbnail compression size, the original image is stored.</p></div>',5),o=[r];function l(c,m,h,p,u,_){return t(),i("div",null,o)}const f=a(n,[["render",l]]);export{g as __pageData,f as default};
