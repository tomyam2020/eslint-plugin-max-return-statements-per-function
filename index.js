const maxReturnStatementsPerFunction = require("./rules/max-return-statements-per-function");

module.exports = {
  rules: {
    "max-return-statements-per-function": maxReturnStatementsPerFunction,
  },
};
