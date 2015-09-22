var webpack = require('webpack');
module.exports = {
  entry: {
    app: './app.js',
    list: './list.js',
    item: './item.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app','app.js')
  ]
}