/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import wizardStepHtml from 'ngtemplate!html!./wizard-step.html'
export default function () {
  return {
    restrict: 'E',
    transclude: true,
    require: '^baWizard',
    scope: {
      form: '='
    },
    templateUrl: wizardStepHtml,
    link: function ($scope, $element, $attrs, wizard) {
      $scope.selected = true
      let select = function (isSelected) {
        if (isSelected) {
          $scope.selected = true
        } else {
          $scope.selected = false
        }
      }

      let submit = function () {
        $scope.form && $scope.form.$setSubmitted(true)
      }

      let isComplete = function () {
        return $scope.form ? $scope.form.$valid : true
      }

      let isAvailiable = function () {
        return tab.prevTab ? tab.prevTab.isComplete() : true
      }

      let setPrev = function (pTab) {
        tab.prevTab = pTab
      }
      var tab = {
        title: $attrs.title,
        select: select,
        submit: submit,
        isComplete: isComplete,
        isAvailiable: isAvailiable,
        prevTab: undefined,
        setPrev: setPrev
      }
      wizard.addTab(tab)
    }
  }
}
