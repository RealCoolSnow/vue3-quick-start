import { createLogger, createStore } from 'vuex'
import type { AppState } from './modules/app'
import app from './modules/app'
import { IS_DEBUG } from '@/constants/env'

export interface State {
  app: AppState
}

export default createStore<State>({
  modules: { app },
  strict: IS_DEBUG,
  plugins: IS_DEBUG ? [createLogger()] : [],
})
