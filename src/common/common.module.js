import angular from 'angular';

import createdFromFilter from './filters/createdFrom.filter';
import createdToFilter from './filters/createdTo.filter';
import maxSizeFilter from './filters/maxSize.filter';
import minSizeFilter from './filters/minSize.filter';

let commonModule = angular.module('app.common', [])

.filter('createdFrom', createdFromFilter)
.filter('createdTo', createdToFilter)
.filter('maxSize', maxSizeFilter)
.filter('minSize', minSizeFilter)

.name;

export default commonModule;
