const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')
const publicPath = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(publicPath, 'index.html')
    })
  ],
  devServer: {
    static: outputPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}