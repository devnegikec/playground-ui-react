/* eslint-disable */
var browserSync  = require('browser-sync');

var historyApiFallback = require('connect-history-api-fallback');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config.dev');

const bundler = webpack(config);

browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },
      }),

      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'src/*.html'
  ]
});