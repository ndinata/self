// @ts-check

import eslint from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.strict,
  tsEslint.configs.stylistic,
  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "no-console": "error",
      "astro/no-set-html-directive": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-object-class-list": "warn",
    },
  },
);
