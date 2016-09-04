import angular from 'angular'
import uiRouter from 'angular-ui-router'
import moviesComponent from './movies.component'
import moviesService from './movies.service'
import topbarComponent from '../topbar/topbar.component'
import './movies.less'


let moviesModule = angular.module('movies', [
  uiRouter
])

moviesModule.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

moviesModule.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
  $stateProvider
    .state('movies', {
      url: '/',
      template: '<movies></movies>'
    })
})

.component('movies', moviesComponent)
.service('moviesService', moviesService)

export default moviesModule