/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
// 引入依赖
import './common/common.module'
import './theme/theme.module'
import './pages/pages.module'

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
