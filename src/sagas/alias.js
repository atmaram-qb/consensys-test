'use strict';

const path = require('path');

const SAGAS_BASE_PATH = 'sagas/'

module.exports = function sagasAlias(webpackDirName, basePath) {
    return {
        "@RootSaga": path.resolve(webpackDirName, basePath, SAGAS_BASE_PATH),
        "@AppSaga": path.resolve(webpackDirName, basePath, SAGAS_BASE_PATH, 'app'),
    }
};
