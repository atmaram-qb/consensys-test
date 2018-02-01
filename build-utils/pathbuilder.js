const path = require('path');

function buildAliasConfig() {
    const aliasFilePaths = [
        "./src",
        "./src/containers/",
        "./src/components/",
        "./src/reducers/",
        "./src/sagas/",
        "./src/actions/",
        "./src/constants/",
        "./src/services/",
        "./src/styles/"
    ];

    const aliasFileName = "alias.js";

    let aliasConfig = { };

    aliasFilePaths.forEach(function (filePath) {
        const fileContent = require( path.resolve(filePath, aliasFileName) )(__dirname, '../src');
        if (fileContent) {
            Object.assign(aliasConfig, fileContent);
        }
    });

    return aliasConfig;
}

module.exports = {
    buildAliasConfig
};