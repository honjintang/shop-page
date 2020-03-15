const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'server', 'public')

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'html', 'index.html'),
    excludeChunks: [
      'maincss',
    ],
  }),

  new MiniCssExtractPlugin({
    allChunks: true,
    chunkFilename: 'assets/css/[name].css',
  }),

  new webpack.HashedModuleIdsPlugin(),
]

module.exports = () => ({
  mode: 'development',
  entry: {
    main: [
      '@babel/polyfill',
      path.join(__dirname, 'js', 'index.js')
    ],

    maincss: path.join(__dirname, 'scss', 'main.scss')
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
    path: outputPath,
    publicPath:'/',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins,
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'js'),
    },
  },
  devServer: {
    port: 9000,
    proxy: [
      {
        context: ['/api/products'],
        target: 'http://localhost:5000',
      },
    ],
  },
})