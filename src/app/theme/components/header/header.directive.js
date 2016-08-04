/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import headerHtml from 'ngtemplate!html!./header.html'
export default function ($window) {
  'ngInject'
  return {
    restrict: 'E',
    templateUrl: headerHtml,
    link: function ($scope) {
      angular.element($window).bind('scroll', function () {
        $scope.isScrolled = this.pageYOffset !== 0
        $scope.$apply()
      })
    }
  }
}
