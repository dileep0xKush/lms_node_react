import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      'max-lines': [
        'warn',
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      'max-lines-per-function': [
        'error',
        { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true },
      ],

      complexity: ['warn', { max: 10 }],
      'max-depth': ['warn', 4],

      'react/jsx-max-depth': ['warn', { max: 6 }],
    },
  },

  {
    files: ['src/pages/**/*.{ts,tsx}'],

    rules: {
      'max-lines-per-function': [
        'error',
        { max: 40, skipBlankLines: true, skipComments: true },
      ],
      complexity: ['warn', { max: 8 }],
      'react/jsx-max-depth': ['warn', { max: 5 }],
    },
  },

  {
    files: ['src/components/**/*.{ts,tsx}'],

    rules: {
      'max-lines-per-function': [
        'error',
        { max: 35, skipBlankLines: true, skipComments: true },
      ],
      complexity: ['warn', { max: 6 }],
      'react/jsx-max-depth': ['warn', { max: 4 }],
    },
  },
])
