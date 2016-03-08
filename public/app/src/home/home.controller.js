function HomeController($scope, loginFactory, $state) {

    $scope.logout = function() {
        loginFactory.logout();
        $state.go('login');
    };
}

export default HomeController;
