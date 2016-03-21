import angular from 'angular';
import component from './nav.component';

export default angular.module('app.nav', [])
    .directive('appNav', component);
