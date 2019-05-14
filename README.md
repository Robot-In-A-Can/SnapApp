<!-- [![Robot in a Can](https://cdn.shopify.com/s/files/1/1927/6949/files/logoRIAC_230x.png?v=1556658990)](https://robotinacan.com) -->


# Robot in a can Desktop programming interface

### Status
- Builds, packs and installs on windows (win32, x86) through .exe and .msi.

- .exe installer transfers files to <user>/AppData/Local/evebrain which is the only installation location supported by Squirrel (see [this issue](https://github.com/aluxian/electron-windows-installer/issues/11)). Also, it creates a desktop shortcut to the target electron app

- .msi simply copies .exe to `Program Files (x86)\evebrain Installer`. It is still necessary to execute the .exe which follows the steps described above (fix redundancy?)


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

Note: So far, you'll have to `npm install` from inside `src` too due to a dependency specific to installer (to be fixed).

### Building and packing
Building populates the directory builds/<platform> where platform is the targetted platform. Packing, instead, populates the folder dist/installers. So far, only windows installers are supported.
You can find the description for each of the commands in the `scripts` section of `package.json`

> To run the code in src wrapped by a sample electron instance
```shell
$ npm start

```

> To run build an electron app for machine on which the code is running

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

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
