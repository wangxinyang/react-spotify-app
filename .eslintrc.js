module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'max-len': [2, 100, { ignoreUrls: true }],
    'newline-before-return': 0,
    'semi-spacing': 2,
    'space-infix-ops': 2,
    'arrow-body-style': 2,
    'arrow-parens': 2,
  },
};
