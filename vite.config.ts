/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import path from 'path'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgPlugin = require('vite-plugin-svg')

const alias = {
  '/@/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
  alias,
  plugins: [
    Voie({
      importMode: 'sync',
    }),
    ViteComponents({
      alias,
    }),
    PurgeIcons(),
    svgPlugin(),
  ],
}

export default config
