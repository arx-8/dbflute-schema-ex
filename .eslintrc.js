module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
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
    "no-restricted-globals": [
      "error",
      {
        name: "document",
        message: "Use getDocument().",
      },
    ],
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

    /**
     * ts と eslint の相性不良周りを解消するための設定
     */
    "import/no-unresolved": "off",

    // plugin:@typescript-eslint/recommended と prettier の相性不良？
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",

    // constructor のショートハンド（メンバーの省略記法）を使いたいため
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",

    /**
     * ts で許容されてるルールは、ts側を優先して許可する
     */
    // ホイスティング
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
}
