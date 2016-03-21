function MonthController($scope, loginFactory, $state, FIREBASE_URL, $firebaseArray, $firebaseObject) {

    var fbRef = new Firebase(FIREBASE_URL);

    $scope.tracks = $firebaseArray(fbRef.child('tracks'));

    $scope.logout = function() {
        loginFactory.logout();
        $state.go('login');
    };
}

export default MonthController;
