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


    win.webContents.openDevTools()
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

app.on('ready', createWindow)


function OK() {
    var fn = document.getElementById('f1').value
    var ln = document.getElementById('f2').value
    var age = document.getElementById('f3').value
    var phone = document.getElementById('f4').value

    if (fn !== '') {

        document.getElementById('d1').innerText = fn
        document.getElementById('d2').innerText = ln
        document.getElementById('d3').innerText = age
        document.getElementById('d4').innerText = phone
    }
    else {
        alert("form pora bharo")
    }



    console.log(abc)
}



