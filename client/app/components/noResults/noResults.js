import angular from 'angular';
import noResultsComponent from './noResults.component';

let noResultsModule = angular.module('noResults', [])

.component('noResults', noResultsComponent)
.name;

export default noResultsModule;
