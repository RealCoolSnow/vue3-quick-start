import MutationTypes from '../mutation-types'

const app = {
  state: {
    counter: 0,
    language: sessionStorage.getItem('language') || 'en',
  },
  mutations: {
    [MutationTypes.APP.SET_LANGUAGE]: (state: any, language: any) => {
      state.language = language
      sessionStorage.setItem('language', language)
    },
    [MutationTypes.APP.SET_COUNTER]: (state: any, n: number) => {
      state.counter += n
    },
  },
  actions: {

  },
  getters: {

  },
}

export default app
