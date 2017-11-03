// NOTE: nbApp is defined in app.js
nbioApp.controller('indexController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      $scope.loading = 1;
      $scope.logroMicroservices = [
        'ample-affect-exhibit',
        'copious-affect-corpus',
        'energetic-etl',
        'fixed-gateway',
        'friendly-finder',
        'hungry-interceptor',
        'kind-assistant',
        'log-grower',
        'speedy-affect-scorer',
        'studious-display',
      ];

      $scope.projects = [];
      /*
       * Use this to get the most up-to-date repos:
       * $http.get('https://api.github.com/users/nbuechler/repos')
       */
      $http.get('js/json/repos.json')
      .success(function(response) {
        // console.log(response);
        for (var i = 0; i < response.length; i++) {
          if (response[i].fork != true) {
            $scope.projects.push(response[i]);
          }
        }
        $scope.loading = 0;
      });

    }]);
