/*
 * @Author: Marshall
 * @Date: 2023-07-15 15:19:29
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-15 15:19:30
 * @Description: 
 * @FilePath: /template-electron-vue3/vite.config copy.ts
 */
/*
 * @Author: Marshall
 * @Date: 2023-07-15 08:31:32
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-15 09:37:53
 * @Description: 
 * @FilePath: /template-electron-vue3/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: 'electron/main.ts',
      vite: {
        build: {
          outDir: 'build'
        }
      }
    })
  ],
})
