const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    'shared': path.resolve(__dirname, `${paths.appSrc}/shared/`),
    'constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
  })(config, env);
  return config;
};
