import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
  },
  {
    rules: {
      complexity: ['error', 5],
      camelcase: ['error', { properties: 'always' }],
      'no-unused-vars': ['warn', { vars: 'all', args: 'all' }],
      'no-console': ['warn'],
    },
  },
  {
    languageOptions: {
      env: {
        'cypress/globals': true,
      },
    },
  },
];
