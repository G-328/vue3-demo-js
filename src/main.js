import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import './utils/drag'
// import 
// import { datg } from './utils/drag'

const app = createApp(App)
  // app.directive("drag", datg)
  app.directive('highlight', {
    beforeMount(el, binding) {
      console.log(el, binding)
      el.style.background = binding.value
    }
  })
  app.use(store)
  app.use(router)
  app.use(ElementPlus)
  app.mount('#app')