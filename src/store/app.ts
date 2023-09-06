import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      lang: 'en',
    }
  },
  actions: {
    setLang(lang: string) {
      console.log(`setLang: ${lang}`)
      this.lang = lang
    },
  },
  getters: {
    langFullName: state => `lang-${state.lang}`,
  },
})
