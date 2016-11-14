import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import 'angular-material/angular-material.css';

import Components from './components/components.module';

import AppComponent from './app/app.component';
import AppService from './app/app.service';

angular
    .module('app', [
        uiRouter,
        ngMaterial,
        ngMdIcons,
        Components
    ])
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .service('AppService', AppService)
    .component('app', AppComponent);
