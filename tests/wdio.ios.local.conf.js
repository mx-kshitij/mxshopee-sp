import { config as baseConfig } from "./wdio.base.conf.js"; 

export const config = {
    ...baseConfig,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        'platformName': 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/arjenlammers/Library/Developer/Xcode/DerivedData/NativeTemplate-emioudjymfguqbfzwlzbipahvmmq/Build/Products/Debug-iphonesimulator/MxShopeeDev.app',
        'appium:autoGrantPermissions': true,
        'appium:autoAcceptAlerts': true,
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:platformVersion': '17.0'
    }]
};
