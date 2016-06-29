/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import zkWizardStep from './wizard-step.directive'
import zkWizard from './wizard.directive'
import zkWizardCtrl from './wizard.controller'
angular.module('zk.theme.components.wizard', [])
  .controller('zkWizardCtrl', zkWizardCtrl)
  .directive('zkWizardStep', zkWizardStep)
  .directive('zkWizard', zkWizard)
