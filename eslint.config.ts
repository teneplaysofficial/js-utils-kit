import { fileURLToPath } from 'url';
import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import { Linter } from 'eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node, NodeJS: 'readonly' } },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.base.json', './packages/**/*/tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin as unknown as Linter,
    },
    rules: {
      ...tsPlugin.configs['recommended-type-checked'].rules,
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    extends: [json.configs.recommended],
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    extends: [json.configs.recommended],
  },
  {
    files: ['**/*.md'],
    language: 'markdown/gfm',
    extends: [markdown.configs.recommended],
  },
  {
    ignores: ['README.md'],
  },
  {
    files: ['**/CHANGELOG.md'],
    rules: {
      'markdown/no-missing-label-refs': 'off',
    },
  },
  {
    files: ['.changeset/**/*.md'],
    rules: {
      'markdown/heading-increment': 'off',
      'markdown/no-missing-label-refs': 'off',
    },
  },
]);
