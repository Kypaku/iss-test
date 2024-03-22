import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vClickOutside from 'click-outside-vue3';


const app = createApp(App).use(vClickOutside)

app.use(createPinia())

app.mount('#app')
