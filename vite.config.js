import { resolve } from 'path'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default {
    root: resolve(__dirname, 'src'),
    build: { outDir: resolve(__dirname, 'dist') },
    plugins: [
        ViteMinifyPlugin({}),
    ],
}