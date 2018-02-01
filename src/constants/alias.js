'use strict';

const path = require('path');

const CONSTANTS_BASE_PATH = 'constants/';

module.exports = function constantsAlias(webpackDirName, basePath) {
    return {
        "@AppConstants": path.resolve(webpackDirName, basePath, CONSTANTS_BASE_PATH, 'app'),
    }
};
