module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  env: {
    node: true,
    jest: true,
  },
};
