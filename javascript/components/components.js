import angular from 'angular'
import Movies from './movies/movies'
import Detail from './detail/detail'
import Topbar from './topbar/topbar'
import Search from './search/search'


export default angular.module('app.components', [
  Movies.name,
  Detail.name,
  Topbar.name,
  Search.name
])