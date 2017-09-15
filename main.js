const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // Initialize the window to specified dimensions
  win = new BrowserWindow({ width: 400, height: 200, frame: false });

  // Specify entry point
  win.loadURL('http://localhost:8000');

  // Show dev tools
  win.webContents.openDevTools();

  // Remove window once app is closed
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
