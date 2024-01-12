import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login_Web.js'
import { credentials } from '../variables.js';

describe('Test - Opening a product details', () => {

    it('login with valid credentials', async () => {
        await LoginPage.login(credentials.username, credentials.password);
        // check that NO error message is displayed
        const alert = await $('.alert-danger'); 
        await expect(alert).not.toBeDisplayed();
    });

    it('should search a product', async () => {
        return true;
    });
    
    it('should clicks on a product', async () => {
        return true;
    });

    it('should open a product detail', async () => {
        return true;
    });
});