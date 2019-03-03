module.exports = {
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "es6": true,
  },
  "rules": {
  }
}
