'use strict';

const path = require('path');

const UTILS_BASE_PATH = 'utils/'

module.exports = function utilsAlias(webpackDirName, basePath) {
    return {
        "@Utils": path.resolve(webpackDirName, basePath, UTILS_BASE_PATH),
    }
};
