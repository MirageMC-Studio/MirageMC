// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导航栏毛玻璃
// https://vitepress.yiov.top/style.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E6%AF%9B%E7%8E%BB%E7%92%83
import './blur.css'

// 进度条
// https://github.com/ZhongxuYang/vitepress-plugin-nprogress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

// 阅读增强菜单
// https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-enhanced-readabilities/#%E6%B7%BB%E5%8A%A0-vitepress-%E4%B8%BB%E9%A2%98%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

// 首页下划线
// https://lumen.theojs.cn/guide/underline#%E5%BC%95%E5%85%A5%E7%BB%84%E4%BB%B6
import { Underline } from "@theojs/lumen";

// giscus 评论
// https://vitepress.yiov.top/plugin.html#%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots

      // 为较宽的屏幕的导航栏添加阅读增强菜单
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  
  enhanceApp: (ctx: EnhanceAppContext) => {
    const { app } = ctx;
    vitepressNprogress(ctx);
    app.component("Home", Underline);
  },

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus 配置
    giscusTalk(
      {
        repo: "MirageMC-Studio/miragemc-studio.github.io",
        repoId: "R_kgDOP9VFcQ",
        category: "General",
        categoryId: "DIC_kwDOP9VFcc4CwUtZ",
        mapping: "url",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "top",
        theme: "preferred_color_scheme",
        lang: "zh-CN",
        loading: "lazy",
        crossorigin: "anonymous",
      },
      {
        frontmatter,
        route,
      },
      // 默认值为true，表示已启用，此参数可以忽略；
      // 如果为false，则表示未启用
      // 您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  }

} satisfies Theme;
