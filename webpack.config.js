var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(name));
  },
  entry: {
    app: ['webpack/hot/dev-server', './app/main.js'],
    Home: ['./app/home/Home.js'],
    Admin: ['./app/admin/Admin.js']
  },
  output: {
    publicPath: '/',
    path: process.env.NODE_ENV === 'production' ? './dist/' : './build',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [{
        test: /\.js$/,
        loader: 'jsx-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|png)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js', 2)
  ]
};

config.addVendor('react', bower_dir + '/react/react.min.js');

module.exports = config;
