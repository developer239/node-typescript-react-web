module.exports = {
  extends: [
    '@code-quality/eslint-config-react',
    '@code-quality/eslint-config-typescript',
    '@code-quality/eslint-config-jest',
    'prettier',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-untyped-public-signature': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'capitalized-comments': ["error", "never"],
  },
}
