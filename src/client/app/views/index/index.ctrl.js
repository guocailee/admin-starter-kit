/**
 * @author liguocai
 * @Date 2016-08-16
 */
let indexCtrl = ($scope, softtypeService, softwareService, $mdToast) => {
  'ngInject'
  softtypeService.get().then((data) => {
    $scope.softTypeList = data.softTypeList
    $scope.allSoft = data.allSoft
  }).catch((error) => console.error(error))
  $scope.download = (soft) => {
    softwareService.download({
      softInfoId: soft.id
    }).then((data) => {
      if (data.softInfo.currVersion) {
        document.location.href = data.softInfo.currVersion.url
      } else {
        // TODO: alert no avlivable verison
      }
    })
  }
}
export default indexCtrl
