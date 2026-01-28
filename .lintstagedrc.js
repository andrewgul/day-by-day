export default {
  '**/*.{ts,tsx}': [
    'tsc --noEmit --pretty',
    'eslint --fix',
    'prettier --write',
  ],
  '**/*.{js,jsx,cjs,mjs,json,md,yml,css,scss}': 'prettier --write',
};