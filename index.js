module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    indent: ['error', 2],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': 'off', // console to be removed by terser-webpack-plugin
    'no-underscore-dangle': 'off',
    // import
    'import/no-unresolved': 'off', // ignore webpack alias
    // promise
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    // prettier
    'prettier/prettier': 'error',
  },
  plugins: ['prettier', 'import', 'promise'],
};
