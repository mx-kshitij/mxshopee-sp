// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import {remote} from 'webdriverio';
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
  await driver.touchAction([
    { action: 'press', x: 564, y: 2188 },
    { action: 'moveTo', x: 546, y: 102 },
    'release'
  ]);
  await driver.touchAction({
    action: 'tap', x: 497, y: 178
  });
  await driver.touchAction({
    action: 'tap', x: 852, y: 1944
  });
  await driver.touchAction({
    action: 'tap', x: 852, y: 1944
  });
  await driver.touchAction({
    action: 'tap', x: 994, y: 1940
  });
  await driver.touchAction({
    action: 'tap', x: 328, y: 1940
  });
  await driver.touchAction({
    action: 'tap', x: 138, y: 439
  });
  await driver.touchAction({
    action: 'tap', x: 817, y: 621
  });
  await driver.touchAction({
    action: 'tap', x: 688, y: 1616
  });
  await driver.touchAction({
    action: 'tap', x: 688, y: 1616
  });
  await driver.touchAction({
    action: 'tap', x: 271, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 1016, y: 1931
  });
  await driver.touchAction({
    action: 'tap', x: 1016, y: 1931
  });
  await driver.touchAction({
    action: 'tap', x: 222, y: 1789
  });
  await driver.touchAction({
    action: 'tap', x: 280, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 382, y: 1620
  });
  await driver.touchAction({
    action: 'tap', x: 568, y: 608
  });
  await driver.touchAction({
    action: 'tap', x: 1012, y: 1629
  });
  await driver.touchAction({
    action: 'tap', x: 115, y: 1784
  });
  await driver.touchAction({
    action: 'tap', x: 231, y: 1784
  });
  await driver.touchAction({
    action: 'tap', x: 231, y: 1784
  });
  await driver.touchAction({
    action: 'tap', x: 160, y: 1625
  });
  await driver.touchAction({
    action: 'tap', x: 901, y: 1633
  });
  await driver.touchAction({
    action: 'tap', x: 901, y: 1633
  });
  await driver.touchAction({
    action: 'tap', x: 901, y: 1633
  });
  await driver.touchAction({
    action: 'tap', x: 981, y: 1944
  });
  await driver.touchAction({
    action: 'tap', x: 981, y: 1944
  });
  await driver.touchAction({
    action: 'tap', x: 382, y: 1629
  });
  await driver.touchAction({
    action: 'tap', x: 328, y: 1780
  });
  await driver.touchAction({
    action: 'tap', x: 75, y: 1482
  });
  await driver.touchAction({
    action: 'tap', x: 75, y: 1482
  });
  await driver.touchAction({
    action: 'tap', x: 976, y: 1944
  });
  await driver.touchAction({
    action: 'tap', x: 178, y: 1482
  });
  await driver.touchAction({
    action: 'tap', x: 280, y: 1482
  });
  await driver.touchAction({
    action: 'tap', x: 80, y: 2091
  });
  await driver.touchAction({
    action: 'tap', x: 67, y: 1780
  });
  await driver.touchAction({
    action: 'tap', x: 564, y: 910
  });
  await driver.touchAction({
    action: 'tap', x: 453, y: 515
  });
  await driver.deleteSession();
}

main().catch(console.log);