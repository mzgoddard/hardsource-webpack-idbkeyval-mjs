const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // Webpack uses extension specific defaults for mjs files to follow node
      // behaviour. Node behaviour does not use the module entry point so it
      // must be configured to do this.
      {
        test: /\.mjs$/,
        resolve: {
          // Disabling this mainFields will cause `mjs` files requesting
          // packages with a "module" entry to use another entry.
          mainFields: ['module', 'main'],
        },
      },
    ],
  },

  plugins: [
    new HardSourceWebpackPlugin(),
  ],
};
