const webpack = require('webpack');

module.exports = {
  // ...

  plugins: [
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "buffer": require.resolve("buffer"),
      "crypto": require.resolve("crypto-browserify"),
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
    }
  },
}
