// tsconfig-paths
const tsconfigPaths = require('tsconfig-paths');

// tsconfig.json
const tsconfigJson = require('./tsconfig.json');

tsconfigPaths.register({
  baseUrl: 'dist',
  paths: tsconfigJson.compilerOptions.paths
});
