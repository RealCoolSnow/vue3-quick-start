import path from 'path'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'

const alias = {
    '/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
    alias,
    plugins: [
        Voie(),
        ViteComponents({
            // currently, vite does not provide an API for plugins to get the config https://github.com/vitejs/vite/issues/738
            // as the `alias` changes the behavior of middlewares, you have to pass it to ViteComponents to do the resolving
            alias: alias,
            // Relative paths to the directory to search for components.
            dirs: ['src/components'],
            // Valid file extensions for components.
            extensions: ['vue'],
            // Search for subdirectories
            deep: true
        }),
        PurgeIcons(),
    ],
}

export default config