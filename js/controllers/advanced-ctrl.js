// NOTE: nbApp is defined in app.js
nbioApp.controller('advancedController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {


      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      if (readmePageTitle == 'ample-affect-exhibit') {
        $scope.headings_01 = [
          'How does fetching processed Affective Data work?',
        ]
        $scope.captions_01 = [
          'R-EMOTION scores are stored via Redux',
        ]
      }

    }]);