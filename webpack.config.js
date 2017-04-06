var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./js/root.js",
  module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            plugins: ['react-html-attrs']
          }
        },
        {// 下面是添加css的loader,也即使css模块化的配置方法
            test: /\.css$/,
            // either is ok! do not use 'style!css.....'
            use: ['style-loader', 'css-loader']
            // loader: 'style-loader!css-loader'
            //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
        }
      ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  }
}
