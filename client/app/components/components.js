import angular from 'angular';
import Home from './home/home';
import Invitation from './invitation/invitation';
import NoResults from './noResults/noResults';

let componentModule = angular.module('app.components', [
    Home,
    Invitation,
    NoResults
])

.name;

export default componentModule;
