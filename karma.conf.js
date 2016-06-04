'use strict';

const path = require('path');

const ENV_PRODUCTION = process.env.KARMA_ENV === 'production';

let config = (config) => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
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
        pattern: 'node_modules/angular2/**/*.js',
        included: false,
        watched: false
      }, {
        pattern: 'src/**/*.spec.ts',
        included: true
      }
    ],
    // list of files to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js'],
      },
      module: {
        loaders: [{
          test: /\.json$/,
          loader: 'json'
        }, {
          test: /\.ts$/,
          loader: 'awesome-typescript'
        }, {
          test: /\.html$/,
          loader: 'raw',
          exclude: [
            path.resolve(__dirname, './src/index.html'),
          ]
        }, {
          test: /\.styl$/,
          loader: 'raw!postcss!stylus',
          exclude: [
            path.resolve(__dirname, './src/global.styl'),
          ]
        }, {
          test: /\.(png|jpe?g)$/i,
          loader: 'file',
          query: {
            hash: 'sha512',
            digest: 'hex',
            name: 'assets/[name].[hash].[ext]'
          }
        }]
      },
      stats: {
        colors: true,
        reasons: true
      },
      debug: false
    },
    webpackMiddleware: {
      // please do not spam the console when running in karma!
      noInfo: true
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: ENV_PRODUCTION ? false : true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: ENV_PRODUCTION ? true : false
  });
};

module.exports = config;
