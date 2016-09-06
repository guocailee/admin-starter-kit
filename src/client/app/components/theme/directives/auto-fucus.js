/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function ($timeout, $parse) {
  'ngInject'
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.autoFocus)
      scope.$watch(model, function (value) {
        if (value === true) {
          $timeout(function () {
            if (angular.isFunction(element[0].focus)) {
              element[0].focus()
            }
            if (angular.isFunction(element[0].select)) {
              element[0].focus()
            }
          })
        }
      })
      element.bind('blur', function () {
        scope.$apply(model.assign(scope, false))
      })
    }
  }
}
