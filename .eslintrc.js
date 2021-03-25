module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [".eslintrc.js"],
    parserOptions: {
        project: "./tsconfig.eslint.json",
    },
    plugins: ["@typescript-eslint"],
};
