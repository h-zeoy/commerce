# commerce
npm install --save-dev webpack

npm install --save-dev webpack-merge
webpack.base/prod.conf
入口文件 出口文件
merge
npm install --save-dev webpack-cli

webpack --config build/webpack.prod.conf.js
"build": "webpack --config build/webpack.prod.conf.js",


npm install --save react react-dom
build会失败 需要安装babel
// build
// 将html放到 dist文件夹 
npm install --save-dev html-webpack-plugin
new HtmlWebpackPlugin({
filename: 'index.html',
template: 'public/index.html',
inject: 'body',
minify: {
removeComments: true,
collapseWhitespace: true,
removeAttributeQuotes: true
},
})

//编译前清理dist目录
npm install --save-dev clean-webpack-plugin
new CleanWebpackPlugin(),更新版本

// 将不变的js代码 分开打包
entry: {
app: './app/index.js',
framework:['react','react-dom'],
},
//抽离公共模块 
webpack.base.cong,js
optimization: {
splitChunks: {
chunks: "all",
minChunks: 1,
minSize: 0,
cacheGroups: {
framework: {
test: "framework",
name: "framework",
enforce: true
}
}
}
}

// 压缩js
npm install --save-dev uglifyjs-webpack-plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
optimization: {
splitChunks: {
chunks: "all",
minChunks: 1,
minSize: 0,
cacheGroups: {
framework: {
test: "framework",
name: "framework",
enforce: true
}
}
},
minimizer: [
new UglifyJSPlugin()
],    
}

dev环境热更新
npm install --save-dev webpack-dev-server
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
mode: 'development',
output: {
filename: "[name].[hash:16].js",
},
plugins: [
new HtmlWebpackPlugin({
template: 'public/index.html',
filename: 'index.html',
inject: 'body',
minify: {
html5: true
},
hash: false
}),
new webpack.HotModuleReplacementPlugin()
],
devServer: {
port: '9090',
contentBase: path.join(__dirname, '../public'),
compress: true,
historyApiFallback: true,
hot: true,
https: false,
noInfo: true,
open: true,
proxy: {}
}
});

npm run dev

支持css
npm install --save-dev style-loader css-loader
module: {
rules:[{
test: /\.(css)$/,
use: [
'style-loader',
'css-loader',
]
}]
},

// 抽离css样式
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
new ExtractTextWebpackPlugin('css/style.[chunkhash].css'),
rules: [{
test: /\.css$/, // 解析css
// use: ['style-loader', 'css-loader'], // 从右向左解析
use: ExtractTextWebpackPlugin.extract({
// 将css用link的方式引入就不再需要style-loader了
fallback: 'style-loader',
use: ['css-loader'],
}),
}, ]
//压缩css
npm install optimize-css-assets-webpack-plugin --save-dev
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

安装 less

npm install less less-loader --save-dev
//处理浏览器前缀
npm install postcss postcss-loader --save-dev
npm install autoprefixer --save-dev

压缩

eslint
- npm install -D eslint 
- npm install babel-eslint -D
- npm install -D eslint-config-airbnb 
- npm install -D eslint-loader  
- npm install -D eslint-plugin-import 
- npm install -D eslint-plugin-jsx-a11y 
- npm install -D eslint-plugin-react
