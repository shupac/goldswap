function config($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider) {
    'ngInject'

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true);
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://goldswap.s3.amazonaws.com/**'
    ]);

    $stateProvider
        .state('home', {
            url: '/',
            template: '<app-home></app-home>',
            data: { protect: true, player: true }
        })
        .state('login', {
            url: '/login',
            template: '<app-login></app-login>',
            data: { protect: false, player: false }
        })
        .state('signup', {
            url: '/signup/:inviteToken',
            template: '<app-login></app-login>',
            data: { protect: false, player: false }
        })
        .state('month', {
            url: '/month/:month',
            template: '<app-month></app-month>',
            data: { protect: true, player: true }
        })
        .state('upload', {
            url: '/month/:month/upload',
            template: '<app-upload></app-upload>',
            data: { protect: true, player: false }
        })
        .state('profile', {
            url: '/profile',
            template: '<app-profile></app-profile>',
            data: { protect: true, player: false }
        })
}

export default config;
