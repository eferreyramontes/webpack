const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]' // Recibirá el nombre dinámico de "modules"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]", // Nombre por referencia
      path: path.join(__dirname, "[name]-manifest.json")
    }),
  ]
}