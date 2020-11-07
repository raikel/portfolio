module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // My custom added rules
    'space-before-function-paren': [2, 'never'],
    'no-trailing-spaces': 'off',
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'dot-notation': 'off',
    'vue/max-attributes-per-line': [2, {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
};
