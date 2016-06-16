'use strict';

const path = require('path');
const Webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV_PRODUCTION = 'production' === process.env.WEBPACK_ENV;
const DEPLOY_DIR = !!process.env.DEPLOY_DIR ? `/${process.env.DEPLOY_DIR}/` : '/';

let config = {
  entry: {
    main: [
      './src/main.ts',
    ],
  },
  output: {
    path: './dist',
    publicPath: ENV_PRODUCTION ? DEPLOY_DIR : '',
    filename: '[name].bundle.[hash].js',
    sourceMapFilename: '[name].map',
  },
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js'],
  },
  module: {
    preLoaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint'
    }, {
      test: /\.js$/,
      loader: 'source-map',
      exclude: [
        // these packages have problems with their sourcemaps
        path.join(__dirname, 'node_modules', 'rxjs'),
        path.join(__dirname, 'node_modules', '@angular'),
      ]
    }, ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', '@angular', 'src'),
    ],
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.ts$/,
      loader: 'ts',
    }, {
      test: /\.html$/,
      loader: 'raw',
      exclude: [
        path.resolve(__dirname, './src/index.html'),
      ]
    }, {
      test: /\.css$/,
      loader: 'raw'
    }, {
      test: /global\.styl/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus'),
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
    }, ],
  },
  postcss: [
    autoprefixer({
      browsers: ['ie >= 9', 'last 2 versions']
    }),
  ],
  plugins: [
    new Webpack.DefinePlugin({
      WEBPACK_ENV: ENV_PRODUCTION ? '"production"' : '"dev"',
    }),
    new ExtractTextPlugin('global.[hash].css'),
    new HtmlPlugin({
      template: './src/index.html',
      baseHref: DEPLOY_DIR,
      favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
      title: 'Angular2 Seed',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false,
        caseSensitive: true,
        conservativeCollapse: false,
        html5: true,
        maxLineLength: 128,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: true,
      },
      meta: {
        title: 'Angular2 Seed',
        description: 'Seed for Angular2 Apps',
      }
    }),
  ],
  devServer: {
    progress: true,
    contentBase: './src',
    port: 1337,
    isplayCached: true,
    displayErrorDetails: true,
    historyApiFallback: true,
    compress: false,
    quiet: false,
    noInfo: false,
    hot: false,
    inline: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 500
    },
    stats: {
      colors: true,
    },
  },
  devtool: ENV_PRODUCTION ? '#source-map' : '#eval-source-map',
  cache: true,
  debug: true,
  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0,
  },
}

module.exports = config;
