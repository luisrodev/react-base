const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
    },
  },
};

const htmlRules = {
  test: /\.html$/,
  use: {
    loader: 'html-loader',
  },
};

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = (env, { mode }) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contentHash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [javascriptRules, htmlRules, cssRules],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
