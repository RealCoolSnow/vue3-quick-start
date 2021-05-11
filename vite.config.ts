/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import { viteMockServe } from 'vite-plugin-mock'

const resolve = (dir: string) => path.join(__dirname, dir)
// doc#https://vitejs.dev/config/#config-file
const config: UserConfig = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    target: 'es2015',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
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
  server: {
    /** 本地请求转发 */
    proxy: {
      '/api/': {
        target: 'https://url.devserver/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
}

export default config
