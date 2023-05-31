module.exports = {
    extends: ['airbnb', 'plugin:react/recommended'],
    plugins: ['react'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    },
    ignorePatterns: ['src/components/'],
  };
  