// NOTE: nbApp is defined in app.js
nbioApp.controller('indexController', ['$scope', '$http',
    function($scope, $http) {

      $http.get('https://api.github.com/users/nbuechler/repos')
      .success(function(response) {
        console.log(response);
        $scope.projects = response;
      });

    }]);
