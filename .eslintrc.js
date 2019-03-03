module.exports = {
  extends: ["airbnb", "plugin:jest/recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  rules: {
    "arrow-body-style": "off",
    "import/first": "off",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "no-restricted-properties": [
      "error",
      {
        property: "innerText",
        message:
          "Use 'textContent' instead. Because 'innerText' is (almost) not recommended.",
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allowAfterSuper: true,
        allowAfterThis: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        semi: false,
        trailingComma: "all",
      },
    ],

    // ts と eslint の相性不良？
    "import/no-unresolved": "off",
  },
}
