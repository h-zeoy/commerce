const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('../config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    framework: ['react', 'react-dom'],
  }, // 入口文件
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js', // dev环境下默认使用该配置
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
  },
  module: {
    rules: [{
      enforce: 'pre', //  代表在解析loader之前就先解析eslint-loader
      test: /\.js$/,
      // exclude: /node_modules/,
      // include: /src/,
      loader: 'eslint-loader',
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      // exclude: /node_modules/,
    },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        framework: {
          test: 'framework',
          name: 'framework',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJSPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true ? {
          map: {
            inline: false,
          },
        } : {},
      }),
    ],
  },
};
