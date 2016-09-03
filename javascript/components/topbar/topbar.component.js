import template from './topbar.html';
import controller from './topbar.controller';

let topbarComponent = () => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default topbarComponent;