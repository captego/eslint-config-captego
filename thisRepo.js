module.exports = {
  extends: ['./index.js'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
