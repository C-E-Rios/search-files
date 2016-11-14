import _ from 'lodash';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import 'angular-material/angular-material.css';

import dirPagination from 'angular-utils-pagination';

import Components from './components/components.module';
import Common from './common/common.module';

import AppComponent from './app/app.component';
import AppService from './app/app.service';

angular
    .module('app', [
        uiRouter,
        ngMaterial,
        ngMdIcons,
        dirPagination,
        Components,
        Common
    ])
    .config(($locationProvider, $mdThemingProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true).hashPrefix('!');
        
        $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('pink')
          .warnPalette('cyan');
    })
    .service('AppService', AppService)
    .component('app', AppComponent);
