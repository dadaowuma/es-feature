import ElementPlus from 'unplugin-element-plus/vite'

// @see https://vitepress.dev/zh/reference/site-config
export default {
  title: 'ECMAScript特性',
  description: '记录ECMAScript各版本特性',
  base: '/es-feature/',

  // @see https://vitepress.dev/zh/reference/site-config#head
  head: [['script', {}, `console.log('自定义脚本');`]],

  themeConfig: {
    // aside: 'right',
    // @see https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: 'deep',
      label: '大纲',
    },
    // @see https://vitepress.dev/zh/reference/default-theme-config#docfooter
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // @see https://vitepress.dev/zh/reference/default-theme-config#lightmodeswitchtitle
    // @see https://vitepress.dev/zh/reference/default-theme-config#darkmodeswitchtitle
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',

    // @see https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dadaowuma/es-feature' },
    ],

    nav: [
      { text: 'ES6', link: '/es2015' },
      { text: 'ES7', link: '/es2016' },
      { text: 'ES8', link: '/es2017' },
      { text: 'ES9', link: '/es2018' },
      { text: 'ES10', link: '/es2019' },
      { text: 'ES11', link: '/es2020' },
      { text: 'ES12', link: '/es2021' },
      { text: 'ES13', link: '/es2022' },
      { text: 'ES14', link: '/es2023' },
      { text: 'ES15', link: '/es2024' },
      { text: 'ES16', link: '/es2025' },
    ],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '时间轴', link: '/timeline' },
      { text: 'ES6/ES2015', link: '/es2015' },
      { text: 'ES7/ES2016', link: '/es2016' },
      { text: 'ES8/ES2017', link: '/es2017' },
      { text: 'ES9/ES2018', link: '/es2018' },
      { text: 'ES10/ES2019', link: '/es2019' },
      { text: 'ES11/ES2020', link: '/es2020' },
      { text: 'ES12/ES2021', link: '/es2021' },
      { text: 'ES13/ES2022', link: '/es2022' },
      { text: 'ES14/ES2023', link: '/es2023' },
      { text: 'ES15/ES2024', link: '/es2024' },
      { text: 'ES16/ES2025', link: '/es2025' },
    ],
  },

  // https://vitepress.dev/zh/reference/site-config#vite
  vite: {
    // Vite 配置选项
    // 参考： https://element-plus.org/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5
    plugins: [
      ElementPlus(),
    ],
    ssr: {
      /**
       * @see https://cn.vite.dev/config/ssr-options#ssr-noexternal
       */
      noExternal: ['element-plus']
    }
  }
}
