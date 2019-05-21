const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require('./utils');
const config = require('../config');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name].[chunkhash:16].js'),
    // chunkFilename: utils.assetsPath('[id].[chunkhash].js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.build.index,
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin(utils.assetsPath('css/style.[chunkhash].css')),

  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
        },
        'postcss-loader',
        ],
      }),
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    }],
  },
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        `\\.(${
          config.build.productionGzipExtensions.join('|')
        })$`
      ),
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}

module.exports = webpackConfig;
