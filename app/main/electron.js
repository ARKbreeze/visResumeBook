/**
 * @desc electron 主入口
 */

const path = require('path');
const { app, BrowserWindow } = require('electron');

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建主窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // node环境集成
      nodeIntegration: true,
      devTools: true,
      // contextIsolation: false,
    },
  });

  // 加载主窗口
  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:7001');
  } else {
    mainWindow.loadURL(`file://${path.resolve(__dirname, '../../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
