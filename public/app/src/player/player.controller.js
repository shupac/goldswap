function PlayerController($scope, playerFactory) {
    // $scope.$watch(function() {
        // console.log('watch', playerFactory.getTrack());
        $scope.track = playerFactory.getTrack;
    // });
}

export default PlayerController;
