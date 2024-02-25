module.exports = {
    extends: [
      "eslint:recommended", // Base ESLint rules
      "plugin:@typescript-eslint/recommended", // Recommended TypeScript-specific rules
    ],
    parser: "@typescript-eslint/parser", // Specify the TypeScript parser
    parserOptions: {
      project: "./tsconfig.json", // Path to your TypeScript configuration file (if applicable)
    },
    plugins: ["@typescript-eslint"], // Include the TypeScript plugin
    rules: {
      // Add any custom rule overrides or additions here
    },
  };
  