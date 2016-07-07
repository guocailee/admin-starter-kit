import loginCtrl from './loign.controller'
import loginService from './loign.service'

const login = angular.module('zk.loign', [])
login.factory('loginService', loginService)
login.controller('loginCtrl', loginCtrl)
