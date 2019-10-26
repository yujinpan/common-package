/**
 * eslint + prettier 校验代码
 */
module.exports = {
  root: true,

  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier"  ,
    "prettier/@typescript-eslint",
  ],

  plugins: ["prettier", "@typescript-eslint"],

  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: true, arrowParens: "always", semi: true }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    eqeqeq: ["error", "always"]
  },

  parser: "@typescript-eslint/parser"
};
