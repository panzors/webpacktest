const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    others: './src/other.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'others.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/components'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};