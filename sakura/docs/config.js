const langs = [
  { title: '简体中文', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
  { title: 'English', path: '/en/', matchPath: /^\/en/ }
]

docute.init({
  landing: 'landing.html',
  debug: true,
  // announcement(route) {
  //   const info = { type: 'success' }
  //   if (/\/zh-.+$/.test(route.path)) {
  //     info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">捐赠!</a> 通过 Patron 或者一次性捐赠支持 Docute 的开发。'
  //   } else {
  //     info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">Donate!</a> Support Docute development by becoming a patron or one-time donation.'
  //   }
  //   return info
  // },
  repo: 'honjun/hexo-theme-sakura',
  'edit-link': 'https://github.com/hojundoc/hojundoc.github.io/blob/master/sakura/docs/',
  tocVisibleDepth: 3,
  nav: {
    default: [
      {
        title: '首页', path: '/home'
      },
      {
        title: '贡献', path: '/contributions'
      },
      {
        title: '选择语言', type: 'dropdown', items: langs
      }
    ],
    'en': [
      {
        title: 'Home', path: '/en/'
      },
      {
        title: 'contributions', path: '/en/contributions'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }
    ]
  },
  plugins: [
    // docsearch({
    //   appId: '',
    //   apiKey: '25626fae796133dc1e734c6bcaaeac3c',
    //   indexName: 'docsearch',
    //   tags: ['english', 'zh-Hans'],
    //   url: 'sakura.hojun.cn/docs/'
    // }),
    evanyou()
  ]
})
