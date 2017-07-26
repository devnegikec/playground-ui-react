/* eslint-disable */
'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devtool: 'eval-source-map',
    entry: [        
        './src/webpack-path',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index.js')
    ],
        target: 'web',
        output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
    module: {
        loaders: [
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query:{presets:['es2015', 'react']}},
          {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
          {test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url?limit=10000&mimetype=application/font-woff'},
          {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
          {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
          {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
          {test: /\.css$/, loaders: ['style', 'css?sourceMap', 'postcss']}          
        ]
    },
    // module: {        
    //     loaders: [{
    //         {test: /\.jsx?$/,loader: 'babel',query:{presets:['es2015', 'react']}},
    //         {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
    //     }]
    // },
    postcss: ()=> [autoprefixer]
};