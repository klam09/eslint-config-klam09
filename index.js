module.exports = {
  extends: 'airbnb',
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
    // import
    'import/no-unresolved': 'off', // ignore webpack alias
    // promise
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    // react
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    // prettier
    'prettier/prettier': 'error',
  },
  plugins: ['prettier', 'import', 'promise', 'jsx-a11y', 'react', 'react-hooks'],
};
