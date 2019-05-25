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
    '@apis': path.resolve(__dirname, 'src/apis/'),
    '@convertors': path.resolve(__dirname, 'src/convertors/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@components': path.resolve(__dirname, 'src/shares/components/'),
    '@constants': path.resolve(__dirname, 'src/shares/constants/'),
    '@libs': path.resolve(__dirname, 'src/shares/libs/'),
    '@styles': path.resolve(__dirname, 'src/shares/styles/'),
    '@static': path.resolve(__dirname, 'src/static/'),
    '@apiService': path.resolve(__dirname, '../api-service/'),
  }),
);
