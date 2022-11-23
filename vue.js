module.exports = {
  extends: [
    'captego',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/no-unused-components': 'warn',
  },
  ignorePatterns: ['tiptap.d.ts', 'tiptap-commands.d.ts'],
  settings: {
    'import/resolver': {
      node: {
        paths: {
          '@/*': ['./src/*'],
        },
      },
    },
  },
}
