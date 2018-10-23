/* global __dirname */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    docs: './src',
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },

  externals: {
    'c3': 'c3',
    'vue-router': 'VueRouter',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /\/dist\/|\/node_modules\/|\.sample\.js$/,
    }, {
      test: /\.html?$|\.sample\.js$/,
      loader: {
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-patternfly$': path.resolve('../dist/vue-patternfly.esm.js'),
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin(),
  ],
};
