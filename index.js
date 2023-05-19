const { app, BrowserWindow } = require('electron')

app.disableHardwareAcceleration()

const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 420,
      height: 1280,
      minWidth: 4.5*96,
      minHeight: 1280,
      resizable: false,
      autoHideMenuBar: true,
    })
  
    mainWindow.once("ready-to-show", () => {
      mainWindow.show()
  })

  mainWindow.loadFile("./index.html");
}

app.whenReady().then(() => {
    createWindow()
})