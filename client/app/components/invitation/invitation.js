import angular from 'angular';
import invitationComponent from './invitation.component';

let invitationModule = angular.module('invitation', [])

.component('invitation', invitationComponent)
.name;

export default invitationModule;
