module.exports = {
  parser: "babel-eslint",
  env: {
    "browser": true
  },
  extends: 'airbnb',
  rules: {
    'import/no-unresolved': 0,
    'jsx-a11y/label-has-for': 0,
    "func-names": 0,
    "import/prefer-default-export": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/export": 0,
    "no-console": 0
  },
  globals: {
    describe: true,
    it: true,
  },
};
