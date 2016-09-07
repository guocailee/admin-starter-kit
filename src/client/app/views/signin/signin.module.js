import './signin.scss'
import signinCtrl from './signin.controller'
import signinService from './signin.service'
import loginBox from 'components/theme/components/login-box/login-box.module'
const signin = angular.module('zk.signin', [loginBox])
signin.factory('signinService', signinService)
signin.controller('signinCtrl', signinCtrl)
