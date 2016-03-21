function NavController($scope, $rootScope, $state, loginFactory) {
    $scope.logout = function() {
        loginFactory.logout();
        $state.go('login');
    };
}

export default NavController;
