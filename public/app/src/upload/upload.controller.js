function UploadController($scope, $stateParams, uploadFactory, loginFactory, firebaseFactory) {
    'ngInject'

    $scope.month = $stateParams.month;
    console.log($scope.month);

    $scope.submit = function() {
        $scope.uploading = true;
        uploadFactory.upload($scope.file).then(function(url) {
            console.log('controller:', url, 'month', $scope.month);
            updateFirebase(url);
            alert('uploaded!');
            $scope.uploading = false;
            window.location.reload();
        });
    };

    function updateFirebase(url) {
        var trackRef = firebaseFactory.child('tracks').push({
            artist: $scope.artist,
            title: $scope.title,
            remixer: $scope.remixer || null,
            url: encodeURI(url),
            userId: loginFactory.getUser(),
            month: $scope.month
        }, function(err) {
            if (err) console.log(err);
            else console.log('finished');
            // firebaseFactory.child('month').child($scope.month).push({
            //     trackId: trackRef.key()
            // });
            trackRef.child('topic').set(trackRef.key());
        });
    }
}

export default UploadController;
