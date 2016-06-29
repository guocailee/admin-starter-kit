/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

import contentTopHtml from 'ngtemplate!html!./content-top.html'
export default function ($location, $state) {
  return {
    restrict: 'E',
    templateUrl: contentTopHtml,
    link: function ($scope) {
      $scope.$watch(function () {
        $scope.activePageTitle = $state.current.title
      })
    }
  }
}
