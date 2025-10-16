import { DefaultTheme } from "vitepress";

export const other: Partial<DefaultTheme.Config> = {
  // search: {
  //   provider: "local",
  //   options: {
  //     translations: {
  //       button: {
  //         buttonText: "搜索文档",
  //         buttonAriaLabel: "搜索文档",
  //       },
  //       modal: {
  //         noResultsText: "无法找到相关结果",
  //         resetButtonTitle: "清除查询条件",
  //         footer: {
  //           selectText: "选择",
  //           navigateText: "切换",
  //           closeText: "关闭",
  //         },
  //       },
  //     },
  //   },
  // },

  search: {
    provider: "algolia",
    options: {
      appId: "S6HBZJQITK",
      apiKey: "eb15154460bda601898b06ff89baed80",
      indexName: "MirageMC",
      placeholder: "搜索文档",
      translations: {
        button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
        modal: {
          searchBox: {
            clearButtonTitle: "清除查询条件",
            clearButtonAriaLabel: "清除查询条件",
            closeButtonText: "关闭",
            closeButtonAriaLabel: "关闭",
            placeholderText: "搜索文档",
            placeholderTextAskAi: "向 AI 提问：",
            placeholderTextAskAiStreaming: "回答中...",
            searchInputLabel: "搜索",
            backToKeywordSearchButtonText: "返回关键字搜索",
            backToKeywordSearchButtonAriaLabel: "返回关键字搜索",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
            recentConversationsTitle: "最近的对话",
            removeRecentConversationButtonTitle: "从历史记录中删除对话",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "请检查网络连接",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
          resultsScreen: { askAiPlaceholder: "向 AI 提问： " },
          askAiScreen: {
            disclaimerText: "答案由 AI 生成，可能不准确，请自行验证。",
            relatedSourcesText: "相关来源",
            thinkingText: "思考中...",
            copyButtonText: "复制",
            copyButtonCopiedText: "已复制！",
            copyButtonTitle: "复制",
            likeButtonTitle: "赞",
            dislikeButtonTitle: "踩",
            thanksForFeedbackText: "感谢你的反馈！",
            preToolCallText: "搜索中...",
            duringToolCallText: "搜索 ",
            afterToolCallText: "已搜索",
          },
          footer: {
            selectText: "选择",
            submitQuestionText: "提交问题",
            selectKeyAriaLabel: "Enter 键",
            navigateText: "切换",
            navigateUpKeyAriaLabel: "向上箭头",
            navigateDownKeyAriaLabel: "向下箭头",
            closeText: "关闭",
            backToSearchText: "返回搜索",
            closeKeyAriaLabel: "Esc 键",
            poweredByText: "搜索提供者",
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
