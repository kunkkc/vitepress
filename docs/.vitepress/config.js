import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "喊你不戴帽子",
  description: "Wishing You Wealth",

  lastUpdated: true,

  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    i18nRouting: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "导航",
        items: [
          { text: "区块链导航", link: "/blockchain-nav/" },
          { text: "AI 导航", link: "/ai-nav/" },
          { text: "前端导航", link: "/nav/" },
        ],
      },
      { text: "Mirror", link: "/mirror/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "本页目录",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "祝你发财~",
      copyright: "Copyright ©2023",
    },
    darkModeSwitchLabel: "外观",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
});
