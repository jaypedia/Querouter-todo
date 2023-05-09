const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PORT = 9000;

module.exports = {
  mode: 'development',

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [new webpack.ProgressPlugin(), new BundleAnalyzerPlugin()],

  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    compress: true,
    historyApiFallback: true,
    open: true,
    port: PORT,
  },
};
