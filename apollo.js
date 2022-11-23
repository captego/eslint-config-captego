module.exports = {
  extends: ['captego'],
  rules: {
    '@typescript-eslint/no-shadow': 'warn', // @TODO make this an "error"!
    '@typescript-eslint/strict-boolean-expressions': 'off', // until we have strictNullChecks
  },
}
