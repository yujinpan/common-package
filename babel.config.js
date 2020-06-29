/**
 * @link https://devblogs.microsoft.com/typescript/typescript-and-babel-7/
 */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime'
  ],
  exclude: 'node_modules/**'
};
