const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      commands: path.resolve(__dirname, 'src/commands'),
    },
  },
};
