// NOTE: nbApp is defined in app.js
nbioApp.directive("codeContainerDirective", ['$state', '$http',
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
          },
          link: function(scope, element, attrs) {
            let readmePageTitle = $state.current.url.split('/')[1];
            let jsonKey = attrs.heading.toLowerCase().replace(/ /g,'-')
            scope.heading = attrs.heading;
            scope.navRoot = readmePageTitle;

            $http.get('js/json/' + readmePageTitle + '.json')
            .success(function(response) {
              scope.content = response[jsonKey];
            });

          }
      };
  }]);
