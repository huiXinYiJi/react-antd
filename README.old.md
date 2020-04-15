##### 使用sass
安装 yarn add node-sass 即可使用scss文件样式

##### 使用sass模块化
scss后缀命名为：*.module.scss
> 示例：
```css
/* exam.module.scss */
.app {
  color: lightcoral;
}
```
``` javascript
// js
import styles from './exam.module.scss'
<p className={styles.app}>使用sass模块化</p>
```

##### 导出webpack配置
```bash
$ yarn eject
```
> 请注意此命令会改变项目运行方法，切勿使用

##### 关于antd
安装antd
```bash
yarn add antd
```
antd按需加载使用方法配置,请查阅：
https://ant.design/docs/react/use-with-create-react-app-cn
进行配置修改

> 使用组件后控制台或许会出现以下报错，
```
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside StrictMode. Instead, add a ref directly to the element you want to reference. 
```
解决：
```javascript
// 修改src/index.js
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
```

##### 使用less
```bash
yarn add less less-loader
```
```javascript
// config-overrides.js
const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 以下为less生效代码
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' }, // antd主题替换变量
  }),
)
```

##### 使用less css-module
> 若使用addLessModule后报错，请查询customize-cra的git页面issue，查询解决办法
> 目前解决办法 yarn add customize-cra@next ， 此版本中已解决css-loader无法使用less 模块化问题(2020.4.13)
> 此问题维护人员可能会在customize-cra下一版本中修复

