const {
  override, fixBabelImports, addWebpackAlias, addLessLoader,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('ant-design-pro', {
    libraryName: 'ant-design-pro',
    libraryDirectory: 'lib',
    style: true,
    camel2DashComponentName: false,
  }),
  fixBabelImports('antd-mobile', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#0d47a1' },
  }),
  addWebpackAlias({
    '@apis': path.resolve(__dirname, 'src/apis/'),
    '@convertors': path.resolve(__dirname, 'src/convertors/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@components': path.resolve(__dirname, 'src/shares/components/'),
    '@h5components': path.resolve(__dirname, 'src/shares/h5components/'),
    '@constants': path.resolve(__dirname, 'src/shares/constants/'),
    '@libs': path.resolve(__dirname, 'src/shares/libs/'),
    '@styles': path.resolve(__dirname, 'src/shares/styles/'),
    '@static': path.resolve(__dirname, 'src/static/'),
    '@apiService': path.resolve(__dirname, '../api-service/'),
  }),
);
