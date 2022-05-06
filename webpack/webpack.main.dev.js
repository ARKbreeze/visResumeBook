const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  // webpack预设开发模式  代表着一系列针对开发的设置具体看文档
  mode: 'development',

  //入口文件
  entry: path.resolve(__dirname, '../app/main/electron.js'),

  //target  目标文件
  //target : web
  target: 'electron-main',

  //output 输出文件 跟路径 dist/electron.js

  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },

  // 开发时文件是否保存对应源文件信息 保存的方式又是如何
  devtool: 'inline-source-map',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);

// path join 单纯拼接 不管你路径是否合理  /a,/b => /a/b       resolve 会把路径合法化 /会作为根目录处理  /a,/b  => /b

// webpackMerge.merge()  这个才是merge的函数
