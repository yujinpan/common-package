/* eslint-env node */
module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
