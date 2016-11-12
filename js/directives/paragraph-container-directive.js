// NOTE: nbApp is defined in app.js
nbioApp.directive("paragraphContainerDirective", ['$state', '$http',
    function($state, $http) {

      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }

      return {
          restrict : 'E',
          templateUrl : 'js/templates/paragraph-container.html' + '?' + guid(),
          scope: {
            heading: "@",
            json: "@",
          },
          link: function(scope, element, attrs) {
            let readmePageTitle = $state.current.url.split('/')[1];
            let jsonKey = attrs.heading.toLowerCase().replace(/ /g,'-')
            scope.heading = attrs.heading;
            scope.navRoot = readmePageTitle;

            console.log(readmePageTitle, jsonKey);
            //
            // $http.get('js/json/' + readmePageTitle + ".json")
            // .success(function(response) {
            // });

            $.getJSON( "js/json/" + readmePageTitle + ".json", function( data ) {
              console.log(data);
            });

          }
      };
  }]);
