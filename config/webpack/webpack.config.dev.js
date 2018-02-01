'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../dist/');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

const devConfig = webpackMerge(webpackConfig, {
    devtool: 'source-map',
    output: {
        path: buildPath,
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader', options: {
                            sourceMap: true,
                            config: { path: './config/postcss.config.js' }
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: buildPath,
        compress: true,
        port: 9000,
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = devConfig;