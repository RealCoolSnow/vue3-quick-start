import { createLogger, createStore } from 'vuex'
import app from './modules/app'
import { IS_DEBUG } from '@/constants/env'

export default createStore({
  modules: { app },
  strict: IS_DEBUG,
  plugins: IS_DEBUG ? [createLogger()] : [],
})
