import angular from 'angular';
import component from './login.component';
import loginFactory from './login.factory';

export default angular.module('app.login', [])
    .directive('appLogin', component)
    .factory('loginFactory', loginFactory)
