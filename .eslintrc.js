/**
 * eslint + prettier 校验代码
 * 1. [eslint rules](http://eslint.cn/docs/rules/)
 * 2. [prettier rules](https://prettier.io/docs/en/options.html)
 */
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, arrowParens: 'always',  semi: true }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: ['error', 'always']
  },

  parser: "babel-eslint",
};
