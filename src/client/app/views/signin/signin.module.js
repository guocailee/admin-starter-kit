import './signin.scss'
import signinCtrl from './signin.controller'
import signinService from './signin.service'

const signin = angular.module('zk.signin', [])
signin.factory('signinService', signinService)
signin.controller('signinCtrl', signinCtrl)
