'use strict';

const path = require('path');
const webpackConfig = require('./webpack.config');

const ENV_PRODUCTION = process.env.KARMA_ENV === 'production';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [{
        pattern: 'node_modules/zone.js/dist/zone.js',
        included: true,
        watched: false
      }, {
        pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js',
        included: true,
        watched: false
      }, {
        pattern: 'node_modules/zone.js/dist/jasmine-patch.js',
        included: true,
        watched: false
      }, {
        pattern: 'node_modules/reflect-metadata/Reflect.js',
        included: true,
        watched: false
      }, {
        pattern: 'node_modules/rxjs/**',
        included: false,
        watched: false
      }, {
        pattern: 'node_modules/@angular/**/*.js',
        included: false,
        watched: false
      }, {
        pattern: 'src/**/*.spec.ts',
        included: true
      }
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: ENV_PRODUCTION ? false : true,
    browsers: ['Chrome'],
    singleRun: ENV_PRODUCTION ? true : false
  });
};
