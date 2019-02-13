/* eslint-disable*/
const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: {
        app: "./app.js",
        libs: ['lodash']
    },
    output: {
        path: `${__dirname}/dist/js`,
        filename: "[name].js" //[name] zmienai entry na nazwy wygenerowanych bundli
    },
    module: {
        rules: [
            {
            test: /\.css/, //sprawdza czy loader jest plikiem css
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        }
    ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new LodashModuleReplacementPlugin,
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            files: [
                'dist/js/*.html',
                'dist/js/*.css'
            ],
            server: { baseDir: ['dist/js'] }
          })

    ]
};
