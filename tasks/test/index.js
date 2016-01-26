'use strict';

/**
 * @module tasks/test
 */
module.exports = {

    /**
     * Run end to end tests
     * @see module:tasks/test/run-e2e-tests
     */
    testRunE2E: require('./run-e2e-tests'),

    /**
     * Run sitespeed tests
     * @see module:tasks/test/sitespeed-io
     */
    siteSpeed: require('./sitespeed-io'),

    /**
     * Webdriver CSS visual regression tests
     * @see module:tasks/test/webdriver-css
     */
    webdriverCSS: require('./webdriver-css'),

    /**
     * Webdriver IO
     * @see module:tasks/test/webdriver-io
     */
    webdriverIO: require('./webdriver-io')
};
