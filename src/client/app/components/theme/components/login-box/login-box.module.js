/**
 *  @author guocailee
 *  @Date   2016-09-07
 */
import common from 'components/common/common.module'

import './login-box.scss'
import loginDirective from './login-box.directive'

let loginBox = angular.module('zk.login.box', [common])
loginBox.directive('loginBox', loginDirective)

export default loginBox.name
