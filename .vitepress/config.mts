import { defineConfig } from "vitepress";
import vitepressProtectPlugin from "vitepress-protect-plugin"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  assetsDir: "assets",
  outDir: "./.vitepress/dist",
  srcDir: "src",

  title: "MirageMC",
  titleTemplate: ":title | MirageMC",
  description: "MirageMC，一个Minecraft互通纯净生存服。",

  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  appearance: true,
  lastUpdated: true,
  cleanUrls: true,

  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
    plugins: [
      vitepressProtectPlugin({
        disableF12: false, // 禁用F12开发者模式
        disableCopy: false, // 禁用文本复制
        disableSelect: false, // 禁用文本选择
      }),
    ],
  },

  sitemap: {
    hostname: "https://miragemc.top",
  },

  markdown: {
    math: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/assets/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/markdown-examples" },
      {
        text: "其他",
        items: [
          { text: "NorthZero的博客", link: "https://nzdnzd.top/" },
          { text: "风绘的小窝", link: "https://blog.fhowo.top/" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Test", link: "/test" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Level 1",
        items: [
          {
            text: "Level 2",
            items: [
              {
                text: "Level 3",
                items: [],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/MirageMC-Studio/MirageMC" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一页", //Next page
      next: "下一页", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    
    lastUpdated: {
      text: "上次更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    notFound: {
      quote: "如果方向不变，继续前行，你可能会到达所想象的终点✨",
      linkText: "返回首页",
    },

    footer: {
      message: "Released under the CC BY-NC-SA 4.0 License.",
      copyright: "Copyright © 2025-present MirageMC-Studio",
    },

    editLink: {
      pattern:
        "https://github.com/MirageMC-Studio/MirageMC/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});
