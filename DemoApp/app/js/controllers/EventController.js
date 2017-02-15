(function() {
  'use strict';

  eventsApp.controller('EventController',
    function ($scope, $route, eventData) {
      $scope.sortorder = 'name';

      $scope.event = eventData.getEvent($route.current.pathParams.eventId);

      $scope.reload = function() {
        $route.reload();
      };

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0) {
          session.upVoteCount--;
        }
      };
    }
  );
})();
