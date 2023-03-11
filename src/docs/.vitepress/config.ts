/*
 * @Date: 2023-03-11 02:55:40
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 10:11:56
 * @FilePath: \ReBack\my-ui\src\docs\.vitepress\config.ts
 * @Description:
 */
import { defineConfig } from 'vitepress'
import demoblock from 'vitepress-demoblock'

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      // link: "/components/",
      collapsed: false,
      items: [
        { text: "Button 按钮", link: "/components/button" }
      ],
    },
    { text: "导航", link: "/components/button" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
};

export default defineConfig({
  outDir: '../dist',
  lang: 'zh-CN',
  title: 'simple-ui',
  description: '一个简单的ui组件库',
  themeConfig: {
    sidebar,
    footer: {
      copyright: 'Copyright © 2023-present aibo'
    }
  },
  markdown: {
    config: md => {
      md.use(demoblock)
    }
  }
})

// const config = {
//   themeConfig: {
//     sidebar,
//   },
// };
// export default config;
