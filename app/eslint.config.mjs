import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * Flat ESLint config for Next.js 16 + ESLint 9.
 * eslint-config-next ships native flat-config arrays, so we spread them
 * directly (no FlatCompat, which crashes ESLint 9's schema validator here).
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: ["out/**", ".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
