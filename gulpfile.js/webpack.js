const webpack = require('webpack');
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const account = result.parsed.account;
var autoupload = true;

function autoUploadToHubspot(cb) {
  return new Promise((resolve, reject) => {
    webpack(
      {
        mode: 'development',
        entry: './src/index.js',
        output: {
          path: path.resolve('dist'),
          filename: 'js/index.bundle.js',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
          ]
        },
        plugins: [
          new HubSpotAutoUploadPlugin({
            autoupload,
            account,
            src: 'dist',
            dest: 'project-in-hubspot',
          }),
          new CopyWebpackPlugin([
            { from: './dist/images', to: 'images' },
            { from: './dist/templates', to: 'templates' },
            { from: './dist/css', to: 'css' },
            { from: './dist/modules', to: 'modules' },
            { from: './dist/fields.json', to: 'fields.json' },
            { from: './dist/theme.json', to: 'theme.json' },
          ]),
        ],
      },
      (err, stats) => {
        if (err) {
          return reject(err);
        }
        if (stats.hasErrors()) {
          return reject(new Error(stats.compilation.errors.join('\n')));
        }
        resolve();
      }
    );
  });
}

exports.autoUploadToHubspot = autoUploadToHubspot;
