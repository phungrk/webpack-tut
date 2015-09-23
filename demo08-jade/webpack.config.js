module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          { test: /\.jade$/, loader: "jade-loader" },
          { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
          { test: /\.png$/, loaders: ['url-loader']}
      ]
  }
}