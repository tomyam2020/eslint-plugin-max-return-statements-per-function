const rulesDirPlugin = require("eslint-plugin-rulesdir");

rulesDirPlugin.RULES_DIR = "rules";

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["rulesdir"],
  rules: {
    "no-unused-vars": 1,
    "rulesdir/max-return-statements-per-function": 2,
  },
};
