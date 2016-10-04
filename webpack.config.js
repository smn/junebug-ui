var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: APP_DIR,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './build'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        presets: ['es2015', 'react']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
