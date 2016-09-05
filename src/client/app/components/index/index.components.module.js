import zkHeader from './header/header.module'
import zkFooter from './footer/footer.module'
import zkMain from './main/main.module'

export default angular.module('index.components', [
  zkHeader,
  zkMain,
  zkFooter
]).name
