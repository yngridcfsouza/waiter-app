// eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Configurações recomendadas do TypeScript
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        project: true, // usa o tsconfig.json se existir
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
