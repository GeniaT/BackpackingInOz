var path = require('path'); //utilities for directories
var HtmlWebpackPlugin = require('html-webpack-plugin'); //to be able to render our app in the html id 'app'

module.exports = {
  entry: './app/index.js', //starting point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: { //modifications to apply to the code before outputing it
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }, //For each type of file, a specific loader is used
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [new HtmlWebpackPlugin({ //what will allows us to put our code in html form after webpack transformation&output
    template: 'app/index.html'
  })]
}
