import path from 'path'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'

const config: UserConfig = {
    plugins: [
        Voie({
            importMode: 'sync',
        }),
        ViteComponents(),
        PurgeIcons(),
    ],
}

export default config