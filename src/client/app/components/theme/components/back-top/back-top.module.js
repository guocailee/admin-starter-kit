import './back-top.scss'

import backTopDirective from './back-top.directive.js'

const backTop = angular.module('zk.theme.components.backTop', []).directive('zkBackTop', backTopDirective)
export default backTop.name
