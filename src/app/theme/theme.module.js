import themeConfigProvider from './theme.configProvider'
import themeConfig from './theme.config'
import themeRun from './theme.run'
import themeService from './theme.service'
import themeConstants from './theme.constants'

const theme = angular.module('zk.theme', [])

theme.provider('zkConfig', themeConfigProvider)
theme.config(themeConfig)
theme.constant('layoutSizes', themeConstants.layoutSizes)
  .constant('layoutPaths', themeConstants.layoutPaths)
  .constant('colorHelper', themeConstants.colorHelper)
theme.service('themeLayoutSettings', themeService)
theme.run(themeRun)

export default theme.name
