function LoginController($scope, $stateParams, loginFactory) {
    'ngInject'

    var inviteToken = $stateParams.inviteToken;

    $scope.login = function() {
        loginFactory.login(inviteToken).then(function() {
            console.log('sign up done');
        }, function() {
            console.log('not authorized');
        });
    };

    $scope.logout = loginFactory.logout;
}

export default LoginController;
