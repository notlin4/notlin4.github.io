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
        ['meta', { name: 'theme-color', content: '#7a573d' }],
        ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
        ['link', { rel: 'icon', href: '/images/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'icon', href: '/images/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', href: '/images/favicon-64x64.png', sizes: '64x64' }],
        ['link', { rel: 'icon', href: '/images/favicon-128x128.png', sizes: '128x128' }],
        ['link', { rel: 'icon', href: '/images/favicon-180x180.png', sizes: '180x180' }],
        ['link', { rel: 'icon', href: '/images/favicon-192x192.png', sizes: '192x192' }],
        ['link', { rel: 'icon', href: '/images/favicon-384x384.png', sizes: '384x384' }],
        ['link', { rel: 'apple-touch-icon-precomposed', href: '/images/icon-256x256.png' }],
        ['link', { rel: 'image_src', type: 'image/png', href: '/images/icon-256x256.png' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/icon-256x256.png' }]
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
            text: 'McList 網站',
            link: 'https://www.mc-list.xyz/'
        }, {
            text: '支援 Discord',
            link: 'https://discord.gg/VaQAY2s'
        }, {
            text: '開發者',
            children: [{
                text: '飯糰 Blog',
                link: 'https://haer0248.me/'
            }, {
                text: 'Twitter',
                link: 'https://twitter.com/haer0248'
            }]
        }]
    }),

    plugins,
})

export default config