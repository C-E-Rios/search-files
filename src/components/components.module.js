import angular from 'angular';
import SearchList from './searchList/searchList.module';
import ScanList from './scanList/scanList.module';

let componentModule = angular.module('app.components', [
    SearchList,
    ScanList
])

.name;

export default componentModule;
