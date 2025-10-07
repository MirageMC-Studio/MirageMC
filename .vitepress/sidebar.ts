import { DefaultTheme } from "vitepress";

export const sidebar: Partial<DefaultTheme.Config> = {
  sidebar: [
    {
      items: [
        {
          text: "MirageMC",
          items: [
            { text: "开始", link: "/start" },
            { text: "关于", link: "/about" },
            { text: "常见问题解答", link: "/faq" },
            { text: "实用网站", link: "/useful-sites" },
          ],
        },
      ],
    },
  ],
};
