function config($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject'

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            template: '<app-home></app-home>',
            data: { protect: true }
        })
        .state('login', {
            url: '/login',
            template: '<app-login></app-login>',
            data: { protect: false }
        })
        .state('signup', {
            url: '/signup/:inviteToken',
            template: '<app-login></app-login>',
            data: { protect: false }
        })
        .state('upload', {
            url: '/upload',
            template: '<app-upload></app-upload>',
            data: { protect: true }
        })
}

export default config;
