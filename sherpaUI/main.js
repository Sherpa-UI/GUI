const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const dialog = require('electron').dialog;
const Menu = require('electron').Menu;
const shell = require('electron').shell;
const childProcess = require('child_process');
const fs = require('fs-extra');
const defaultMenu = require('electron-default-menu');
const {webContents} = require('electron')

let mainWindow = null;
childProcess.exec('node reactVR/node_modules/react-native/local-cli/cli.js start')

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  //menu
  const menu = defaultMenu(app, shell);
menu.splice(4, 0, {
  label: 'Custom',
  submenu: [
    {
      label: 'Export Project to Desktop',
      click: (item, focusedWindow) => {
        dialog.showMessageBox({
          type: "question",
          message: 'Export to Desktop?',
          buttons: ['OK']
        }, function () {
          exec("cd reactVR && npm run bundle")
          console.log('exporting to desktop')
        })
      }
    }
  ]
})

mainWindow = new BrowserWindow({
  width: 1200,
  height: 800
});

mainWindow.loadURL('file://' + __dirname + '/index.html');

Menu.setApplicationMenu(Menu.buildFromTemplate(menu))

mainWindow.on('closed', () => {
  mainWindow = null;
});
});
