/**
 *  @author guocailee
 *  @Date   2016-09-07
 */
import './login-box.scss'
import loginDirective from './login-box.directive'
let loginBox = angular.module('zk.login.box', [])
loginBox.directive('loginBox', loginDirective)

export default loginBox.name
