'use strict'

import { app, BrowserWindow, Menu, shell } from 'electron'
import { autoUpdater } from 'electron-updater'
const log = require('electron-log');

// Add the menu module
const menu = require('./menu')
const vertoMenu = menu(app, shell)
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 380,
    height: 700,
    useContentSize: true,
    resizable: false,
    // titleBarStyle: 'hidden',
    title: "Verto wallet",
    icon: `file://${__dirname}/static/icon.png`,
    backgroundColor: "#ffffff",
    center: true,
    vibrancy: "appearance-based",
    webPreferences: {webSecurity: false}
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  Menu.setApplicationMenu(Menu.buildFromTemplate(vertoMenu))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

app.on('ready', () => {
  if (process.env.NODE_ENV === "production") {
    autoUpdater.checkForUpdatesAndNotify();
  }
})

// autoUpdater.on('update-downloaded', () => {
//   mainWindow.webContents.send("updateReady");
//   autoUpdater.quitAndInstall();
//   // process.exit(1);
// })
function sendStatusToWindow(text) {
  log.info(text);
  mainWindow.webContents.send('message', text);
}
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available. Once the download is complete you will need to quit and restart Verto.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})
autoUpdater.on('update-downloaded', (info) => {
  sendStatusToWindow('Restart Verto to open the latest version!');
});
