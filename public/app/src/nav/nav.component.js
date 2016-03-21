import template from './nav.template.html';
import controller from './nav.controller'
import './nav.styl';

export default function() {
    return {
        template,
        controller,
        restrict: 'E'
    };
};
