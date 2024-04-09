import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/': [{
      text: '首頁',
      children: [
        '/',
      ]
    }
  ]
}

export default sidebar