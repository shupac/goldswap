function NavController($scope, $rootScope, $state, loginFactory) {
    'ngInject'

    $scope.logout = function() {
        loginFactory.logout();
        $state.go('login');
    };
}

export default NavController;
