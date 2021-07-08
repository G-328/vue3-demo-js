import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import directives from './utils/directive'

const app = createApp(App)
  directives(app)
  app.use(store)
  app.use(router)
  app.use(ElementPlus)
  app.mount('#app')