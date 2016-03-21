function run($rootScope, $state, loginFactory) {
    'ngInject'

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        $rootScope.showPlayer = toState.data.player;
        $rootScope.showNav = toState.data.protect;
        if (!loginFactory.getUser() && toState.data.protect) {
            $rootScope.showPlayer = false;
            event.preventDefault();
            $state.go('login');
            $rootScope.returnState = toState;
            $rootScope.returnParams = toParams;
        }
    });
};

export default run;
