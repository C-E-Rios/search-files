import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchListComponent from './searchList.component';

let searchListModule = angular.module('searchList', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('searchList', {
            url: '/',
            component: 'searchList'
        });
})

.component('searchList', searchListComponent)

.name;

export default searchListModule;
