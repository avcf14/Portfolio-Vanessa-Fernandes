import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress/flat';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginCypress.configs.recommended,
  {
    files: ['**/*.cy.js', '**/*.cy.ts'],
  },
  {
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts'],
    rules: {
      complexity: ['error', 5],
      camelcase: ['error', { properties: 'always' }],
      'no-unused-vars': ['warn', { vars: 'all', args: 'all' }],
      'no-console': ['warn'],
    },
  },
];
