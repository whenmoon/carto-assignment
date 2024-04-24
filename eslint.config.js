import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          parser: 'typescript',
        },
      ],
    },
  },
  {
    files: ['**/*.{jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      semi: 'off',
      '@typescript-eslint/semi': 'error',
      'no-extra-semi': 'warn',
      curly: 'warn',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      '@typescript-eslint/indent': ['warn', 2],
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      react,
    },
  },
];
