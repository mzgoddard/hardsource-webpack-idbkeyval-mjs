# hardsource-webpack-idbkeyval-mjs

An exmaple repository building a project with webpack and hardsource that dependds on idb-keyval. webpack `mjs` support does not by default use module entry points listed in package.json description files. This follows node's mjs behaviour so to have otherwise, it must be configured with webpack to explicitly allow the entrypoint for files that match the mjs extension or other developer chosen detail.

### building

- `npm install` or `yarn`
- `npm run build` or `yarn build`

A non-failing build will include the mjs version of idb-keyval for both a commonjs file and a module file in this example. Disabling the explicit configuration to use the module entry from mjs files and rebuilding will cause the project to have both the module and commonjs version of idb-keyval.

This example can be run in a browser's inspector or other javascript interpretor.
