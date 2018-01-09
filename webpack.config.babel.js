import { join } from 'path';

// const include = join(__dirname, 'src');

/**
 * @output: library
 * Generate a global lib:function/factory
 * Create a file export-umd.js
 */
export default {
  entry: './export-umd',
  output: {
    path: join(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'SpotifyApiCourse',
  },
  devtool: 'source-map',
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
