// NOTE: nbApp is defined in app.js
nbioApp.controller('basicsController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.oneLineCaptions = [
            'Install NPM Packages',
            'Install Bower Dependencies',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Changing the development IP Address in webpack.config.js',
            'Example of \'notImplemented\' found on dashboard',
          ]
          break;
        case 'copious-affect-corpus':
          $scope.oneLineCaptions = [
            'Install Python Packages',
            'Run the app in development mode',
            'Export Mongo Database in Linux',
            'Export Mongo Database in Windows',
            'Import Mongo Database in Linux',
            'Import Mongo Database in Windows',
          ]
          $scope.multiLineCaptions = [
            'Endpoint for saving a new R-EMOTION without antonyms'
          ]
          break;
        case 'energetic-etl':
          $scope.oneLineCaptions = [
            'Start the mongo database',
            'Start the neo4j database',
            'Install Python Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Load the linguistic corpora into neo4j. Located in /app/load/views.py',
          ]
          break;
        default:
          $scope.oneLineCaptions = []
          $scope.multiLineCaptions = []
      }

    }]);
