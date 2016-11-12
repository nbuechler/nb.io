// NOTE: nbApp is defined in app.js
nbioApp.controller('introductionController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      if (readmePageTitle == 'ample-affect-exhibit') {
        $scope.headings = ['What is Affect?', 'Who is the Audience?']
      }

    }]);
