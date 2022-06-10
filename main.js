const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1300,
        height: 773,
        autoHideMenuBar: true,
        //titleBarStyle: 'hidden'
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow()
})