module.exports = {
  extends: ['captego', '@react-native-community'],
  rules: {
    '@typescript-eslint/no-shadow': 'warn', // @TODO make this an "error"!
    '@typescript-eslint/strict-boolean-expressions': 'off', // until we have strictNullChecks
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',

    // Invasive React changes (will have to test manually)
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
  },
}
