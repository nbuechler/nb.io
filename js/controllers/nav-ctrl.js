// NOTE: nbApp is defined in app.js
nbioApp.controller('navController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let readmePageTitle = $state.current.url.split('/')[1];
      $scope.navRoot = readmePageTitle;

      $('.nav-item')
        .mouseenter(function() {
          $(this).find('span').addClass('load').css('visibility', 'visible');
        })
        .mouseleave(function() {
          $(this).find('span').removeClass('load').css('visibility', 'hidden');
        })

    }]);
