
module.exports = {
  entry: [
   './javascript/index.js' 
  ],
  output: {
    path: './client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    port: 3333,
    contentBase: './client',
    inline: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less?sourceMap"
      }
    ]
  }
};