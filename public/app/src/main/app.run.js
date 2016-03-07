function run($rootScope, $state, loginFactory) {
    'ngInject'

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        if(!loginFactory.getUser() && toState.data.protect) {
            event.preventDefault();
            $state.go('upload');
            $rootScope.returnState = toState;
        }
    });
};

export default run;
