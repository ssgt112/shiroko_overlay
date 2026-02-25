const { app, BrowserWindow, screen } = require("electron");

let win;

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: 250,          // GIF width
    height: 250,         // GIF height
    x: width - 260,      // horizontal position (right side)
    y: height - 260,     // vertical position (bottom)
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false
  });

  win.loadFile("index.html");
});