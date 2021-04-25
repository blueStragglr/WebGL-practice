const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          // You have to put in after `css-loader` and before any `pre-precessing loader`
          { loader: 'scoped-css-loader' },
          {
            loader: 'sass-loader',
          },
        ]
      }
    ]
  }
}
