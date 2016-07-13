import './preloader.scss'
import preloaderService from './preloader.service'
const preloader = angular.module('zk.theme.components.preloader', []).service('preloader', preloaderService)
module.exports = preloader
