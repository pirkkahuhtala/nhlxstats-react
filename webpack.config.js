const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin ({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const SRC_PATH = path.resolve ('src');
const OUTPUT_PATH = path.resolve ('dist');
const OUTPUT_FILE = 'bundle.js';

module.exports = {
  entry: path.join(SRC_PATH, '/index.js'),
  resolve: {
    modules: [SRC_PATH, path.resolve ('node_modules')]
  },
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_FILE
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.stories.js$/,
        loader: 'ignore-loader'
      }
    ]
  },
  devServer: {
    noInfo: true
  },
  plugins: [HtmlWebpackPluginConfig]
};
