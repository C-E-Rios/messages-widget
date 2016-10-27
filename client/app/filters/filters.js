import angular from 'angular';
import uniqueFilter from './unique.filter';
import multipleSearchFilter from './multipleSearch.filter';
import invitationFilter from './invitation.filter';

let filterModule = angular.module('app.filters', [])
    .filter('unique', uniqueFilter)
    .filter('multipleSearch', multipleSearchFilter)
    .filter('invitation', invitationFilter)
    .name;

export default filterModule;
