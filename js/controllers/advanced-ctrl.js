// NOTE: nbApp is defined in app.js
nbioApp.controller('advancedController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {


      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.headings_01 = [
            'How does fetching processed Affective Data work?',
          ]
          $scope.captions_01 = [
            'R-EMOTION scores are stored via Redux',
          ]
          break;
        case 'copious-affect-corpus':
          $scope.headings_01 = [
            'How does a \'flat_list\'/list of words get created?',
          ]
          $scope.captions_01 = [
            'Generating a \'flat_list\'',
          ]
          break;
        case 'energetic-etl':
          $scope.headings_01 = [
            'How does loading processed \'affect-word\' similarity data work?',
          ]
          $scope.captions_01 = [
            'Running time-intensive load proccesses from neo4j to mongo. Located in /app/load/views.py',
          ]
          break;
        default:
          $scope.headings_01 = []
          $scope.captions_01 = []
      }

    }]);
