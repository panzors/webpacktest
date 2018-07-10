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
          {test: /\.css$/, use: 'css-loader' },
          {test: /\.ts$/, use: 'ts-loader' },
          { test: /\.tsx?$/, use: 'awesome-typescript-loader'},
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};