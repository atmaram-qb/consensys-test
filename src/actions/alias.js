'use strict';

const path = require('path');

const ACTIONS_BASE_PATH = 'actions/'

module.exports = function actionsAlias(webpackDirName, basePath) {
    return {
        "@TestAction": path.resolve(webpackDirName, basePath, ACTIONS_BASE_PATH, 'video-actions'),
    }
};
