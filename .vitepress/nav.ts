import { DefaultTheme } from "vitepress";

export const nav: Partial<DefaultTheme.Config> = {
  nav: [
    { text: "首页", link: "/" },
    { text: "文档", link: "/start" },
    {
      text: "其他",
      items: [
        { text: "NorthZero的博客", link: "https://nzdnzd.top/" },
        { text: "风绘的小窝", link: "https://blog.fhowo.top/" },
      ],
    },
  ],
};
