const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    compress: true,
    port: 8899
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'dev',
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};
