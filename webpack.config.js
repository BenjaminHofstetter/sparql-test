const path = require('path')

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      stream: path.resolve(__dirname, 'node_modules/readable-stream'),
    }
  }
}
