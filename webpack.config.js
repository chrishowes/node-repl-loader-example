var webpack = require('webpack');
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js"
  },
  target: "node",
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "node-repl"
    }]
  }
}
