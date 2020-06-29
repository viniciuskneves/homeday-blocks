const generateWebpackAlias = require('../../webpack-alias');

const BASE_URL = process.env.BASE_URL || '';

module.exports = ({ config }) => {
  // Extend config as you need.
  // eslint-disable-next-line
  config.resolve.alias = generateWebpackAlias({
    custom: {
      '@': './src',
      vue$: './node_modules/vue/dist/vue.esm.js',
    },
  });
  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'raw-loader',
      },
    ],
  });
  // eslint-disable-next-line
  config.output.publicPath = BASE_URL;

  return config;
};
