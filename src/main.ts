import './styles/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createI18nWithLocale } from './locale'
import { useAppStore } from './store/app'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const i18n = createI18nWithLocale('en')
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')
