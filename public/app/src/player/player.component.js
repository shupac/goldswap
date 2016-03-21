import template from './player.template.html';
import controller from './player.controller'
import './player.styl';

export default function() {
    return {
        template,
        controller,
        restrict: 'E'
    };
};
