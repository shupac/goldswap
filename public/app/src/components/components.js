import angular from 'angular';
import fileLoader from './fileLoader/fileLoader';

let components = angular.module('app.components', [
    fileLoader.name
]);

export default components;
