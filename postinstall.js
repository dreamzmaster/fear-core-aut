/* eslint no-console: 0 */

'use strict';

var execSync = require('child_process').execSync;

execSync('node ./node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update', {
    stdio: 'inherit'
});
