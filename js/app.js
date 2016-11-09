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


        /*
         * Documentation pages
         * =================== *
         */

        /*
         * ample-affect-exhibit
         */
        .state('ample-affect-exhibit-0', {
            url: '/ample-affect-exhibit/0',
            views: {
                '': { templateUrl: '../views/ample-affect-exhibit/0.html' }
            }
        })
        .state('ample-affect-exhibit-1', {
            url: '/ample-affect-exhibit/1',
            views: {
                '': { templateUrl: '../views/ample-affect-exhibit/1.html' }
            }
        })
        .state('ample-affect-exhibit-2', {
            url: '/ample-affect-exhibit/2',
            views: {
                '': { templateUrl: '../views/ample-affect-exhibit/2.html' }
            }
        })
        .state('ample-affect-exhibit-3', {
            url: '/ample-affect-exhibit/3',
            views: {
                '': { templateUrl: '../views/ample-affect-exhibit/3.html' }
            }
        })
        .state('ample-affect-exhibit-4', {
            url: '/ample-affect-exhibit/4',
            views: {
                '': { templateUrl: '../views/ample-affect-exhibit/4.html' }
            }
        })
        /*
         * basic-poll
         */
        .state('basic-poll-0', {
            url: '/basic-poll/0',
            views: {
                '': { templateUrl: '../views/readme.html' }
            }
        })

});
