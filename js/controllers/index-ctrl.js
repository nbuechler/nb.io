// NOTE: nbApp is defined in app.js
nbioApp.controller('indexController', ['$scope', '$http',
    function($scope, $http) {

      $scope.loading = 1;

      $scope.projects = [];
      $http.get('https://api.github.com/users/nbuechler/repos')
      .success(function(response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          if (response[i].fork != true) {
            $scope.projects.push(response[i]);
          }
        }
        $scope.loading = 0;
      });

    }]);
