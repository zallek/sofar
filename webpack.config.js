var path = require('path');
var webpack = require('webpack');

function resolve() {
  var args = Array.prototype.slice.apply(arguments);
  return path.resolve.apply(path, [__dirname].concat(args));
}

var srcPath = resolve('./src');
var npmPath = resolve('./node_modules');
var distPath = resolve('./node_modules');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [srcPath, npmPath],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot-loader', 'babel-loader?stage=0', 'eslint-loader'],
      include: srcPath,
    }]
  }
};
