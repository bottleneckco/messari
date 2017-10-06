import { app, BrowserWindow } from 'electron';

let win;

const isDevelopment = process.env.NODE_ENV !== 'production';

let url = isDevelopment
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;

function createWindow() {
  // Initialize the window to specified dimensions
  win = new BrowserWindow({ width: 400, height: 200, frame: false });

  // Specify entry point
  win.loadURL(url);

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
