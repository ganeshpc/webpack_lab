const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
    // commands: './src/js/clickCommand.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      js: path.resolve(__dirname, 'src/js'),
    },
  },
};
