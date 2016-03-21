function PlayerController($scope, playerFactory) {
    'ngInject'

    // $scope.$watch(function() {
        // console.log('watch', playerFactory.getTrack());
        $scope.track = playerFactory.getTrack;
    // });
}

export default PlayerController;
