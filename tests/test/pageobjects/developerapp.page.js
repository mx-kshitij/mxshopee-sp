import { $ } from '@wdio/globals'
import LocalIPv4Address from 'local-ipv4-address';


class DeveloperApp {
    isDeveloperApp() {
        let button = $("//android.widget.Button[@text='LAUNCH']");
        return button != null;
    }

    async connect () {
        let button = $("//android.widget.Button[@text='LAUNCH']");
        let input = $("//android.widget.EditText[@content-desc='appUrl']");
        let ip = await this.getIpAddress();
        await input.setValue(ip + ":" + this.getPort());
        
        await button.click();
        await browser.waitUntil(() => {
            return browser.getCurrentActivity().then((result) => {
                return result.endsWith(".MendixReactActivity");
            });
        }, 30000, 100);
    }

    async getIpAddress() {
        if (process.env.MXRUNTIME_IP == null) {
            console.log("Guessing IP address...");
            return await LocalIPv4Address();
        }

        return process.env.MXRUNTIME_IP;
    }

    getPort() {
        return "8080";
    }
}

export default new DeveloperApp();
