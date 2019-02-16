const path = require('path');

module.exports = {
  entry: './build/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  }
};
