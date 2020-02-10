module.exports = {
  extends: [
    '@code-quality/eslint-config-typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-untyped-public-signature': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'capitalized-comments': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'cypress',
        ],
      },
    },
  },
}
