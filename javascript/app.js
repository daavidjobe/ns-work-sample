import angular from 'angular'
import uiRouter from 'angular-ui-router'
import AppComponent from './app.component'
import Components from './components/components'
import './components/main.less'

angular.module('moviez', [
  uiRouter,
  Components.name
])
.directive('app', AppComponent)