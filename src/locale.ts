import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zhCN from '../locales/zh-CN.json'

const messages = {
  en,
  'zh-CN': zhCN,
}

const locales = Object.keys(messages)

function createI18nWithLocale(locale: string): any {
  return createI18n({
    legacy: false,
    locale,
    messages,
  })
}
export { messages, locales, createI18nWithLocale }
