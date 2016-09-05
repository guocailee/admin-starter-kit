import 'components/common/common.module'
import 'components/theme/theme.module'
import './pages/pages.module'

// 定义程序主应用
const home = angular.module('zk.home', [
  'ngAnimate',
  'pascalprecht.translate',
  'ui.router',
  'ui.bootstrap',
  'zk.theme',
  'zk.common',
  'zk.pages'
])
export default home.name
