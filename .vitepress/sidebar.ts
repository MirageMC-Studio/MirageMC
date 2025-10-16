import { DefaultTheme } from "vitepress";

export const sidebar: Partial<DefaultTheme.Config> = {
  sidebar: [
    {
      items: [
        {
          text: "开始🛫",
          link: "/start",
          items: [
            { text: "简介📃", link: "/intro" },
            { text: "插件🧩", link: "/plugin" },
            { text: "常见问题❓", link: "/faq" },
            { text: "实用网站🌐", link: "/useful-site" },
          ],
        },
      ],
    },
  ],
};
