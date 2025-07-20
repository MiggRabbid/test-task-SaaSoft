import js from '@eslint/js';
import globals from 'globals';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import vueParser from 'vue-eslint-parser';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.cjs';

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    ignores: [
      'node_modules/',
      '.vscode/',
      'dist/',
      'src/env.d.ts',
      '.eslintrc.js',
      'vite.config.ts',
      'prettier.config.cjs',
      'eslint.config.js',
      'tailwind.config.js',
      'postcss.config.js',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],

      }, globals: {
        ...globals.browser,
        NodeJS: true,
      },
    },
    plugins: {
      prettier,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
        alias: {
          map: [
            ['@', './src'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'prettier/prettier': ['error', prettierConfig],
      'no-console': 'off',
      'no-extra-boolean-cast': 'off',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'no-case-declarations': 'off',
      'no-shadow': 'warn',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'vue/multi-word-component-names': 'warn',
    },
  },
);

