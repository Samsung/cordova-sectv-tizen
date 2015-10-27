# cordova-sectv-tizen
`cordova-sectv-tizen` is an TV application library that allows for Cordova-based projects to be built for the 2015's Samsung Tizen TV Platform.
Cordova based applications are, at the core, applications written with web technology: HTML, CSS and JavaScript.

# Supported Platform
* 2015's Samsung Tizen TV

# Project Structure
```
    ./
     |-cordova-js-src/ .... cordova-js sectv-tizen platform implementation
     |  |-plugin/ ......... cordova plugin implementations
     |  |-exec.js ......... cordova/exec module
     |  `-platform.js ..... cordova/platform module having platform definition and bootstrap
     |-www/ ............... Project template for Orsay platform
     |-package.json ....... npm package configuration
     '-README.md .......... this file
```

# How to Build
* Please see [Cordova-js](http://github.com/apache/cordova-js) for more detail.
* Clone the [Cordova-js](http://github.com/apache/cordova-js) project as sibling of this project.
    ```
    ./
     |-cordova-js
     `-cordova-sectv-tizen
    ```

* Add "sectv-tizen" as a target for `Gruntfile.js` in the cordova-js project.
    ```js
    ...
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "compile": {
            ...,
            "sectv-tizen": {}
        },
        "compile-browserify": {
        ...
    });
    ```

* Add "sectv-tizen" property to "cordova-platforms" to the cordova-js project's `package.json` with path to this project as its value.
    ```js
    "cordova-platforms": {
      ...,
      "cordova-sectv-tizen": "../cordova-sectv-tizen"
    }
    ```

* in the `cordova-js` directory's root:
    ```sh
    $ grunt compile:sectv-tizen
    ```

* Above command will creates `cordova-js/pkg/cordova.sectv-tizen.js`. Let's copy the file to `www` directory which is including Orsay Application project template for further use. In the `cordova-js` directory:
    ```sh
    $ cp ./pkg/cordova.sectv-tizen.js ../cordova-sectv-tizen/www/cordova.js
    ```

# How to use
For creating application package for 2015's Tizen TV:

1. Create a Tizen project with Tizen IDE and copy the `www` directory's content to the Tizen project.
2. Copy the built `cordova-js/pkg/cordova.sectv-tizen.js` or `www/cordova.js` to your tizen project directory's root with name `cordova.js`.
3. Build and emulate the tizen project.
* We recommand to use the [grunt-cordova-sectv](http://github.com/Samsung/grunt-cordova-sectv) task for creating the tizen project.

# Known Issues
Not yet
