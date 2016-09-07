/**
 *  @author guocailee
 *  @Date   2016-08-20
 */
let headerCtrl = function ($scope) {
  'ngInject'
  let vm = this
  vm.querySearch = (text) => {
    return $scope.allSoft.filter((soft) => {
      if (!text) {
        return true
      }
      let lcText = angular.lowercase(text)
      if (angular.lowercase(soft.name).indexOf(lcText) >= 0 ||
        angular.lowercase(soft.description).indexOf(lcText) >= 0) {
        return true
      } else {
        return false
      }
    })
  }
}
headerCtrl.$inject = ['$scope']
export default headerCtrl
