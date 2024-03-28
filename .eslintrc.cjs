module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "import", "react-refresh"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-absolute-path": "error",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "import/no-relative-packages": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              [
                "^react",
                "react-*",
                "^next",
                "date-fns",
                "^@?\\w",
                "jotai",
                "\\w*",
                ".\\w",
                "component/*",
              ],
            ],
          },
        ],
      },
    },
  ],
};
