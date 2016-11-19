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
         * Section 0 ==========================================================
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
        .state('voting-server-0', {
            url: '/voting-server/0',
            views: {
                '': {
                  templateUrl: '../views/readme.html',
                  controller: "readmeController"
                }
            }
        })

        /*
         * Section 1 ==========================================================
         */
        .state('ample-affect-exhibit-1', {
            url: '/ample-affect-exhibit/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('basic-poll-1', {
            url: '/basic-poll/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('cat-clicker-1', {
            url: '/cat-clicker/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('copious-affect-corpus-1', {
            url: '/copious-affect-corpus/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('einstein-network-1', {
            url: '/einstein-network/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('energetic-etl-1', {
            url: '/energetic-etl/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('evgroio-1', {
            url: '/evgroio/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('exciting-playground-1', {
            url: '/exciting-playground/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('fixed-gateway-1', {
            url: '/fixed-gateway/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('friendly-finder-1', {
            url: '/friendly-finder/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('hex-psd-roles-1', {
            url: '/hex-psd-roles/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('hungry-interceptor-1', {
            url: '/hungry-interceptor/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('hungry-librarian-1', {
            url: '/hungry-librarian/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('ideo-quest-1', {
            url: '/ideo-quest/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('javascript-density-scope-1', {
            url: '/javascript-density-scope/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('log-grower-1', {
            url: '/log-grower/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('microblog-tut-1', {
            url: '/microblog-tut/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('nathanielbuechler-1', {
            url: '/nathanielbuechler/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('nb-com-v8-1', {
            url: '/nb.com-v8/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('nb-io-1', {
            url: '/nb.io/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('nbuechler-github-io-1', {
            url: '/nbuechler.github.io/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('serpentine-learner-1', {
            url: '/serpentine-learner/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('speedy-affect-scorer-1', {
            url: '/speedy-affect-scorer/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('studious-display-1', {
            url: '/studious-display/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })
        .state('turnt-octo-robot-1', {
            url: '/turnt-octo-robot/1',
            views: {
                '': {
                  templateUrl: '../views/introduction.html',
                  controller: "introductionController"
                }
            }
        })

        /*
         * Section 2 ==========================================================
         */
        .state('ample-affect-exhibit-2', {
            url: '/ample-affect-exhibit/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('basic-poll-2', {
            url: '/basic-poll/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('cat-clicker-2', {
            url: '/cat-clicker/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('copious-affect-corpus-2', {
            url: '/copious-affect-corpus/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('einstein-network-2', {
            url: '/einstein-network/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('energetic-etl-2', {
            url: '/energetic-etl/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('evgroio-2', {
            url: '/evgroio/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('exciting-playground-2', {
            url: '/exciting-playground/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('fixed-gateway-2', {
            url: '/fixed-gateway/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('friendly-finder-2', {
            url: '/friendly-finder/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('hex-psd-roles-2', {
            url: '/hex-psd-roles/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('hungry-interceptor-2', {
            url: '/hungry-interceptor/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('hungry-librarian-2', {
            url: '/hungry-librarian/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('ideo-quest-2', {
            url: '/ideo-quest/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('javascript-density-scope-2', {
            url: '/javascript-density-scope/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('log-grower-2', {
            url: '/log-grower/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('microblog-tut-2', {
            url: '/microblog-tut/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('nathanielbuechler-2', {
            url: '/nathanielbuechler/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('nb-com-v8-2', {
            url: '/nb.com-v8/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('nb-io-2', {
            url: '/nb.io/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('nbuechler-github-io-2', {
            url: '/nbuechler.github.io/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('serpentine-learner-2', {
            url: '/serpentine-learner/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('speedy-affect-scorer-2', {
            url: '/speedy-affect-scorer/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('studious-display-2', {
            url: '/studious-display/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })
        .state('turnt-octo-robot-2', {
            url: '/turnt-octo-robot/2',
            views: {
                '': {
                  templateUrl: '../views/basics.html',
                  controller: "basicsController"
                }
            }
        })

        /*
         * Section 3 ==========================================================
         */
        .state('ample-affect-exhibit-3', {
            url: '/ample-affect-exhibit/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('basic-poll-3', {
            url: '/basic-poll/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('cat-clicker-3', {
            url: '/cat-clicker/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('copious-affect-corpus-3', {
            url: '/copious-affect-corpus/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('einstein-network-3', {
            url: '/einstein-network/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('energetic-etl-3', {
            url: '/energetic-etl/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('evgroio-3', {
            url: '/evgroio/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('exciting-playground-3', {
            url: '/exciting-playground/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('fixed-gateway-3', {
            url: '/fixed-gateway/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('friendly-finder-3', {
            url: '/friendly-finder/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('hex-psd-roles-3', {
            url: '/hex-psd-roles/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('hungry-interceptor-3', {
            url: '/hungry-interceptor/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('hungry-librarian-3', {
            url: '/hungry-librarian/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('ideo-quest-3', {
            url: '/ideo-quest/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('javascript-density-scope-3', {
            url: '/javascript-density-scope/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('log-grower-3', {
            url: '/log-grower/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('microblog-tut-3', {
            url: '/microblog-tut/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('nathanielbuechler-3', {
            url: '/nathanielbuechler/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('nb-com-v8-3', {
            url: '/nb.com-v8/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('nb-io-3', {
            url: '/nb.io/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('nbuechler-github-io-3', {
            url: '/nbuechler.github.io/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('serpentine-learner-3', {
            url: '/serpentine-learner/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('speedy-affect-scorer-3', {
            url: '/speedy-affect-scorer/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('studious-display-3', {
            url: '/studious-display/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })
        .state('turnt-octo-robot-3', {
            url: '/turnt-octo-robot/3',
            views: {
                '': {
                  templateUrl: '../views/advanced.html',
                  controller: "advancedController"
                }
            }
        })

});
