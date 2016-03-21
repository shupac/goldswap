import angular from 'angular';
import fileLoader from './fileLoader/fileLoader';
import user from './filters/user';
import topic from './filters/topic';

var components = angular.module('app.components', [
    fileLoader.name
])
    .filter('user', user)
    .filter('topic', topic)

export default components;
