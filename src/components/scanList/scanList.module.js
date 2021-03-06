import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scanListComponent from './scanList.component';

let scanListModule = angular.module('scanList', [
    uiRouter
])

.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('scanList', {
            url: '/scan-list/{scanId}',
            template: '<scan-list layout="row" layout-fill></scan-list>'
        });
})

.component('scanList', scanListComponent)

.name;

export default scanListModule;
