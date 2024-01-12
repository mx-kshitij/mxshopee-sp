# An example Mendix application with Web and Native tests

## Mendix Native
The tests include can be executed against the Mx Shopee project.
It will execute a series of functional UI tests and should work against a developer and appstore build.

### Installation
If you haven't installed Appium yet, perform the following steps (for global installation):
- [Windows] `npm install -g appium`
- [MacOS] `sudo npm install -g appium`

And install the drivers:
- [Android] `android driver install uiautomator2`
- [iOS] `android driver install xcuitest`

### Developer app notes
Awarenesss for the developer app has been built into the `beforeEach` method of the tests. When the screen of the developer app is shown, it will enter the IP address of the machine where Studio Pro is running and assumes port 8080.

If turns out not to be the right guessed IP, you can change this by setting the environment variables `MXRUNTIME_IP` and `MXRUNTIME_PORT`.

- MacOS: `export MXRUNTIME_IP=10.0.0.2`
- Windows: `set MXRUNTIME_IP=10.0.0.2`

## Run locally for Android
The configuration used for starting tests on android is `wdio.android.local.conf.js`. It should work against the adb device authenticated to your workstation.
It uses the included APK located at `app/app-dev-debug.apk`. 

To start the test use `npm run wdio-android-local`

## Run locally for iOS
The configuration used for starting tests on android is `wdio.ios.local.conf.js`. 
Make sure:
- The device and platform configured is present at the simulator installed on your machine (or physical device).
- The path to the app is correct (pointing to the product of the Xcode build).
- The app is build with the correct architecture (matching your simulator or physical device).

To start the test use `npm run wdio-ios-local`

