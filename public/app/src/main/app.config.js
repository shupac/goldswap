function config($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject'

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>HOME</h1>',
            data: { protect: true }
        })
        .state('login', {
            url: '/login',
            template: '<app-login></app-login>',
            data: { protect: false }
        });
}

export default config;
