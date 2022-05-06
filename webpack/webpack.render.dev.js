const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  // webpack预设开发模式  代表着一系列针对开发的设置具体看文档
  mode: 'development',

  //入口文件
  entry: { index: path.resolve(__dirname, '../app/renderer/app.jsx') },

  //target  目标文件
  // target: 'web',
  target: 'electron-renderer',

  //output 输出文件 跟路径 dist/[name].[hash].js

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },

  // 开发时文件是否保存对应源文件信息 保存的方式又是如何
  devtool: 'inline-source-map',

  //devServer
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1',
    port: 7001,
    hot: true,
  },

  //
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);

// path join 单纯拼接 不管你路径是否合理  /a,/b => /a/b       resolve 会把路径合法化 /会作为根目录处理  /a,/b  => /b
