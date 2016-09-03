import template from './movies.html';
import controller from './movies.controller';

let moviesComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default moviesComponent;