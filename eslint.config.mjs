// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginSecurity from 'eslint-plugin-security';

export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  pluginSecurity.configs.recommended,
);
// Your custom configs here
