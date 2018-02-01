'use strict';

const path = require('path');

const STYLES_BASE_PATH = 'styles/'

module.exports = function stylesAlias(webpackDirName, basePath) {
    return {
        "@GlobalStyles": path.resolve(webpackDirName, basePath, STYLES_BASE_PATH, 'styles'),
    }
};
