import './styles/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createI18nWithLocale } from './locale'
import store from './store'
import { GetterTypes } from './store/types'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const i18n = createI18nWithLocale(store.getters[GetterTypes.APP.LANGUAGE])

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(router)

app.mount('#app')
