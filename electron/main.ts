/*
 * @Author: Marshall
 * @Date: 2023-07-15 08:33:34
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-15 15:25:17
 * @Description: 
 * @FilePath: /template-electron-vue3/electron/main.ts
 */
import { app, BrowserWindow } from 'electron'
import path from 'node:path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 960,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // 设置是否在页面中启用nodejs集成模式
      contextIsolation: false // 设置是否启用上下文隔离模式
    }
  })
  
  if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL); // 使用vite开发服务的url路径访问应用
	} else {
		win.loadFile(path.join(__dirname, '../dist/index.html')); // 打包后使用文件路径访问应用
	}
}

app.whenReady().then(createWindow)