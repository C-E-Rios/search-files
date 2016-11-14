import angular from 'angular';
import SearchList from './searchList/searchList.module';

let componentModule = angular.module('app.components', [
    SearchList
])

.name;

export default componentModule;
