/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function ($timeout, $parse) {
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.autoFocus)
      scope.$watch(model, function (value) {
        if (value === true) {
          $timeout(function () {
            element[0].focus()
            element[0].select()
          })
        }
      })
      element.bind('blur', function () {
        scope.$apply(model.assign(scope, false))
      })
    }
  }
}
