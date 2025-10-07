import { DefaultTheme } from "vitepress";

export const other: Partial<DefaultTheme.Config> = {
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
  docFooter: {
    prev: "上一页",
    next: "下一页",
  },
  outlineTitle: "页面内容",
  returnToTopLabel: "返回顶部",
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
    pattern: "https://github.com/MirageMC-Studio/MirageMC/edit/main/src/:path",
    text: "在 GitHub 上编辑此页面",
  },
};
