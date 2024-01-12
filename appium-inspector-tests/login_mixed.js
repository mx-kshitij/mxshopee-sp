// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js
const {remote} = require('webdriverio');
async function main () {
  const caps = {
  "platformName": "Android",
  "appium:app": "[path to app]",
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

  const el1 = await driver.$("xpath://android.widget.TextView[@text=\"LETS GO\"]");
  await el1.click();
  await wait(2000);
  const el2 = await driver.$("xpath://android.widget.TextView[@text=\"\"]");
  await wait(2000);
  await el2.click();
  await wait(3000);
  await driver.touchAction({
    action: 'tap', x: 697, y: 1629
  });
  await driver.touchAction({
    action: 'tap', x: 226, y: 1789
  });
  await driver.touchAction({
    action: 'tap', x: 275, y: 1629
  });
  await driver.touchAction({
    action: 'tap', x: 382, y: 1629
  });
  const el3 = await driver.$("xpath://android.widget.EditText[@resource-id=\"textBox4\"]");
  await el3.click();
  await driver.touchAction({
    action: 'tap', x: 1012, y: 1629
  });
  await driver.touchAction({
    action: 'tap', x: 115, y: 1789
  });
  await driver.touchAction({
    action: 'tap', x: 231, y: 1793
  });
  await driver.touchAction({
    action: 'tap', x: 213, y: 1789
  });
  await driver.touchAction({
    action: 'tap', x: 169, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 914, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 386, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 333, y: 1780
  });
  await driver.touchAction({
    action: 'tap', x: 62, y: 1491
  });
  await driver.touchAction({
    action: 'tap', x: 182, y: 1491
  });
  await driver.touchAction({
    action: 'tap', x: 284, y: 1487
  });
  await driver.touchAction({
    action: 'tap', x: 67, y: 2086
  });
  await driver.touchAction({
    action: 'tap', x: 67, y: 1780
  });
  const el4 = await driver.$("accessibility id:Login");
  await el4.click();
}
main().catch(console.log);