'use strict';

const path = require('path');

const CONTAINERS_BASE_PATH = 'containers/'

module.exports = function containersAlias(webpackDirName, basePath) {
    return {
        "@AppContainer": path.resolve(webpackDirName, basePath, CONTAINERS_BASE_PATH, 'app/'),
    }
};
