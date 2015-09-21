module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
      loaders: [
          { test: /\.html$/, loader: 'html-loader' },
      ]
  }
}