const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: [
      '.ts',
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
}
