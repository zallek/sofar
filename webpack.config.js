var path = require('path');
var webpack = require('webpack');

function resolve() {
  var args = Array.prototype.slice.apply(arguments);
  return path.resolve.apply(path, [__dirname].concat(args));
}

var srcPath = resolve('./src');
var npmPath = resolve('./node_modules');
var distPath = resolve('./node_modules');

var autoprefixerConfig = {
  browsers: ['Firefox > 27', 'Chrome > 20', 'Explorer > 9', 'Safari > 6', 'Opera > 11.5', 'iOS > 6.1'],
};

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
    preloaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: [srcPath],
    }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?' + JSON.stringify(autoprefixerConfig),
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?stage=0'],
        include: [
          srcPath,
          resolve('./node_modules/react-geosuggest/'),
        ],
      },
    ],
  },
};
