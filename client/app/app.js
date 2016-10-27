import angular from 'angular';

import AppComponent from './app.component';
import Components from './components/components';
import Filters from './filters/filters';
import InvitationService from './app.service';

import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import 'angular-material/angular-material.css';

angular.module('app', [
        ngMaterial,
        ngMdIcons,
        Components,
        Filters
    ])

    .config(($locationProvider, $mdThemingProvider) => {
        'ngInject';
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');

        // theme for ngMaterial
        $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('pink')
          .warnPalette('cyan');
    })

    .service('invitationService', InvitationService)

    .component('app', AppComponent);
