import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import { credentials } from '../variables.js';

describe('Test - User signs out', () => {

    it('login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);
        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });

    it('should click sign out', async () => {

        const signOutButton = await $('.mx-name-actionButton2');
        await signOutButton.click();
    });

    it('should be loged out ', async () => {
        // check for any specific element that should be on the Homepage when the user is Anonimous 
        // await browser.pause(4000);

        const alert = await $('.mx-name-actionButton5'); 
        await expect(alert).not.toBeDisplayed();
    });
    
});