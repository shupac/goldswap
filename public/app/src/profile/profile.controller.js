function ProfileController($scope, $timeout, loginFactory) {
    'ngInject'
    
    $scope.userInfo = loginFactory.getUserInfo;
    $scope.editable = false;
    $scope.saved = false;

    $scope.edit = function() {
        $scope.editable = true;
    };

    $scope.saveInfo = function() {
        $scope.editable = false;
        loginFactory.saveInfo()
            .then(function() {
                $scope.showSaved();
            });
    };

    $scope.showSaved = function() {
        $scope.saved = true;
        $timeout(function() {
            $scope.saved = false;
            window.location.reload();
        }, 500);
    }
}

export default ProfileController;
