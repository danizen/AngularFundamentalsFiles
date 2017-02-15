(function() {
  'use strict';
  eventsApp.directive('upvote', function() {
    return {
      restrict: 'E',
      replace: true,
      template: angular.element('#upvote-template').html(),
      scope: {
        upvote: '&',
        downvote: '&',
        count: '='
      }
    };
  });
})();