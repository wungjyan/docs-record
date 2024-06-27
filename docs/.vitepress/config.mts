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
      { text: 'Java学习', link: '/java/' },
    ],

    sidebar: {
      '/java/': [
        {
          text: 'Java学习',
          items: [
            {
              text: '一些概念',
              link: '/java/',
            },
            { text: '第一段 Java 代码', link: '/java/first-java-code' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wungjyan/docs-record' },
    ],
  },
})
