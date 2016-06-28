// 引入依赖
import './common/common.module'
import './theme/theme.module'
import './pages/pages.module'

// 定义程序主应用
const app = angular.module('zk.app', [
  'ngAnimate',
  'ui.bootstrap',
  'zk.theme',
  'zk.common',
  'zk.pages'
])
export default app.name
