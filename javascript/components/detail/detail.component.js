import template from './detail.html'
import controller from './detail.controller'

let detailComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default detailComponent