import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'

createApp(App).use(router).use(store).mount('#app')
