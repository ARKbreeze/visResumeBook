const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    //解析文件后缀的优先级  左到右优先级
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, '../', 'app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
