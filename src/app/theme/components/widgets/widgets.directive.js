/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import widgetsHtml from 'ngtemplate!html!./widgets.html'
export default function () {
  return {
    restrict: 'EA',
    scope: {
      ngModel: '='
    },
    templateUrl: widgetsHtml,
    replace: true
  }
}
