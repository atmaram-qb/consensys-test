'use strict';

const path = require('path');

module.exports = function rootAlias (webpackDirName, basePath) {
    return {
        "@ReduxStore": path.resolve(webpackDirName, basePath, 'store'),
        "@RootRouter": path.resolve(webpackDirName, basePath, 'router'),
    }
};
