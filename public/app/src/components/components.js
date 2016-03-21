import angular from 'angular';
import fileLoader from './fileLoader/fileLoader';
import user from './filters/user';

var components = angular.module('app.components', [
    fileLoader.name
]).filter('user', user);

export default components;
