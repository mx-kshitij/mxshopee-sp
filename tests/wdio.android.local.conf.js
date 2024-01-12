import { config as baseConfig } from "./wdio.base.conf.js"; 

export const config = {
    ...baseConfig,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        'platformName': 'Android',
        'appium:automationName': 'uiautomator2',
        'appium:app': 'app/app-dev-debug.apk',
        'appium:autoGrantPermissions': true,
        'appium:autoAcceptAlerts': true
    }]
};
