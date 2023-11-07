/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  endOfLine: 'lf',
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  arrowParens: 'always',
  editorconfig: true,
};
