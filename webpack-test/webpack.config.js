module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: './txt-loader.js',
      },
    ],
  },
}
