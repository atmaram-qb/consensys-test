'use strict';

const path = require('path');

const SERVICES_BASE_PATH = 'services/';

module.exports = function servicesAlias(webpackDirName, basePath) {
    return {
        "@VideoService": path.resolve(webpackDirName, basePath, SERVICES_BASE_PATH, 'video'),
    }
};
