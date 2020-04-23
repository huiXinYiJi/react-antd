// customize-cra相关 https://www.cnblogs.com/zyl-Tara/p/10635033.html
// https://juejin.im/post/5dedd6c8f265da33d15884bf
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

// 修改打包目录
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

// 关闭sourcemap
process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
    localIdentName: '[local]--[hash:base64:5]' // 默认， less模块化使用时，生成的class名称规则，sass与css模块化是脚手架自带的
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
)
