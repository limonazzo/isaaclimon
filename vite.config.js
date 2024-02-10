import { resolve } from 'path'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default {
    root: root,
    build: { 
      outDir: outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          es: resolve(root,'es.html')
        }
      }
    },
    plugins: [
        ViteMinifyPlugin({}),
    ],
}
