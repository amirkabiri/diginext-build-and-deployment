module.exports = {
  entry: './src/index.js',
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: './txt-loader.js',
      },
    ],
  },
}
