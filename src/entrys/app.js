/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
// 引入依赖
import 'bootstrap-loader'
import 'font-awesome-webpack'
import 'angular'
import 'angular-animate'
import 'angular-route'
import 'angular-ui-router'
import 'angular-ui-bootstrap'

import './../app/common/common.module'
import './../app/theme/theme.module'
import './../app/home/pages/pages.module'

// 定义程序主应用
const app = angular.module('zk.app', [
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'zk.theme',
  'zk.common',
  'zk.pages'
])
export default app.name
