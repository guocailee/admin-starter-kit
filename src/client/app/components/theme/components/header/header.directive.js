/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import headerHtml from 'ngtemplate!html!./header.html'
import headerCtrl from './header.ctrl'
export default function (headerService) {
  'ngInject'
  return {
    restrict: 'E',
    controller: headerCtrl,
    controllerAs: 'ctrl',
    templateUrl: headerHtml,
    scope: {
      allSoft: '=?',
      download: '=?'
    }
  }
}
