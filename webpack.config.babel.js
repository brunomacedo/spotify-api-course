import { join } from 'path';
// const include = join(__dirname, 'src');

/**
 * @output: library
 * Generate a global lib:function/factory
 */
const config = {
  devtool: 'source-map',
  entry: {
    filename: './source/index',
  },
  output: {
    path: join(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'spotifyApiCourse',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
