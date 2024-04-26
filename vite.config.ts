import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    // @ts-expect-error
    viteEnv[`import.meta.env.${key}`] = process.env[key]
  }
})

export default defineConfig({
  // alias' does not exist in type 'UserConfigExport'
  //alias: {
  //  '@': require('path').resolve(__dirname, 'src')
  //},
  define: viteEnv,
  plugins: [
    react()
  ]
})