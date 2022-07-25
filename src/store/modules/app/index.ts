// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Commit } from 'vuex'
import { ActionTypes_APP, GetterTypes_APP, MutationTypes_APP } from './types.d'

export interface AppState {
  counter: number
  language: string
}

const app = {
  state: {
    counter: 0,
    language: sessionStorage.getItem('language') || 'en',
  } as AppState,
  mutations: {
    [MutationTypes_APP.SET_LANGUAGE]: (state: AppState, language: string) => {
      state.language = language
      sessionStorage.setItem('language', language)
    },
    [MutationTypes_APP.SET_COUNTER]: (state: AppState, n: number) => {
      state.counter += n
    },
  },
  actions: {
    [ActionTypes_APP.SET_LANGUAGE](
      context: { commit: Commit },
      language: string,
    ) {
      context.commit(MutationTypes_APP.SET_LANGUAGE, language)
    },
  },
  getters: {
    [GetterTypes_APP.COUNTER](state: AppState): number {
      return state.counter
    },
    [GetterTypes_APP.LANGUAGE](state: AppState): string {
      return state.language
    },
  },
}

export default app
