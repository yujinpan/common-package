const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const commonjs = require('rollup-plugin-commonjs');
const alias = require('rollup-plugin-alias');
const visualizer = require('rollup-plugin-visualizer');

const pkg = require('../package.json');
const utils = require('./utils');

require('dotenv').config();

const externalReg = new RegExp(
  '^(' + Object.keys(pkg.dependencies).join('|') + ')(/|$)'
);
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  plugins: [
    alias(utils.getAliasFromTSConfig()),
    resolve({
      extensions
    }),
    commonjs(),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    json(),
    visualizer({
      filename: './stat/statistics.html'
    })
  ],
  external: (id) => externalReg.test(id)
};
