import Page from './page.js';
import GalleryElement from '../elements/Gallery.js';

/**
 * sub page containing specific selectors and methods for default MxShopee homepage
 * Extended through gallery widget test function
 */

class defaultHomepage extends Page {
    constructor() {
        super();

        // Import a gellery widget to use it for testing (Parameter == Name (Common) from Studio Pro)
        // Possible function tests are implemented in the class
        this.Gallery = new GalleryElement('gallery1');
    }

}

export default new defaultHomepage();
