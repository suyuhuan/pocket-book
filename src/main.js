const {app, ipcMain, Menu} = require('electron')
const AppWindow = require('./AppWindow')
const isDev = require('electron-is-dev')

const urlLocation = isDev ? "http://localhost:3000": " "

let mainWindow

app.on('ready',()=>{
    const mainWindowConfig = {
        width:640,
        height:700,
    }

    mainWindow = new AppWindow(mainWindowConfig,urlLocation)
    mainWindow.on('closed', ()=> {
        mainWindow = null
    })
})