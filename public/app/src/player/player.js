import angular from 'angular';
import component from './player.component';
import playerFactory from './player.factory';

export default angular.module('app.player', [])
    .directive('appPlayer', component)
    .factory('playerFactory', playerFactory)
