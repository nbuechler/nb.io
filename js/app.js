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
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
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
         * Section 0
         */
        .state('basic-poll-0', {
            url: '/basic-poll/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('cat-clicker-0', {
            url: '/cat-clicker/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('copious-affect-corpus-0', {
            url: '/copious-affect-corpus/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('einstein-network-0', {
            url: '/einstein-network/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('energetic-etl-0', {
            url: '/energetic-etl/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('evgroio-0', {
            url: '/evgroio/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('exciting-playground-0', {
            url: '/exciting-playground/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('fixed-gateway-0', {
            url: '/fixed-gateway/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('friendly-finder-0', {
            url: '/friendly-finder/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('hex-psd-roles-0', {
            url: '/hex-psd-roles/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('hungry-interceptor-0', {
            url: '/hungry-interceptor/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('hungry-librarian-0', {
            url: '/hungry-librarian/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('ideo-quest-0', {
            url: '/ideo-quest/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('javascript-density-scope-0', {
            url: '/javascript-density-scope/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('log-grower-0', {
            url: '/log-grower/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('microblog-tut-0', {
            url: '/microblog-tut/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('nathanielbuechler-0', {
            url: '/nathanielbuechler/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('nb-com-v8-0', {
            url: '/nb.com-v8/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('nb-io-0', {
            url: '/nb.io/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('nbuechler-github-io-0', {
            url: '/nbuechler.github.io/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('nw-nb-desktop-0', {
            url: '/nw-nb-desktop/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('serpentine-learner-0', {
            url: '/serpentine-learner/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('speedy-affect-scorer-0', {
            url: '/speedy-affect-scorer/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('studious-display-0', {
            url: '/studious-display/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })
        .state('turnt-octo-robot-0', {
            url: '/turnt-octo-robot/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })

});
