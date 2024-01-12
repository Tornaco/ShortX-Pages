module.exports = {
  base: '/ShortX-Pages/',
  theme: 'reco',
  title: 'ShortX',
  description: '系统级指令工具',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "ShortX Wiki",
        items: [
          { text: "Tornaco", link: "https://github.com/tornaco" }
        ]
      }
    ],
    sidebar: [
      {
        title: "欢迎使用",
        path: "/",
        collapsable: false, 
        children: [{ title: "简介", path: "/" }],
      },
      {
        title: "基础教程",
        path: "/post/shortx-install-guide",
        collapsable: true,
        children: [
          { title: "安装与激活", path: "/post/shortx-install-guide" },
          { title: "一键指令和自动指令", path: "/post/shortx-da-rule" },
          { title: "变量", path: "/post/shortx-var" },
          { title: "常用MVEL表达式", path: "/post/shortx-usefull-mvel" },
          { title: "贡献翻译", path: "/post/shortx-translate" },
          { title: "贡献在线指令", path: "/post/shortx-online-repo" },
          { title: "高级版订阅", path: "/post/shortx-subscribe-guide" },
        ]
      } 
    ]
  }
}
