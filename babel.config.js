module.exports = {
  //预设值
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  //插件
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-transform-modules-commonjs', //ECMAScript modules 转化为 CommonJS
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
  ],
};
