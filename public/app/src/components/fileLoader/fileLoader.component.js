import controller from './fileLoader.controller';
import './fileLoader.styl';

export default function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            element.bind('change', function (changeEvent) {
                scope.file = changeEvent.target.files[0];
            });
        }
    }
}
