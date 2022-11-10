const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { argv } = require('yargs');

const isDevelopment = argv.env === 'development';

dotenv.config({ path: path.resolve('.env') });

module.exports = {
  entry: {
    main: path.resolve('src', './index.tsx'),
  },

  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@public': path.resolve('public'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead',
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                },
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
              isDevelopment && 'babel-plugin-styled-components',
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|mp3|svg|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', './index.html'),
      favicon: path.resolve('src', 'assets', './favicon.png'),
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }),
  ].filter(Boolean),
};
