module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-dens': 'warn',
    'react/react-in--jsx-scope': '0',
    'react/jsx-filename-extension':'0',
    'react/jsx-props-no-spreading':'0',
    'react/prop-types':'0',
    'jsx-a11y/anchor-is-valid':'0',
    'max-len':'0',
  },
};
