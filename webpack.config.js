module.exports = {
  entry: {
    javascript: './src/main.js',
    html: './src/index.html'
  },
  output: {
    path: './dist/public',
    filename: 'js/bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    inline: true,
    contentBase: './dist/public/',
    port: 1337
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
