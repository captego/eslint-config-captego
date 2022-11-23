module.exports = {
  root: true,
  extends: [
    'standard-with-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['import', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'array-callback-return': 'warn',
    'camelcase': 'warn',
    'curly': ['error', 'all'],
    'eqeqeq': 'warn',
    'no-async-promise-executor': 'warn',
    'no-case-declarations': 'warn',
    'no-empty-pattern': 'warn',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'warn',
    'no-unused-vars': 'off',
    'no-useless-catch': 'warn',
    'no-useless-escape': 'warn',
    'no-void': ['warn', { allowAsStatement: true }],
    'prefer-const': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-template': 'error',

    'import/namespace': 'off', // very slow

    'import/order': [
      'error',
      {
        'warnOnUnassignedImports': true,
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'pathGroups': [
          {
            pattern: './*.css',
            group: 'object',
            position: 'after',
          },
          {
            pattern: './*.css?*',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '../**/*.css',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '../**/*.css?*',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '**/*.css',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '**/*.css?*',
            group: 'object',
            position: 'after',
          },
        ],
        'groups': [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
      },
    ],

    'n/no-callback-literal': 'warn',

    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-extraneous-class': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'off', // slow
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'off', // extremely slow
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/promise-function-async': 'off', // very slow
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
  },
}
