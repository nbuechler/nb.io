var nbioApp = angular.module('nbioApp', ['ui.router', 'ngMaterial']);

nbioApp.config(function($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false); // Injection might be possible!!
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: '../views/home.html' },
            }
        })

        .state('secret', {
            url: '/secret',
            views: {
                '': { templateUrl: '../views/secret-page.html' }
            }
        })

});
