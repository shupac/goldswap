function LoginController($scope, loginFactory) {
    'ngInject'

    $scope.login = loginFactory.authenticate;
}

export default LoginController;
