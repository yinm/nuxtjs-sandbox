module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'typescript'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'never']
  }
}
