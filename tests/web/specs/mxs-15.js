import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import { credentials } from '../variables.js';

describe('Test - My orders review', () => {

    it('login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);
        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });
    
    it('should clicks on "My orders"', async () => {
        return true;
    });

    it('should search for an order', async () => {
        return true;
    });
    
    it('should clicks on an order', async () => {
        return true;
    });

    it('should open an order detail', async () => {
        return true;
    });

});