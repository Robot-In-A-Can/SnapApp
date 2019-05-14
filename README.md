<!-- [![Robot in a Can](https://cdn.shopify.com/s/files/1/1927/6949/files/logoRIAC_230x.png?v=1556658990)](https://robotinacan.com) -->


# Robot in a can Desktop programming interface

### Status
- Builds, packs and installs on windows (win32, x86) through .exe and .msi.

- .exe installer transfers files to `<user>/AppData/Local/evebrain` which is the only installation location supported by Squirrel (see [this issue](https://github.com/aluxian/electron-windows-installer/issues/11)). Also, it creates a desktop shortcut to the target electron app

- .msi simply copies .exe to `Program Files (x86)\evebrain Installer`. It is still necessary to execute the .exe which follows the steps described above (fix redundancy?)

- Issue: Window does not close after clicking on closing button. Workaround: terminate `evebrain` process using Task manager


### Setup for development

> clone this repository and change to 'dev' branch

```shell
$ git clone https://github.com/Robot-In-A-Can/Evebrain-Snap-WebApp.git
$ git checkout dev
```

> After [downloading](https://nodejs.org/en/) npm and nodejs, install project dependencies

```shell
$ npm install

```

Note: There is an automatic post-install script that installs dependencies under the `src` folder too. In case you later on get an error message regarding `electron-squirrel-startup`, you'll have to `npm install` from inside `src`.

### Building and packing
Building populates the directory `builds/<platform>` where `platform` is the targetted platform (win, mac or linux). 
Packing, instead, populates the folder `dist/installers`. So far, only windows installers are supported.

Note: You can find the details for each of the commands in the `scripts` section of `package.json`

> To run the code in src wrapped by a sample electron instance
```shell
$ npm start

```


> To build an electron app for the platform of the local machine (auto-detection, between win,mac and linux)

```shell
$ npm run build:local

```


> To build an electron app for windows
```shell
$ npm run build:win

```


> To build an electron app for mac
```shell
$ npm run build:mac

```


> To build an electron app for linux
```shell
$ npm run build:linux

```


> To build an electron app for all above platforms (all x64)
```shell
$ npm run build:all

```


> To build and pack (create an installer) for the app targetting the Windows platform
```shell
$ npm run pack:win

```