'use strict';

const path = require('path');

const REDUCERS_BASE_PATH = 'reducers/'

module.exports = function reducerAlias(webpackDirName, basePath) {
    return {
        "@RootReducer": path.resolve(webpackDirName, basePath, REDUCERS_BASE_PATH),
        "@VideosReducer": path.resolve(webpackDirName, basePath, REDUCERS_BASE_PATH, 'videos'),
    }
};
