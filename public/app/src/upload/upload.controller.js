function UploadController($scope, $stateParams, uploadFactory, loginFactory, FIREBASE_URL) {
    'ngInject'

    var fbRef = new Firebase(FIREBASE_URL);

    $scope.month = $stateParams.month;
    console.log($scope.month);

    $scope.submit = function() {
        uploadFactory.upload($scope.file).then(function(url) {
            console.log('controller:', url, 'month', $scope.month);
            updateFirebase(url);
        });
    };

    function updateFirebase(url) {
        var trackId = fbRef.child('tracks').push({
            artist: $scope.artist,
            title: $scope.title,
            remixer: $scope.remixer || null,
            url: url,
            userId: loginFactory.getUser(),
            month: $scope.month
        }, function(err) {
            if (err) console.log(err);
            else console.log('finished');
            fbRef.child('month').child($scope.month).push({
                trackId: trackId.key()
            });
        });
    }
}

export default UploadController;
