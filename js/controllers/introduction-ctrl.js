// NOTE: nbApp is defined in app.js
nbioApp.controller('introductionController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.headings = [
            'What license is this project?',
            'What is affect?',
            'Why is this important?',
          ]
          break;
        default:
        $scope.headings = []
      }

    }]);
