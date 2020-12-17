const { babel } = require('@rollup/plugin-babel');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');
const commonjs = require('@rollup/plugin-commonjs');
const alias = require('@rollup/plugin-alias');
const visualizer = require('rollup-plugin-visualizer');
const aliasConfig = require('../alias.config');
const config = require('./config');

require('dotenv').config();

module.exports = {
  plugins: [
    alias({
      entries: aliasConfig
    }),
    resolve({
      extensions: config.extensions
    }),
    commonjs(),
    babel({
      extensions: config.extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    json(),
    visualizer({
      filename: './stat/statistics.html'
    })
  ],
  // 所有文件都打包了，所以所有的引入都作为外部
  external: (id) =>
    ![
      'rollup-plugin-vue' // 编译的临时文件需要保留
    ].some((item) => id.includes(item))
};
