/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import footer from 'ngtemplate!html!./footer.html'
export default function ($window) {
  'ngInject'
  return {
    restrict: 'E',
    templateUrl: footer,
    link: function ($scope) {},
    scope: {}
  }
}
