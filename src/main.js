import { createApp } from 'vue'
import App from './App.vue'
//
import router from '@/router'
import store from '@/stores'
import components from '@/components/index'
import iconComponents from '@/assets/icons/index'

const app = createApp(App)

app.use(store)
app.use(router)

const allComponents = [...components, ...iconComponents]

allComponents.map(component => {
  app.component(component.name, component.component)
})

app.mount('#app')
