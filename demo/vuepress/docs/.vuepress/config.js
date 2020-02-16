module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'hexo-sakura',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'hexo-sakura',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    logo: '/img/sakura.png',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Guide', link: '/guide/'},
          { text: 'About', link: '/About'},
          { text: 'Donate', link: '/Donate'},
        ],
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '指南', link: '/zh/guide/'},
          { text: '关于', link: '/zh/About'},
          { text: '赞赏', link: '/zh/Donate'},
        ],
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南', '深入'),
        }
      }
    }
  }
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
      ]
    }
  ]
}