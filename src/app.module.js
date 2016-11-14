import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import 'angular-material/angular-material.css';

import AppComponent from './app/app.component';

angular
    .module('app', [
        uiRouter,
        ngMaterial,
        ngMdIcons
    ])
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);
