const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "rules";

module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["rulesdir"],
  rules: {
    "rulesdir/max-return-statements-per-function": 2,
  },
  extends: ["eslint:recommended", "prettier"],
};
