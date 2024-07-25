export default {
  footer: {
    message: '根据 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a> 许可证发布',
    copyright: 'Copyright © 2024 <a href="https://liuxp.me" target="_blank">liuxp.me</a>'
},
nav: [
    {text: '指引', link: '/guide/intro', activeMatch: '/zh/guide/'},
    {text: '常见问题', link: '/guide/references/faq', activeMatch: '/zh/faq/'},
    {text: '更新日志', link: '/guide/released'},
],
sidebar: {
    '/guide/': [
        {
            text: '首页',
            link: '/guide/intro'
        },
        {
            text: '更新日志',
            link: '/guide/released'
        }, {
            text: '前端组件手册',
            items: [
                {
                    text: '组件使用示例',
                    link: '/guide/frontend/module-demo'
                },
                {
                    text: '组件API',
                    link: '/guide/frontend/module-api'
                },
                {
                    text: '组件更新日志',
                    link: '/guide/frontend/module-released'
                },
            ]
        },{
            text: '用户手册',
            items: [
                {
                    text: '快速开始',
                    link: '/guide/user/quick-start'
                },
                {
                    text: 'API接口',
                    link: '/guide/user/api'
                },
                {
                    text: '文件元数据',
                    link: '/guide/user/db'
                },
                {
                    text: '配置文件',
                    link: '/guide/user/config'
                },
            ]
        }, {
            text: '开发者手册',
            items: [
                {
                    text: '开发计划',
                    link: '/guide/developers/plan'
                },
                {
                    text: '构建与运行',
                    link: '/guide/developers/building'
                },
                {
                    text: '代码结构',
                    link: '/guide/developers/framework'
                },
                {
                    text: '提交代码',
                    link: '/guide/developers/writing-code'
                },
                {
                    text: '编写文档',
                    link: '/guide/developers/writing-documents'
                },
                {
                    text: '团队成员',
                    link: '/guide/developers/contributors'
                },
            ]
        }, {
            text: '核心机制',
            items: [
                {
                    text: '上传',
                    link: '/guide/core/upload'
                },
                {
                    text: '下载',
                    link: '/guide/core/download'
                },
                {
                    text: '客户端直连',
                    link: '/guide/core/direct'
                },
                {
                    text: '缩略图',
                    link: '/guide/core/preview.md'
                },
                {
                    text: '桶策略',
                    link: '/guide/core/bucket'
                },
                {
                    text: '权限控制',
                    link: '/guide/core/auth'
                },
            ]
        }, {
            text: '参考资料',
            items: [
                {
                    text: 'FAQ',
                    link: '/guide/references/faq'
                },
                {
                    text: 'MinIO S3 接口',
                    link: '/guide/references/minio-s3-api'
                }
            ]
        }, {
            text: 'MinIO 研究',
            items: [
                {
                    text: 'MinIO 分片 ETAG 生成机制',
                    link: '/guide/study/etag'
                },
                {
                    text: 'Nginx 代理',
                    link: '/guide/study/proxy'
                }
            ]
        }
    ],
}
}