var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'builds/evebrain-win32-x64/',
    outputDirectory: 'dist/installers/',
    authors: 'Robot in a can Inc.',
    exe: 'evebrain.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));