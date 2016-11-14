import angular from 'angular';
import SearchList from './searchList/searchList.module';
import ScanList from './ScanList/ScanList.module';

let componentModule = angular.module('app.components', [
    SearchList,
    ScanList
])

.name;

export default componentModule;
