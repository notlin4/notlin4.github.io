import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/': [{
      text: '首頁',
      children: [
        '/',
        '/change-log',
        '/terms',
        '/privacy',
      ]
    }, {
      text: '玩家',
      children: [
        '/player/',
        '/player/ServerInfo',
        '/player/search',
        '/player/api',
      ]
    }, {
      text: '服主',
      children: [
        '/owner/server-create',
        '/owner/server-verify',
        '/owner/server-done',
        '/owner/mailbox',
      ]
    }, {
      text: '廣告',
      children: [
        '/advertise/permission',
        '/advertise/payment'
      ]
    }, {
      text: '其他',
      children: [
        '/other/bind-discord',
        '/other/banner',
        '/other/tools',
      ]
    }
  ]
}

export default sidebar