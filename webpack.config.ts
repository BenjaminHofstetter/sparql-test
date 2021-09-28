import { Configuration } from 'webpack';
const path = require('path');

export default {
  resolve: {
    alias: {
      stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
    },
  },
} as Configuration;
