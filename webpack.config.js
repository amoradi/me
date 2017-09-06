const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin(
    "main.css",
    { allChunks: true }
  );

module.exports = {
  entry: [
    './view/css/base.scss',
    './view/react/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    extractSass
  ]
};
