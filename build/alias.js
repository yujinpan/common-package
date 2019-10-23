const path = require('path');

const resolve = (p) => path.resolve(__dirname, '../', p);

module.exports = {
  types: resolve('types'),
  src: resolve('src')
};
