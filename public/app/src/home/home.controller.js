import moment from 'moment';

function HomeController($scope, $state, tracksFactory, playerFactory) {
    'ngInject'

    $scope.tracks = tracksFactory;

    $scope.goMonth = function() {
        var month = moment().format('YYYY[-]MM');
        $state.go('month', { month: month });
    };

    $scope.load = function(track) {
        playerFactory.loadTrack(track);
    };
}

export default HomeController;
