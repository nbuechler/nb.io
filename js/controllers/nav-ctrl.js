// NOTE: nbApp is defined in app.js
nbioApp.controller('navController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

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
        default:
          $scope.navToggles = {
            "zero": false,
            "one": false,
            "two": false,
            "three": false,
          }
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
