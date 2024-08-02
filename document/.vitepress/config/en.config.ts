export default {
  footer: {
      message: 'Publish under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',
      copyright: 'Copyright © 2024 <a href="https://liuxp.me" target="_blank">liuxp.me</a>'
  },
  nav: [
      {text: 'INTRO', link: '/en/guide/intro'},
      {text: 'FAQ', link: '/en/guide/references/faq'},
      {text: 'RELEASED', link: '/en/guide/released'},
  ],
  sidebar: {
      '/en/guide/': [
          {
              text: 'Introduction',
              link: '/en/guide/intro'
          },
          {
              text: 'Change Log',
              link: '/en/guide/released'
          }, {
              text: 'Frontend Guide',
              items: [
                  {
                      text: 'Frontend Module Demo',
                      link: '/en/guide/frontend/module-demo'
                  },
                  {
                      text: 'Frontend Module API',
                      link: '/en/guide/frontend/module-api'
                  },
                  {
                      text: 'Frontend Module Change Log',
                      link: '/en/guide/frontend/module-released'
                  },
              ]
          },{
              text: 'User Guide',
              items: [
                  {
                      text: 'Quick Start',
                      link: '/en/guide/user/quick-start'
                  },
                  {
                      text: 'API',
                      link: '/en/guide/user/api'
                  },
                  {
                      text: 'File Metadata',
                      link: '/en/guide/user/db'
                  },
                  {
                      text: 'Config',
                      link: '/en/guide/user/config'
                  },
              ]
          }, {
              text: 'Developer Guide',
              items: [
                  {
                      text: 'Development Plan',
                      link: '/en/guide/developers/plan'
                  },
                  {
                      text: 'Building & Run',
                      link: '/en/guide/developers/building'
                  },
                  {
                      text: 'Code Structure',
                      link: '/en/guide/developers/framework'
                  },
                  {
                      text: 'Write Code',
                      link: '/en/guide/developers/writing-code'
                  },
                  {
                      text: 'Write Document',
                      link: '/en/guide/developers/writing-documents'
                  },
                  {
                      text: 'Contributors',
                      link: '/en/guide/developers/contributors'
                  },
              ]
          }, {
              text: 'Core Logic',
              items: [
                  {
                      text: 'Upload',
                      link: '/en/guide/core/upload'
                  },
                  {
                      text: 'Download',
                      link: '/en/guide/core/download'
                  },
                  {
                      text: 'Direct Connection',
                      link: '/en/guide/core/direct'
                  },
                  {
                      text: 'Preview',
                      link: '/en/guide/core/preview'
                  },
                  {
                      text: 'Bucket',
                      link: '/en/guide/core/bucket'
                  },
                  {
                      text: 'Permission',
                      link: '/en/guide/core/auth'
                  },
              ]
          }, {
              text: 'References',
              items: [
                  {
                      text: 'FAQ',
                      link: '/en/guide/references/faq'
                  },
                  {
                      text: 'MinIO S3 API',
                      link: '/en/guide/references/minio-s3-api'
                  }
              ]
          }, {
              text: 'MinIO Study',
              items: [
                  {
                      text: 'MinIO Sharding ETAG Generate',
                      link: '/en/guide/study/etag'
                  },
                  {
                      text: 'Nginx Proxy',
                      link: '/en/guide/study/proxy'
                  }
              ]
          }
      ],
  }
}