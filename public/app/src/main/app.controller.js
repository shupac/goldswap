function AppController($scope, $state, loginFactory) {
    'ngInject'

    $scope.logout = function() {
        loginFactory.logout();
        $state.go('login');
    };
}

export default AppController;
