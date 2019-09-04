module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "prettier", "prettier/vue"],
  plugins: ["babel", "prettier", "vue"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-useless-escape": 0,
    "no-unused-vars": 0,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
