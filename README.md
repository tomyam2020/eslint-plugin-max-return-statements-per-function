# eslint-plugin-max-return-statements-per-function

This rule reproduces one of [codeclimate's default checks](https://docs.codeclimate.com/docs/maintainability#checks), `return statements`, with ESLint.

## Installation

### npm

```shell
npm install --save-dev eslint-plugin-max-return-statements-per-function
```

### yarn

```shell
yarn add -D eslint-plugin-max-return-statements-per-function
```

## Usage

The rule takes one option, which is the maximum number of return statements in a function. The default is 4.

You can set the option like this in `.eslintrc.js`:

```js
module.exports = {
  plugins: ["max-return-statements-per-function"],
  rules: {
    "max-return-statements-per-function/max-return-statements-per-function": ["error", 4],
  },
};
```

## License

MIT
