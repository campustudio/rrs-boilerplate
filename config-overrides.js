const {
  override, fixBabelImports, addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components/'),
  }),
);
