const path = require('path');

module.exports = {
  entry: './src/playground/destructuring.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ 
      loader: 'babel-loader', 
      test: /\.js$/,
      exclude: /node_modules/ 
    },
    {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'] // multiple loaders using an array
    }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  mode: 'development',
};