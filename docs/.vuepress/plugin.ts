import type { PluginConfig } from '@vuepress/core'
import { seoPlugin } from 'vuepress-plugin-seo2'

const plugins: PluginConfig = [
    seoPlugin({
        hostname: 'https://doc.mc-list.xyz',
        author: {
            name: '猫又おにぎり',
            url: 'https://haer0248.me'
        },
        fallBackImage: '/images/favicon-256x256.png',
        twitterID: 'haer0248',
        ogp: (ogp, page, app) => {
            ogp['og:site_name'] = app.siteData.title
            ogp['og:description'] = ogp['og:description'] || app.siteData.description
            ogp['og:title'] = `${page.title} • ${app.siteData.title}`
            ogp['og:locale'] = app.siteData.lang.replace('-', '_')
            ogp['og:image'] = '/images/open_graph.png'
            ogp['og:image:width'] = '484'
            ogp['og:image:height'] = '252'
            ogp['twitter:card'] = 'summary_large_image'

            return ogp
        }
    })
]

export default plugins