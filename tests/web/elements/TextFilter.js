import { $ } from '@wdio/globals';
import MxElement from './MxElement.js';

/**
 * Example
 *   
    (await defaultHomepage.Gallery.FilterBarOpener).click();
    let filter = await defaultHomepage.filter1.filterInput;
    filter.setValue('asd');
 */
class TextFilterElement extends MxElement {
    /**
     * Initialize gallery element with name from Studio Pro
     * @param {string} name - Property -> Common -> Name
     */
    constructor(name) {
        super();
        this.name = name;
        this.namedClass = `mx-name-${name}`; // access element by named class
    }

    get filterContainer() {
        return $(`.${this.namedClass}.filter-container`);
    }

    get filterInput() {
        return $(`.${this.namedClass} .filter-input`);
    }
}

export default TextFilterElement;