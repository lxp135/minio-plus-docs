import{_ as o}from"./chunks/文件下载时序图.Dr1oZu96.js";import{_ as t,c as a,o as n,j as e,a as s}from"./chunks/framework.4okfb48a.js";const B=JSON.parse('{"title":"下载","description":"","frontmatter":{},"headers":[],"relativePath":"guide/core/download.md","filePath":"guide/core/download.md"}'),l={name:"guide/core/download.md"},d=e("h1",{id:"下载",tabindex:"-1"},[s("下载 "),e("a",{class:"header-anchor",href:"#下载","aria-label":'Permalink to "下载"'},"​")],-1),r=e("p",null,[e("img",{src:o,alt:"文件下载逻辑时序图"})],-1),i=e("p",null,"浏览器向服务端发起文件读取请求，服务端会根据fileKey入参取得文件的元数据信息。获取文件元数据信息后，根据元数据信息中的是否私有字段和所有者字段判断是否具备文件读取权限。",-1),c=e("ul",null,[e("li",null,"当用户具备读取权限时，服务端请求MinIO服务器获取经过预签名的文件访问地址返回给浏览器。"),e("li",null,"当用户不具备读取权限时，返回给浏览器无访问权限提示信息。")],-1),_=e("p",null,"浏览器拿到真实文件地址后，读取文件并显示或下载。",-1),p=[d,r,i,c,_];function u(h,m,f,g,x,w){return n(),a("div",null,p)}const N=t(l,[["render",u]]);export{B as __pageData,N as default};