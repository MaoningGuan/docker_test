module.exports = {
    title: '网络服务器',
    description: '网络服务器',
    theme: 'yuu',
    themeConfig: {
        yuu: {
			defaultDarkTheme: true,
            defaultColorTheme: 'blue',
            disableThemeIgnore: true,
            labels: {
				darkTheme: '深夜模式', // Default is "Enable Dark Theme?"
			}
		},
        nav: [
          { text: "首页", link: "/" },
          { text: "快速开始", link: "/handbook/1" },
        //   { text: "SFTP Server", link: "/handbook/2" },
        //   { text: "DNS Server", link: "/handbook/1" },
        //   { text: "SYSLOG Server", link: "/handbook/1" },
        //   { text: "SMTP Server", link: "/handbook/1" },
        //   { text: "DHCP Server", link: "/handbook/1" },
        //   { text: "SNMP Server", link: "/handbook/1" },
          {
            text: "使用指南",
            items: [
              { text: "HTTPS Server", link: "/handbook/1" },
              { text: "SFTP Server", link: "/handbook/2" }
            ]
          },
          { text: "更新日志", link: "/handbook/1" },
          { text: "关于", link: "/handbook/1" }
        ],
        sidebar: [
        //     {
        //       title: "欢迎学习",
        //       path: "/",
        //       collapsable: false,  // 是否折叠
        //       children: [{ title: "博客简介", path: "/" }],
        //     },
            {
              title: "使用指南",
              path: "/handbook/1",
              collapsable: false,
              children: [
                { title: "第一篇", path: "/handbook/1" },
                { title: "第二篇", path: "/handbook/2" },
              ]
            }
          ]
    }
  }