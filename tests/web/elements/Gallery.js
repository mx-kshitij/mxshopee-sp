import { $ } from '@wdio/globals';
import MxElement from './MxElement.js';

class GalleryElement extends MxElement {
    /**
     * Initialize gallery element with name from Studio Pro
     * @param {string} name - Property -> Common -> Name
     */
    constructor(name) {
        super();
        this.name = name;
        this.namedClass = `mx-name-${name}`; // access element by named class
    }

    /**
     * Get Text from paging information ('1 to 5 of 74')
     */
    get PagingInformation() {
        return $(`.${this.namedClass} .paging-status`).getText();
    }

    /**
     * Returns information about paging (visible offset - from-to, all items count)
     * @returns {object} {from: int, to: int, count: int}
     */
    async PageCount() {
        let pagingInformation = await $(`.${this.namedClass} .paging-status`).getText();
        let piSplit = pagingInformation.split(' ');
        if (piSplit.length > 0) {
            return {
                from: piSplit[0],
                to  : piSplit[2],
                count:piSplit[4]
            }
        } else return {from: 0, to: 0, count: 0};
    }

    /**
     * Button to go forward one page
     */
    get PageForward() {
        return $(`.${this.namedClass} .pagination-button .forward`).parentElement().parentElement();
    }

    /**
     * Button to step forward to the end
     */
    get StepPageForward() {
        return $(`.${this.namedClass} .pagination-button .step-forward`).parentElement().parentElement();
    }

    /**
     * Get filter bar
     */
    get FilterBar() {
        return $(`.${this.namedClass} section.widget-gallery-filter`);
    }

    /**
     * Get opener of the filter bar (click)
     */
    get FilterBarOpener() {
        return $(`.${this.namedClass} section.widget-gallery-filter .mx-groupbox-header`);
    }
}

export default GalleryElement;