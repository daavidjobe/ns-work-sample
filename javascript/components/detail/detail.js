import angular from 'angular'
import uiRouter from 'angular-ui-router'
import detailComponent from './detail.component'
import moviesService from '../movies/movies.service'
import './detail.less'


let detailModule = angular.module('detail', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('detail', {
      url: '/detail/:id',
      template: '<detail></detail>'
    });
})

.component('detail', detailComponent)
.service('moviesService', moviesService)

export default detailModule;