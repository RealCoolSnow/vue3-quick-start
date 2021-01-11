/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import { viteMockServe } from 'vite-plugin-mock'

const alias = {
  '/@': path.resolve(__dirname, 'src'),
}
// doc#https://vitejs.dev/config/#config-file
const config: UserConfig = {
  alias,
  build: {
    target: 'es2015',
  },
  plugins: [
    Vue(),
    Voie({
      importMode: 'sync',
    }),
    ViteComponents(),
    viteMockServe({
      mockPath: 'mock',
      watchFiles: true,
      localEnabled: process.env.NODE_ENV === 'development',
    }),
  ],
}

export default config
