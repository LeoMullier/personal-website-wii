module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: '@babel/eslint-parser', // <<<< Important
    parserOptions: {
      requireConfigFile: false, // <<<< Allows you to skip Eslint complaining that you don't have a .babelrc file 
      babelOptions: {
        presets: ['@babel/preset-react'], // <<<< Important
      },
      ecmaFeatures: {
        jsx: true, // <<<< Important
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  };