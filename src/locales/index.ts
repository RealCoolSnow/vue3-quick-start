import { createI18n } from 'vue-i18n'
import en from './messages/en.json'
import zhCN from './messages/zh-CN.json'

export const messages = {
  en,
  'zh-CN': zhCN,
}

export const locales = Object.keys(messages)

export const i18n = createI18n({
  locale: 'en',
  messages,
})

