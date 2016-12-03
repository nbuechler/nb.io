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
        case 'copious-affect-corpus':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'What is an R-EMOTION?',
            'What is an I-EMOTION?',
            'The Problem',
            'Limitations',
            'Solutions',
            'Lessons Learned',
          ]
          break;
        case 'energetic-etl':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
            'Lessons Learned',
          ]
          break;
        case 'evgroio':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
            'Lessons Learned',
          ]
          break;
        case 'fixed-gateway':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
          ]
          break;
        case 'friendly-finder':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
          ]
          break;
        case 'hungry-interceptor':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
            'Lessons Learned',
          ]
          break;
        case 'log-grower':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
          ]
          break;
        case 'nathanielbuechler':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
          ]
          break;
        case 'nb.com-v8':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
          ]
          break;
        case 'nb.io':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
          ]
          break;
        case 'speedy-affect-scorer':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
            'Lessons Learned',
          ]
          break;
        case 'studious-display':
          $scope.headings = [
            'What license is this project?',
            'Why is this important?',
            'The Problem',
            'Limitations',
            'Solutions',
          ]
          break;
        default:
        $scope.headings = []
      }

    }]);
