// NOTE: nbApp is defined in app.js
nbioApp.controller('introductionController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
          ]
          break;
        case 'basic-poll':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'Limitations',
          ]
          break;
        default:
        $scope.headings = []
      }

    }]);
