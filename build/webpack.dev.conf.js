const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PortFinder = require('portfinder');
// 友好提示的插件 https://github.com/geowarin/friendly-errors-webpack-plugin
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const alias = require('../utils/resolve');
const utils = require('../utils/notifier');
const baseWebpackConfig = require('./webpack.base.conf.js');
const config = require('../config');

const pro = argv.mode == 'production'; //  区别是生产环境和开发环境

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: config.dev.index,
      filename: 'index.html',
      inject: 'body',
      minify: {
        html5: true,
      },
      hash: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: process.env.HOST || config.dev.host,
    port: (process.env.PORT && Number(process.env.PORT)) || config.dev.port, // 端口
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    quiet: true, // necessary for FriendlyErrorsPlugin
    compress: true, // 一切服务是否都启用gzip压缩
    open: config.dev.autoOpenBrowser,
    proxy: config.dev.proxyTable,
  },
  resolve: alias,
  devtool: pro ? '' : 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
      }],
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    },
    {
      test: /\.(jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
          outputPath: 'images/', // 图片打包后存放的目录
        },
      }],
    },
    {
      test: /\.(htm|html)$/,
      use: 'html-withimg-loader',
    },
    {
      test: /\.(eot|ttf|woff|svg)$/,
      use: 'file-loader',
    }],
  },
});

// webpack将运行由配置文件导出的函数，并且等待promise返回，便于需要异步地加载所需的配置变量。
module.exports = new Promise((resolve, reject) => {
  PortFinder.basePort = process.env.PORT || config.dev.port;
  PortFinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({ // 出错友好处理插件
        compilationSuccessInfo: { // build成功的话会执行者块
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors // 如果出错就执行这块,其实是utils里面配置好的提示信息
          ? utils.createNotifierCallback()
          : undefined,
      }));

      resolve(devWebpackConfig);
    }
  });
});
