const getWebpackConfig = require('ocular-dev-tools/config/webpack.config');

module.exports = env => {
  const config = getWebpackConfig(env);
  // Unfortunately, ocular-dev-tool swallows logs...
  require('fs').writeFileSync('/tmp/ocular.log', JSON.stringify(config, null, 2));

  config.node = {
    child_process: 'empty',
    fs: 'empty',
    crypto: 'empty',
    net: 'empty',
    tls: 'empty'
  };

  return config;
};
