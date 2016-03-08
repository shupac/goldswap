function LoginController($scope, $stateParams, loginFactory, $rootScope, $state) {
    'ngInject'

    var inviteToken = $stateParams.inviteToken;

    $scope.login = function() {
        loginFactory.login(inviteToken).then(function() {
            console.log('sign up done');
            $state.go($rootScope.returnState || 'home');
        }, function() {
            console.log('not authorized');
            alert('You are not authorized');
        });
    };
}

export default LoginController;
