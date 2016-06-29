/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

/** @ngInject */
import dashboardHtml from 'ngtemplate!html!./dashboard.html'
function routeConfig ($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: dashboardHtml,
      title: '首页',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0
      }
    })
}

angular.module('zk.pages.dashboard', [])
  .config(routeConfig)
