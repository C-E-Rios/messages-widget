import template from './invitation.html';
import controller from './invitation.controller';
import './invitation.scss';

let invitationComponent = {
    restrict: 'E',
    bindings: {
        invitation: '<'
    },
    template,
    controller
};

export default invitationComponent;
