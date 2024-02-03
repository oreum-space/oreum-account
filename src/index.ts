import './style.css'
import 'oreum-ui/oreum-ui.css'
import App from '@/App.vue'
import { oreumIconsPlugin } from 'oreum-ui'
import oreumIcons from 'oreum-ui/icons.svg'
import router from '@/router'
import { createApp } from 'vue'

createApp(App)
  .use(router)
  .use(oreumIconsPlugin, { oreumIcons }).mount('.app')
