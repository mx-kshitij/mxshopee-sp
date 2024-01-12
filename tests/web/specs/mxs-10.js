import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import { credentials } from '../variables.js';

describe('Test - Anonimous User Login', () => {

    it('should deny access with wrong creds', async () => {
        await LoginPage.login('foo', 'bar!')
        // check the error message - wrong credentials
        const alert = await $('.alert-danger'); 
        await expect(alert).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);

        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });
});
