import angular from 'angular';
import component from './month.component';

export default angular.module('app.month', [])
    .directive('appMonth', component);
