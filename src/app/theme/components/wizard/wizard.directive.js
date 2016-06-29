/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

import wizardHtml from 'ngtemplate!html!./wizard.html'
export default function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: wizardHtml,
    controllerAs: '$zkWizardController',
    controller: 'zkWizardCtrl'
  }
}
