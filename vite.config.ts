import { join } from 'path'
import Vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
// import viteImagemin from 'vite-plugin-imagemin'

const resolve = (dir: string) => join(__dirname, dir)

// https://github.com/vbenjs/vite-plugin-imagemin
/*
const imageCompress = viteImagemin({
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false,
  },
  optipng: {
    optimizationLevel: 7,
  },
  mozjpeg: {
    quality: 50,
  },
  pngquant: {
    quality: [0.8, 0.9],
    speed: 4,
  },
  svgo: {
    plugins: [
      {
        name: 'removeViewBox',
      },
      {
        name: 'removeEmptyAttrs',
        active: false,
      },
    ],
  },
})
*/
// doc#https://vitejs.dev/config/#config-file
const config: UserConfig = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    target: 'es2015',
    // vite3 use already made esbuild the default minifier for both JS and CSS
    // https://vitejs.dev/blog/announcing-vite3.html#bundle-size-reduction
    /*
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 所有console
        // pure_funcs: ['console.log'], // 单独指定
        drop_debugger: true,
      },
    }, */
    /* 如需分包时开启 */
    /*
    rollupOptions: {
      output: {
        // 方式-1:所有依赖都分包
        // manualChunks(id) {
        //   if (id.includes('node_modules'))
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
        // },
        // 方式-2:只对大的依赖分包
        manualChunks: {
          vant: ['vant'], // 要分包的依赖
        },
      },
    }, */
  },
  plugins: [
    Vue(),
    Pages(),
    ViteComponents(),
    // gzip压缩 https://github.com/anncwb/vite-plugin-compression
    viteCompression(),
    viteMockServe({
      mockPath: 'src/mock',
      watchFiles: true,
      localEnabled: process.env.NODE_ENV === 'development',
    }),
    // imageCompress,
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
