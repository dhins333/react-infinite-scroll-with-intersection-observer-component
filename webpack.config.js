const path = require("path");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'umd'
    }
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },
  externals: {
    'react': 'react'
  }
}