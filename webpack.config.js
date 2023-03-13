'use strict'
let path = require ('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    watch: true,

    devtool: "source-map",

    module: {}
};