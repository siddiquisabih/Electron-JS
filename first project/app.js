const electron = require('electron')


const { app, BrowserWindow } = require('electron')
// import  { app, BrowserWindow } from 'electron'

const path = require('path')
const url = require('url')

var win
function createWindow() {

    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))


    // win.webContents.openDevTools()
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

app.on('ready', createWindow)


function OK() {
    // app.quit()
    console.log('hellow')
    alert('sabih siddiqui')
}



