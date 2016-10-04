var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: {
    app: [path.resolve(APP_DIR, "app.jsx")]
  },
  output: {
    path: APP_DIR,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
