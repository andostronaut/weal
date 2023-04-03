const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    static: [
      { directory: path.join(__dirname, 'interfaces/dist') },
      { directory: path.join(__dirname, 'interfaces/public') }
    ],
    host: '127.0.0.1',
    port: 3222
  },
  entry: './interfaces/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'interfaces')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'interfaces/public/index.html',
      inject: true,
      favicon: 'interfaces/public/favicon.ico',
      manifest: 'interfaces/public/manifest.json'
    })
  ]
}
