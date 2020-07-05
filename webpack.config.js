var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    // rules: [
    //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    //  ]
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        }],
      },
    ]
  },
  // resolve: {
  //   extensions: ['*', '.js']
  // },
  mode: 'development',
  node: {
    __dirname: false
  },
  // externals: nodeModules,
  // externals: [nodeExternals({
  //   whitelist: ['/node_modules/d3*']
  // })],
  plugins: [
    // new webpack.IgnorePlugin(/\.(css|less)$/),
    // new webpack.BannerPlugin({ raw: true, entryOnly: false })
  ],
  // resolve: {
  //   alias: { "d3": path.join(__dirname, "dist/d3.js") },
  // },
  devtool: 'sourcemap'
}
