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
          templateUrl : 'js/templates/code-container.html' + '?' + guid(),
          scope: {
            caption: "@",
          },
          link: function(scope, element, attrs) {
            let readmePageTitle = $state.current.url.split('/')[1];
            let jsonKey = attrs.caption.toLowerCase().replace(/ /g,'-')
            scope.caption = attrs.caption;
            scope.navRoot = readmePageTitle;

            $http.get('js/json/' + readmePageTitle + '.json')
            .success(function(response) {
              scope.content = response[jsonKey];
            });

          }
      };
  }]);
