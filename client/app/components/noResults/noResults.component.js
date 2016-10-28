import template from './noResults.html';
import controller from './noResults.controller';
import './noResults.scss';

let noResultsComponent = {
    restrict: 'E',
    bindings: {
        filter: '<'
    },
    require: {
        home: '^^'
    },
    template,
    controller
};

export default noResultsComponent;
