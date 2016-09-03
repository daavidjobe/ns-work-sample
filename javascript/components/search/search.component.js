import template from './search.html';
import controller from './search.controller';

let searchComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default searchComponent;