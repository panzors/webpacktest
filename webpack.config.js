const path = require('path');

module.exports = {
  entry: {
    index :'./src/index.js',
    others: './src/other.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
      rules: [
          {test: /\.css$/, use: 'css-loader' },
          {test: /\.ts$/, use: 'ts-loader' }
      ]
  }
};