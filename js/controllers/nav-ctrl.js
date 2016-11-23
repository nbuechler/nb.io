// NOTE: nbApp is defined in app.js
nbioApp.controller('navController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      let rootPage = $state.current.url.split('/')[2];
      $scope.navRoot = readmePageTitle;
      $scope.navRootPage = rootPage;

      /*
       This section is for showing/hiding the navigation
       */
      switch (readmePageTitle) {
        case 'ample-affect-exhibit':
          $scope.navToggles = {
            "zero": true,
            "one": true,
            "two": true,
            "three": true,
          }
          break;
        case 'basic-poll':
          $scope.navToggles = {
            "zero": true,
            "one": true,
            "two": false,
            "three": false,
          }
          break;
        case 'copious-affect-corpus':
          $scope.navToggles = {
            "zero": true,
            "one": true,
            "two": true,
            "three": true,
          }
          break;
        default:
          $scope.navToggles = {
            "zero": false,
            "one": false,
            "two": false,
            "three": false,
          }
      }

      if ($scope.navToggles.three) {
        $scope.numPages = 4
      } else if ($scope.navToggles.two) {
        $scope.numPages = 3
      } else if ($scope.navToggles.one) {
        $scope.numPages = 2
      } else {
        $scope.numPages = 1
      }

      if (parseInt(rootPage) == 0) {
        $scope.prevPageNum = $scope.numPages - 1;
      } else {
        $scope.prevPageNum = parseInt(rootPage) - 1;
      }
      if (parseInt(rootPage) + 1 == $scope.numPages) {
        $scope.nextPageNum = 0;
      } else {
        $scope.nextPageNum = parseInt(rootPage) + 1;
      }


      /*
       This section is for the page navigation
       */
      $('.nav-item')
        .mouseenter(function() {
          $(this).find('span').addClass('load').css('visibility', 'visible');
        })
        .mouseleave(function() {
          if ($(this).attr('class') != 'nav-item active') {
            $(this).find('span').removeClass('load').css('visibility', 'hidden');
          }
        })


    }]);
