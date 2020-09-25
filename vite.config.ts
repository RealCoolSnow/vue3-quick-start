/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import path from 'path'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'

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
  ],
}

export default config
