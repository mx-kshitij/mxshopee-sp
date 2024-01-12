// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js
const {remote} = require('webdriverio');
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:app": "[path to apk]",
  "appium:snapshotMaxDepth": 59,
  "appium:customSnapshotTimeout": 50000,
  "appium:automationName": "uiautomator2",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constel1 = awaitdriver.$("xpath://android.widget.TextView[@text=\"LETS GO\"]");
  awaitel1.click();
  constel2 = awaitdriver.$("accessibility id:Log in");
  awaitel2.click();
  constel4 = awaitdriver.$("xpath://android.widget.EditText[@resource-id=\"textBox3\"]");
  awaitel4.click();
  awaitel4.addValue("User");
  constel5 = awaitdriver.$("xpath://android.widget.EditText[@resource-id=\"textBox4\"]");
  awaitel5.click();
  awaitel5.addValue("Password123!");
  constel6 = awaitdriver.$("accessibility id:Login");
  awaitel6.click();
  constel7 = awaitdriver.$("xpath://android.widget.TextView[@resource-id=\"actionButton2$caption\"]");
  awaitel7.click();
}

main().catch(console.log);