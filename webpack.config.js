module.exports = {
  devtool: 'source-map',
  entry: './app/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
  },
};
