/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import './dashboard/dashboard.module'

const pages = angular.module('zk.pages', [
  'zk.pages.dashboard'
])

pages.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard')
})
export default pages.name
