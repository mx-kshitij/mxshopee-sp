import { expect } from '@wdio/globals'
import defaultHomepage from '../pageobjects/default.homepage.js';

describe ('Test default gallery widget functions', () => {
    it('should go forward on page in the gallery', async () => {
        await defaultHomepage.open();

        let currentPaging = await defaultHomepage.Gallery.PagingInformation;
        
        (await defaultHomepage.Gallery.PageForward).click();

        await browser.pause(1000);
        await expect(await defaultHomepage.Gallery.PagingInformation).not.toBe(currentPaging);
    });
    
    it('should step to the end of the gallery', async () => {
        let currentPaging = await defaultHomepage.Gallery.PagingInformation;

        (await defaultHomepage.Gallery.StepPageForward).click();

        await browser.pause(1000);
        await expect(await defaultHomepage.Gallery.PagingInformation).not.toBe(currentPaging);
    });

    it('should output paging information', async() => {
        let pi = await defaultHomepage.Gallery.PageCount();
        console.log(pi);
    });

    it('should open the filter widget bar', async() => {
        (await defaultHomepage.Gallery.FilterBarOpener).click();

        await expect(defaultHomepage.Gallery.FilterBar.selectByVisibleText('Search')).toBeDisplayed();
        await browser.pause(2000);
    });
});