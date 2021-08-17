module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Override what eslint-config-airbnb define as proper devDependencies
        // (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L70).
        // Define the file patterns that should allow import of packages from devDependencies.
        devDependencies: [
          'tests/**',
          'cypress/**',
          'src/__test-config__/*',
          '**/__tests__/**',
          '**/__stories__/**',
          'jest.config.js',
          'webpack.config.js',
          'webpack.config.*.js',
          'nightwatch.conf.js',
          '**/*.test.js',
          '**/*.test.jsx'
        ],
        optionalDependencies: false
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error'
  },
  extends: [
    'eslint-config-airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    react: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          moduleDirectory: ['node_modules', 'src/']
        }
      },
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to 'createReactClass'
      pragma: 'React', // Pragma to use, default to 'React'
      // fragment: 'React.Fragment',  // Fragment to use, default to 'React.Fragment'
      version: 'detect' // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to 'detect' in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true
      }
    }
  ]
};
