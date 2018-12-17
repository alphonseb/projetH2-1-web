module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", 4],
    "brace-style": ["error","stroustrup"],
    "curly": ["warn", "multi"],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "always", "asyncArrow": "always" }],
    "block-spacing": "error",
    "semi": "off",
    "eqeqeq": "error"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
