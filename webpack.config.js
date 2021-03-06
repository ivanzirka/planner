const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SvgStore = require('webpack-svgstore-plugin');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./'),
    filename: "bundle.js"
  },
  devServer: {
    port: 8082,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: [{
           loader: 'css-loader',
           options: {
             importLoaders: 1,
             modules: false,
             sourceMap: true
           }
         }, {
           loader: 'postcss-loader',
           options: {
             sourceMap: true
           }
         }, {
           loader: 'sass-loader',
           options: {
             sourceMap: true
           }
         }]
      })
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'file-loader',
      query: {
        name: 'images/[name]-[hash].[ext]?[hash]'
      }
    }, {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }, {
      test: /\.(eot|ttf|woff|woff2)/,
      loader: 'file-loader',
      query: {
        name: 'fonts/[name].[ext]?[hash]'
      }
    }
  ]},
  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new SvgStore({
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      },
      prefix: 'icon'
    })
  ]
}
