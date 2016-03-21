function AppController($scope, $state, loginFactory) {
    'ngInject'

    $scope.logout = function() {
        loginFactory.logout().then(function() {
            $state.go('login');
        });
    };
}

export default AppController;
