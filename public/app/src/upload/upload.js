import angular from 'angular';
import component from './upload.component';
import uploadFactory from './upload.factory';

export default angular.module('app.upload', [])
    .directive('appUpload', component)
    .factory('uploadFactory', uploadFactory);
