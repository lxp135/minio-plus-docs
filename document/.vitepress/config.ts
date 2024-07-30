import { defineConfig } from 'vitepress'

import enConfig from './config/en.config'
import zhConfig from './config/zh.config'
import { mdPlugin } from './plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/minio-plus-docs/",
  cacheDir: '../cache',
  // 站点地图
  sitemap: {
    hostname: 'https://minioplus.liuxp.me',
    lastmodDateOnly: true,
  },
  // 对 markdown 的配置
  markdown: {
    toc: {
      level: [1, 2, 3, 4], // 指定标题的层级
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: 'src/zh',
      title: 'MinIO-Plus',
      description: '成为 MinIO 最好的搭档',
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'src/en',
      title: 'MinIO-Plus',
      description: 'Be MinIO\'s best partner',
      themeConfig: enConfig,
    },
  },
  head: [
    ['meta', { name: 'author', content: 'liuxp' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'minio, minio-plus minio tool',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {}, `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"CDqGooQbS8dts6eI",ck:"CDqGooQbS8dts6eI",hashMode:true});`],
  ],
  assetsDir: 'public',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lxp135/minio-plus' },

    ],
    search: {
      provider: 'algolia',
      options: {
        appId: '5CNF3IR0F6',
        apiKey: '078458c650c76087af15e90d03e28618',
        indexName: 'minioplus-liuxp',
        placeholder: 'Search Doc',
      },
    },
    ...zhConfig,
  },
  markdown: {
    config: md => mdPlugin(md),
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '@',
          customResolver(source, importer, options) {
            if (!importer) {
              return this.resolve(source, importer, options)
            }
            const [location] = importer.split('src')
            const realSource = source.replace('@', `${location}src`)
            return this.resolve(realSource, importer, options)
          },
        },
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://mpdemo.liuxp.me',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  },
})
