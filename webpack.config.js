const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    board: ['@babel/polyfill/noConflict', path.join(__dirname, '../Board-Component/client/src/index.js')],
    cardOverlay: ['@babel/polyfill/noConflict', path.join(__dirname, '../Board-Component/client/src/components/CardOverlay/CardOverlay.js')],
    menu: ['@babel/polyfill/noConflict', path.join(__dirname, '../Menu-Component/client/src/index.js')],
    search: ['@babel/polyfill/noConflict', path.join(__dirname, '../Search-Component/client/src/index.js')],
    searchComponent: ['@babel/polyfill/noConflict', path.join(__dirname, '../Search-Component/client/src/components/Search/Search.js')],
  },
  output: {
    path: path.resolve(__dirname, './public/bundles'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: ['file-loader'], 
      }
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};