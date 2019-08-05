module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': 'error',
    'react/no-did-update-set-state': 0,
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'always'],
    'guard-for-in': 0,
    'react/no-multi-comp': 0,
    'no-await-in-loop': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'import/export': 0,
    'no-console': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/media-has-caption': 0,
    'no-case-declarations': 0,
    'no-restricted-syntax': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'no-else-return': ['error', { allowElseIf: true }],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    'array-bracket-newline': ['error', { multiline: true }],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
  },
};
