module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "prettier", "prettier/vue"],
  plugins: ["babel", "prettier", "vue"],
  rules: {},
  parserOptions: {
    parser: "babel-eslint"
  }
};
