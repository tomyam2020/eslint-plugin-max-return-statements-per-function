const rule = require("../rules/max-return-statements-per-function.js");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("max-statements", rule, {
  valid: [
    {
      code: "function foo(v) { if (!v) { return; } if (typeof v === 'number') { return 'number'; } else if (typeof v === 'string') { return 'string'; } else { return 'others'; } }",
    },
    {
      code: "function foo(v) { if (!v) { return; } if (typeof v === 'number') { return 'number'; } else if (typeof v === 'string') { return 'string'; } else { return 'others'; } }",
      options: [4],
    },
    {
      code: "const foo = (v) => { if (!v) { return; } if (typeof v === 'number') { return 'number'; } else if (typeof v === 'string') { return 'string'; } else { return 'others'; } }",
      parserOptions: { ecmaVersion: 6 },
      options: [4],
    },
  ],
  invalid: [
    {
      code: 'function foo(v) { if (!v) {  return; } if (typeof v === "number") {  return "number"; } else if (typeof v === "string") {  return "string"; } else if (typeof v === "object") {  return "string"; } else {  return "others"; }}',
      errors: [
        {
          messageId: "exceed",
          data: { name: "Function 'foo'", count: "5", max: 4 },
        },
      ],
    },
    {
      code: "function foo(v) { if (!v) { return; } if (typeof v === 'number') { return 'number'; } else if (typeof v === 'string') { return 'string'; } else { return 'others'; } }",
      options: [3],
      errors: [
        {
          messageId: "exceed",
          data: { name: "Function 'foo'", count: "4", max: 3 },
        },
      ],
    },
    {
      code: "const foo = (v) => { if (!v) { return; } if (typeof v === 'number') { return 'number'; } else if (typeof v === 'string') { return 'string'; } else { return 'others'; } }",
      options: [3],
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          messageId: "exceed",
          data: { name: "Arrow function 'foo'", count: "4", max: 3 },
        },
      ],
    },
  ],
});
