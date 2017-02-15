(function() {
  'use strict';
  eventsApp.directive('eventThumbnail', function($compile) {
    return {
      restrict: 'E',
      replace: true,
      template: angular.element('#eventthumb-template').html(),
      scope: { event: '=' }
    };
  });
})();
