import angular from 'angular'
import uiRouter from 'angular-ui-router'
import topbarComponent from './topbar.component'
import './topbar.less'
let topbarModule = angular.module('topbar', [
  uiRouter
])

.directive('topbar', topbarComponent);

export default topbarModule;