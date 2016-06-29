/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function ($timeout, $rootScope) {
  return {
    restrict: 'A',
    link: function ($scope, elem) {
      var delay = 1000

      if ($rootScope.$pageFinishedLoading) {
        delay = 100
      }
      $timeout(function () {
        elem.removeClass('full-invisible')
        elem.addClass('animated zoomIn')
      }, delay)
    }
  }
}
