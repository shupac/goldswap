import angular from 'angular';
import component from './fileLoader.component';

export default angular.module('app.fileLoader', [])
    .directive('fileLoader', component);
