import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    ignores: [
      'cache*',
      'dist*',
      'node_modules',
      '*.log',
      'package-lock.json',
    ],
  },
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      'curly': ['error', 'all'],
      'import/order': [
        'error',
        {
          'alphabetize': {
            order: 'asc',
          },
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          'pathGroups': [
            {
              group: 'internal',
              pattern: '@/**',
            },
          ],
          'pathGroupsExcludedImportTypes': ['type'],
        },
      ],
      'jsdoc/require-returns-description': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-definitions': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
)

