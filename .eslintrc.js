module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "indent": ["error", 4],
    "brace-style": ["error","stroustrup"],
    "curly": ["warn", "multi"],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "always", "asyncArrow": "always" }],
    "block-spacing": "error",
    "semi": "off",
    "eqeqeq": "error"
  }
}
