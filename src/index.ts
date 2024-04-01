import '@/styles/index.scss'
import 'oreum-ui/oreum-ui.css'
import App from '@/App.vue'
import oreumIcons from 'oreum-ui/icons.svg'
import router from '@/router'
import store from '@/store'
import { createApp } from 'vue'
import { oreumIconsPlugin } from 'oreum-ui'

createApp(App)
  .use(store)
  .use(router)
  .use(oreumIconsPlugin, { oreumIcons }).mount('.app')
