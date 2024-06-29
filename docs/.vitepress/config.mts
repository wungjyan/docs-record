import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '瓶子笔记',
  description: '前端开发者的学习笔记，不止前端',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Typescript', link: '/ts/' },
    ],

    sidebar: {
      '/ts/': [
        {
          text: 'Typescript',
          items: [
            { text: '介绍', link: '/ts/' },
            { text: '原始值类型', link: '/ts/primitive-values-type' },
            { text: '数组和元组类型', link: '/ts/array-and-tuple' },
            {
              text: '使用接口描述对象类型',
              link: '/ts/object-type-and-interface',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wungjyan/docs-record' },
    ],
  },
})
