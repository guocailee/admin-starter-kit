export default function ($scope, loginService) {
  'ngInject'
  let vm = this
  vm.params = {
    username: '',
    password: ''
  }
  vm.login = function () {
    loginService.login(vm.params).then((data) => {

    }, () => {

    })
  }
}
