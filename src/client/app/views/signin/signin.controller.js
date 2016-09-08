export default ($scope, signinService) => {
  'ngInject'
  let vm = this
  vm.params = {
    username: '',
    password: ''
  }
  vm.signin = function () {
    signinService.login(vm.params).then((data) => {

    }, () => {

    })
  }
}
