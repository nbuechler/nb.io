// NOTE: nbApp is defined in app.js
nbioApp.controller('readmeController', ['$scope', '$state', '$http',
    function($scope, $state, $http) {

      let result;

      // https://api.github.com/repos/nbuechler/speedy-affect-scorer/readme
      // response.download_url


      // $.ajax({
      //   let readmePageTitle = window.location.hash.split('/')[1];
      //   $('#title').text(readmePageTitle)
      //   url: "https://raw.githubusercontent.com/nbuechler/" + readmePageTitle + "/master/README.md",
      // }).done(function(result) {
      //   $("#preview").append(markdown.toHTML(result));
      // });


      //
      //

      $('.nav-item').click(function () {
        $('.nav-item').removeClass('active')
        $(this).addClass('active')
      })

    }]);
