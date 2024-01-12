import { $ } from '@wdio/globals'
import Page from './page.js';
import { appSettings } from "../variables.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername () {
        //return $('.mx-name-loginIdTextBox3 input');
        return $('#usernameInput');     //used for Login.html
    }

    get inputPassword () {
        // return $('.mx-name-passwordTextBox3 input');
        return $('#passwordInput');     //used for Login.html
    }

    get btnSubmit () {
        // return $('.mx-name-signInButton2');
        return $('button[type="submit"]');  //used for Login.html
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        browser.url(`${appSettings.baseUrl}${appSettings.loginUrl}`);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // open () {
    //     return browser.url(`${appSettings.baseUrl}${appSettings.loginUrl}`);
    // }
}

export default new LoginPage();
