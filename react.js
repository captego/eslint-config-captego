module.exports = {
  extends: ['captego', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
      },
    },
    {
      files: ['*.theme.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
}
