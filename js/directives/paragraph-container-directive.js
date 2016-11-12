// NOTE: nbApp is defined in app.js
nbioApp.directive("paragraphContainerDirective", function() {

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
          scope.heading = attrs.heading;

          console.log(scope.heading);


        }
    };
});
