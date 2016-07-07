import loginCtrl from './login.controller'
import loginService from './login.service'

const login = angular.module('zk.loign', [])
login.factory('loginService', loginService)
login.controller('loginCtrl', loginCtrl)
