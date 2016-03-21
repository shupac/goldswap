function HomeController($scope, FIREBASE_URL, $firebaseArray, $firebaseObject) {
    var fbRef = new Firebase(FIREBASE_URL);

    $scope.tracks = $firebaseArray(fbRef.child('tracks'));
}

export default HomeController;
