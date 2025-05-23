const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
    width: 250,
    height: 300
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
createWindow()
    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

