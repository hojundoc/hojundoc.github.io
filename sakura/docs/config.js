const langs = [
  { title: '简体中文', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
  { title: 'English', path: '/en/', matchPath: /^\/en/ },
  { title: '繁體中文', path: '/zh-Hant/', matchPath: /^\/zh-Hant/ },
  { title: '日本語', path: '/ja/', matchPath: /^\/ja/ }
]

docute.init({
  landing: 'landing.html',
  debug: true,
  repo: 'honjun/hexo-theme-sakura',
  'edit-link': 'https://github.com/hojundoc/hojundoc.github.io/blob/master/sakura/docs/',
  tocVisibleDepth: 3,
  nav: {
    default: [
      {
        title: 'Home', path: '/home'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }
    ],
    'zh-Hans': [
      {
        title: '首页', path: '/zh-Hans/'
      },
      {
        title: '选择语言', type: 'dropdown', items: langs
      }
    ],
    'zh-Hant': [
      {
        title: '首頁', path: '/zh-Hant/'
      },
      {
        title: '選擇語言', type: 'dropdown', items: langs
      }
    ],
    ja: [
      {
        title: 'はじめに', path: '/ja/'
      },
      {
        title: '言語', type: 'dropdown', items: langs
      }
    ]
  },
  plugins: [
    docsearch({
      appId: '442RTGN46F',
      apiKey: '18dcdc1fddadbf6cc5e514f16d53923d',
      indexName: 'hexo-sakura',
      tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
      url: 'sakura.hojun.cn/docs/'
    }),
    evanyou()
  ]
})
