import angular from 'angular'
import uiRouter from 'angular-ui-router'
import searchComponent from './search.component'
import moviesService from '../movies/movies.service'
import './search.less'


let searchModule = angular.module('search', [
  uiRouter
])

.component('search', searchComponent)
.service('moviesService', moviesService)

export default searchModule;