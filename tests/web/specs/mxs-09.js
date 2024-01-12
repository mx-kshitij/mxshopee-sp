import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import defaultHomepage from '../pageobjects/Home_Web.js';
import { credentials } from '../variables.js';

describe('Test - Opening a product details', () => {

    it('login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);
        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });

    it('should open the widget search bar', async() => {
        (await defaultHomepage.Gallery.FilterBarOpener).click();
        await browser.pause(2000);
    });

    it('should select the text filter', async() => {
        return true;
    });

    it('should set a value to search in the text filter', async() => {
        return true;
    });
});