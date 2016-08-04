/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import headerHtml from 'ngtemplate!html!./header.html'
export default function () {
  return {
    restrict: 'E',
    templateUrl: headerHtml,
    link: function ($scope) {
      var bodyDom = document.getElementsByTagName('body')[0]
      var scrollFun = function () {
        $scope.isScrolled = !bodyDom.scrollTop === 0
      }
      bodyDom.addEventListener('scroll', scrollFun)
    }
  }
}
