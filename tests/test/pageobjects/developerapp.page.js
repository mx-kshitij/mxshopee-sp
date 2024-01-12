import { $ } from '@wdio/globals'
import LocalIPv4Address from 'local-ipv4-address';


class DeveloperApp {
    async isDeveloperApp() {
        let button = await this.getLaunchButton();
        return button != null && typeof button !== 'undefined' && button.isExisting();
    }

    async getLaunchButton() {
        let selector = driver.isIOS ? 
            '//XCUIElementTypeStaticText[@name="Go"]' :
            '//android.widget.Button[@text="LAUNCH"]';
        return $(selector);
    }

    async connect () {
        let button = await this.getLaunchButton();
        let inputSelector = driver.isIOS ?
            "//XCUIElementTypeTextField" :
            "//android.widget.EditText[@content-desc='appUrl']";

        let input = await $(inputSelector);
        let ip = await this.getIpAddress();
        await input.setValue(ip + ":" + this.getPort());
        
        await button.click();
        if (driver.isAndroid) {
            await browser.waitUntil(() => {
                return browser.getCurrentActivity().then((result) => {
                    return result.endsWith(".MendixReactActivity");
                });
            }, 30000, 100);
        }
        
        if (driver.isIOS) {
            // no robust way of knowing the Mendix Native application has been loaded yet.
        }
    }

    async getIpAddress() {
        if (process.env.MXRUNTIME_IP == null) {
            console.log("Guessing IP address...");
            return await LocalIPv4Address();
        }

        return process.env.MXRUNTIME_IP;
    }

    getPort() {
        if (process.env.MXRUNTIME_PORT)
            return process.env.MXRUNTIME_PORT;
        else   
            return "8080";
    }
}

export default new DeveloperApp();
