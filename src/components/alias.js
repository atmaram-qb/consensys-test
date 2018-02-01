'use strict';

const path = require('path');

const COMPONENTS_BASE_PATH = 'components/';

module.exports = function componentsAlias(webpackDirName, basePath) {
    return {
        "@VideosListComponent": path.resolve(webpackDirName, basePath, COMPONENTS_BASE_PATH, 'videos-list/'),
        "@VideoDetailComponent": path.resolve(webpackDirName, basePath, COMPONENTS_BASE_PATH, 'video-detail/'),
        "@LoaderComponent": path.resolve(webpackDirName, basePath, COMPONENTS_BASE_PATH, 'loader/')
    }
};
