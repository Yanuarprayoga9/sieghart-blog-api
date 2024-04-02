module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-empty': 0,
    'no-irregular-whitespace': 0,
    'import/extensions': ['error', 'ignorePackages', { js: 'always', jsx: 'never' }],
    "allowAfterThis": true
  },

};
