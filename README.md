# cordova-sectv-tizen
cordova-sectv-tizen is an TV application library that allows for Cordova-based projects to be built for the Samsung Tizen TV Platform. Cordova based applications are, at the core, applications written with web technology: HTML, CSS and JavaScript.

# Requires
* 2015's Samsung Tizen TV
* Samsung Tizen TV SDK (download at [Samsung D-Forum](http://samsungdforum.com))

# How to use
In the 2015's TV
1. Copy the built/cordova.js to your cordova `www` directory root.
2. Insert below code to your `index.html`
```HTML
<script src="cordova.js"></script>
```
3. Package your `www` directory by using Samsung Tizen TV SDK

# Project Structure
```
    ./
     |-src/
     |  |-cordova.js ........ common Cordova stuff
     |  |-common/ ........... base modules shared across platfoms
     |-tasks/ ............... custom grunt tasks
     |-tests/ ............... unit tests
     '-pkg/ ................. generated platform cordova.js files
```

# How to Build

# Known Issues
