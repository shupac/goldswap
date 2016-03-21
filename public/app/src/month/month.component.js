import template from './month.template.html';
import controller from './month.controller'
import './month.styl';

export default function() {
    return {
        template,
        controller,
        restrict: 'E'
    };
};
