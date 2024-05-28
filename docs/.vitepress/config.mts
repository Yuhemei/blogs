/*
 * @Author: hemei yuhemei8088@163.com
 * @Date: 2024-05-28 10:04:19
 * @LastEditors: hemei
 * @LastEditTime: 2024-05-28 10:11:15
 * @Description:配置项
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '贺美的官方博客',
  description: '一个地方,一块农场',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Yuhemei' }]
  }
});
