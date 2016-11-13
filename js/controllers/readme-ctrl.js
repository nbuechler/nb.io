// NOTE: nbApp is defined in app.js
nbioApp.controller('readmeController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let result;

      // https://api.github.com/repos/nbuechler/speedy-affect-scorer/readme
      // response.download_url

      $scope.loading = 1;

      let readmePageTitle = $state.current.url.split('/')[1]
      $('#title').text(readmePageTitle)
      $http.get('https://raw.githubusercontent.com/nbuechler/' + readmePageTitle + '/master/README.md')
      .success(function(response) {
        $("#preview").append(marked(response));
        $scope.loading = 0;
      });

      $('.nav-item').click(function () {
        $('.nav-item').removeClass('active')
        $(this).addClass('active')
      })


    }]);
