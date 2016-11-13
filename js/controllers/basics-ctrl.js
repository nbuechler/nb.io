// NOTE: nbApp is defined in app.js
nbioApp.controller('basicsController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      if (readmePageTitle == 'ample-affect-exhibit') {
        $scope.oneLineCaptions = [
          'Install NPM Packages',
          'Install Bower Dependencies',
          'Run the app in development mode',
        ]
        $scope.multiLineCaptions = [
          'Changing the development IP Address in webpack.config.js',
          'Example of \'notImplemented\' found on dashboard',
        ]
      }

    }]);
