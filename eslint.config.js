import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import {fileURLToPath} from 'node:url';

const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.js', import.meta.url));

export default [
    {
        ignores: ['dist', 'build', 'node_modules', 'package-lock.json', 'pnpm-lock.yaml'],
    },
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {
            js,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'tailwindcss': eslintPluginTailwindcss,
        },
        languageOptions: {
            globals: globals.browser,
        },
        settings: {
            tailwindcss: {
                config: tailwindConfigPath,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'off',
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-arbitrary-value': 'off',
            'tailwindcss/no-custom-classname': ['warn', {whitelist: ['App', 'custom\\-*', 'link-intro']}],
            'tailwindcss/no-contradicting-classname': 'error',
            '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
        },
    },
    {...json.configs.recommended, files: ['**/*.json'], language: 'json/json'},
    {...json.configs.recommended, files: ['tsconfig*.json'], language: 'json/jsonc'},
    {...json.configs.recommended, files: ['**/*.jsonc'], language: 'json/jsonc'},
    {...json.configs.recommended, files: ['**/*.json5'], language: 'json/json5'},
    {
        ...markdown.configs.recommended[0],
        language: 'markdown/gfm',
    },
    {...css.configs.recommended, files: ['**/*.css'], language: 'css/css'},
    {
        files: ['src/index.css'],
        rules: {
            'css/no-invalid-at-rules': 'off',
        },
    },
];