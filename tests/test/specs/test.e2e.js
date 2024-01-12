import { expect } from '@wdio/globals'
import DeveloperApp from '../pageobjects/developerapp.page.js'

describe('Testing a Mendix Application', () => {

    beforeEach(async() => {
        if (await DeveloperApp.isDeveloperApp()) {
            console.log("Is developer app!");
            await DeveloperApp.connect();
        }
    });

    it('can find search results', async () => {
        var letsGoBtn = await $('android=new UiSelector().resourceId("introScreen1$buttonDone")');
        await letsGoBtn.waitForDisplayed({ timeout: 30000 });
        await letsGoBtn.click();

        var loginBtn = await $('android=new UiSelector().resourceId("container11")');
        await loginBtn.waitForDisplayed({ timeout: 30000 });
        await loginBtn.click();
      });
})

