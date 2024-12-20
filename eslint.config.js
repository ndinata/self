import pluginAstro from "eslint-plugin-astro";

export default [
  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-object-class-list": "warn",
    },
  },
];
