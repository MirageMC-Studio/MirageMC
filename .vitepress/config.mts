import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { nav } from "./nav";
import { socialLinks } from "./socialLinks";
import { other } from "./other";

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
  },

  sitemap: {
    hostname: "https://miragemc.top",
  },

  markdown: {
    math: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/assets/logo.svg",
    outline: "deep",
    externalLinkIcon: false,

    ...nav,
    ...sidebar,
    ...socialLinks,

    ...other,
  },
});
