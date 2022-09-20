export const prettierParsers = {
  javascript: "babel",
  jsx: "babel",
  svg: "html",
  xml: "html",
  typescript: "typescript"
};

export const supportedLanguages = [
  "json",
  "babylon",
  "html",
  "graphql",
  "markdown",
  "yaml",
  "typescript",
  "flow",
  ...Object.keys(prettierParsers)
];
