'use strict';

const webpack = require('webpack');
const path = require('path');

const { API_BASE_URL, API_KEY } = require('../api/api.config');
const aliasConfig = require('../../build-utils/pathbuilder').buildAliasConfig();

const config = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/index.jsx',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?localIdentName=[local]', 'postcss-loader']
            }
        ]
    },
    resolve: {
        alias: aliasConfig,
        extensions: [".js", ".jsx", ".css", ".scss"]
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            API_BASE_URL,
            API_KEY
        }),
    ]
};

module.exports = config;
