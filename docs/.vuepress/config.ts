import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

import sidebar from './sidebar'
import plugins from './plugin'

const config = defineUserConfig({
    base: '/',
    lang: 'zh-TW',
    title: '中文常見問題百科',
    description: '',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'theme-color', content: '#7a573d' }]
    ],
    
    // theme and its config
    theme: defaultTheme({
        home: '/',
        logo: '/images/favicon-64x64.png',
        sidebarDepth: 3,
        sidebar,
        repo: 'notlin4/notlin4.github.io',
        docsRepo: 'notlin4/notlin4.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        editLinkPattern: ':repo/edit/:branch/:path',
        editLinkText: '在 Github 查看此頁面',
        lastUpdated: true,
        lastUpdatedText: '最後更新',
        contributors: false,
        contributorsText: '作者',
        backToHome: '返回首頁',
        openInNewWindow: '在新視窗中開啟',
        toggleColorMode: '切換色彩模式',
        toggleSidebar: '切換選單列',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '此頁面不存在'
        ],
        navbar: [{
            text: 'Discord',
            link: 'https://tsaitou7361.github.io/discord'
        }, 
        {
            text: '開發者',
            children: [{
                text: 'notlin4',
                link: 'https://notlin4.github.io'
            }, {
                text: 'Tsaitou7361',
                link: 'https://tsaitou7361.github.io'
            }]
        }]
    }),

    plugins,
})

export default config