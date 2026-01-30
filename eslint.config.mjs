import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import pluginPrettier from 'eslint-plugin-prettier';

const eslintConfig = defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/components/ui/**',
    'drizzle/**'
  ]),
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);

export default eslintConfig;
