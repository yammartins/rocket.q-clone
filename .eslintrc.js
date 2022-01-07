const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['node_modules/', 'node_modules/@types'],
        extensions: ['.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
