// NOTE: nbApp is defined in app.js
nbioApp.controller('basicsController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.oneLineCaptions = [
            'Install NPM Packages',
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
            'The database connections are set in /app/config/databases.py. You ought to change these to suit your needs.',
          ]
          break;
        case 'fixed-gateway':
          $scope.oneLineCaptions = [
            'Install NPM Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'A node server cluster based on ./app.js is created by the npm package \'cluster\'. The file is ./cluster_app.js'
          ]
          break;
        case 'friendly-finder':
          $scope.oneLineCaptions = [
            'Install NPM Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Changing the development IP Address in webpack.config.js',
          ]
          break;
        case 'hungry-interceptor':
          $scope.oneLineCaptions = [
            'Start the mongo database',
            'Start the neo4j database',
            'Install Python Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'The database connections are set in /app/config/databases.py. You ought to change these to suit your needs.',
          ]
          break;
        case 'log-grower':
          $scope.oneLineCaptions = [
            'Install Bower Package Manager',
            'Install Grunt Task Runner',
            'Install NPM Packages',
            'Install Bower Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Example of a data visualization directive',
          ]
          break;
        case 'nathanielbuechler':
          $scope.oneLineCaptions = [
            'Run the app',
          ]
          $scope.multiLineCaptions = [
            'The hexagon role grid is implemented with CSS',
          ]
          break;
        case 'nb.com-v8':
          $scope.oneLineCaptions = [
            'Install Bower Package Manager',
            'Install NPM Packages',
            'Install Bower Packages',
            'Run the app',
          ]
          $scope.multiLineCaptions = [
            'The hexagon role grid is implemented with CSS',
          ]
          break;
        case 'nb.io':
          $scope.oneLineCaptions = [
            'Install Bower Package Manager',
            'Install NPM Packages',
            'Install Bower Packages',
            'Run the app',
          ]
          $scope.multiLineCaptions = [
            'Create this page. Located in /js/controllers/basics-ctrl.js',
          ]
          break;
        case 'speedy-affect-scorer':
          $scope.oneLineCaptions = [
            'Start the mongo database',
            'Start the neo4j database',
            'Install Python Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Process for making the initial corpora with an enpoint',
          ]
          break;
        case 'studious-display':
          $scope.oneLineCaptions = [
            'Install NPM Packages',
            'Run the app in development mode',
          ]
          $scope.multiLineCaptions = [
            'Changing the development IP Address in webpack.config.js',
          ]
          break;
        default:
          $scope.oneLineCaptions = []
          $scope.multiLineCaptions = []
      }

    }]);
