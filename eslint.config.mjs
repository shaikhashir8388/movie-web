// .eslintrc.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";

export default {
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      plugins: ["react", "react-hooks", "next"],
      extends: [
        js.configs.recommended,
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "next/core-web-vitals",
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // Add your custom rules here
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
