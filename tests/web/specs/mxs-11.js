import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import defaultHomepage from '../pageobjects/Home_Web.js';
import { credentials } from '../variables.js';

describe('Test - User pages through Gallery', () => {

    it('login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);
        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });
    
    it('should step to the end of the gallery', async () => {
        let currentPaging = await defaultHomepage.Gallery.PagingInformation;

        (await defaultHomepage.Gallery.StepPageForward).click();

        await browser.pause(1000);
        await expect(await defaultHomepage.Gallery.PagingInformation).not.toBe(currentPaging);
    });

    it('should open the filter widget bar', async() => {
        (await defaultHomepage.Gallery.FilterBarOpener).click();

        await browser.pause(2000);
    });
});
